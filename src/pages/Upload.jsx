import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { uploadPicture } from "../utils/PictureApi";
import { useNavigate } from "react-router-dom";
import { MdOutlineUploadFile } from "react-icons/md";

const TagContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	border-radius: 5px;
	max-width: 80%;

	ul {
		list-style-type: none;
		display: flex;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;
	}

	input {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 2px;
		box-shadow: 2px 2px 4px rgb(0 0 0 / 60%);
		padding: 1em;
		height: 2em;
		color: #fff;
		text-shadow: 1px 1px 0 rgb(0 0 0 / 50%);
		::placeholder {
			color: #fff;
		}
		width: 250px;
	}

	.tag {
		line-height: 2em;
		display: flex;
		color: #94db94;
		text-align: center;
		margin: 0 4px 4px 0;
		padding: 0.3em;
		background-color: #293033;
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
		text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
		border-radius: 8px 0;

		span {
			margin-left: 0.4em;
			cursor: pointer;
			color: red;
		}
	}
`;

const Sidebar = styled.aside`
	background-color: #1b1b1b;
	border-color: #292929;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
	left: 0;
	border-width: 0 1px 0 0;
	z-index: 150;
	position: fixed;
	bottom: 0;
	top: 50px;
	width: 20em;

	.rules {
		margin-top: 3em;

		span {
			color: red;
		}
		h1 {
			text-transform: uppercase;
			color: #8cc;
			font-size: 1.5em;
		}

		ul {
			list-style-type: disc;
			margin-left: 1.2em;
			text-align: left;
			color: #ddd;
			margin-left: 3em;
		}
	}

	form {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 6em;
		justify-content: flex-start;

		.fileContainer {
			margin-top: 5em;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1em;
		}

		h1 {
			text-transform: uppercase;
			color: #8cc;
			font-size: 1.5em;
		}

		input[type="file"] {
			display: none;
		}
		.custom-file-upload {
			border: 1px solid #ccc;
			display: inline-block;
			padding: 6px 12px;
			cursor: pointer;
			background-color: #ddd;
			width: 70%;
			font-size: 1.2em;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0.2em;
			padding: 0.3em;
		}

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 2px;
			margin: 0.6em;
			padding: 0.8em;
			width: 85%;
			font-size: 1.3em;
			text-shadow: none;
			color: #000;
			cursor: pointer;
			background-image: radial-gradient(
				100% 100% at 0 bottom,
				#31751d 0,
				#a1c25a 100%
			);
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
			text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
			width: 10em;

			:disabled {
				border: 1px solid #999999;
				background-color: #cccccc;
				color: #666666;
				background-image: none;
				cursor: not-allowed;
				pointer-events: all !important;
			}
		}
	}
`;

const Main = styled.main`
	border-top-width: 20px;
	background: #171717;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;

	h1 {
		color: #ddd;
		font-size: 3.5em;
		margin: 1em;
	}

	h2 {
		color: #ddd;
		font-size: 1.5em;
		margin: 1em;
	}
	.container {
		position: relative;
		bottom: 130px;
		width: 60%;
		text-align: center;
		background-color: #1a1a1a;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.33);
		border-radius: 3px;
		margin-left: 15em;
		margin-top: 15em;

		.errorMessage {
			color: red;
		}

		button {
			cursor: pointer;
			background-color: #ddd;
			font-size: 1.2em;
			margin: 0.2em;
			padding: 0.3em;
		}
	}
`;

const Upload = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [tags, setTags] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const errRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		setErrorMessage("");
	}, [selectedImage]);

	const addTag = (e) => {
		if (e.key === "Enter") {
			if (e.target.value.length > 0) {
				setTags([...tags, e.target.value]);
				e.target.value = "";
			}
		}
	};

	const removeTag = (removedTag) => {
		const newTags = tags.filter((tag) => tag !== removedTag);
		setTags(newTags);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("file", selectedImage, selectedImage.name);
		formData.append("tags", tags);
		uploadPicture(formData)
			.then((response) => {
				console.log(response.data);
				navigate(`/wallpaper/${response.data.name}`);
			})
			.catch((err) => {
				console.log(err);
				setErrorMessage("Something went wrong! try again!");
			});
	};

	return (
		<>
			<SearchNavBar />
			<Main>
				<div className="container">
					<h1>𝕎𝕒𝕝𝕝ℙ𝕒𝕡𝕖𝕣𝕎𝕠𝕣𝕝𝕕</h1>
					<h2>Wallpaper Upload</h2>
					<div>
						<div>
							{selectedImage && (
								<div>
									<p
										ref={errRef}
										className={errorMessage ? "errorMessage" : "offscreen"}
									>
										{errorMessage}
									</p>
									<img
										alt="not found"
										width={"60%"}
										src={URL.createObjectURL(selectedImage)}
									/>
									<br />
									<button onClick={() => setSelectedImage(null)}>Remove</button>
								</div>
							)}
							<br />

							<br />
						</div>

						<Sidebar>
							<div className="rules">
								<h1>Rules</h1>
								<ul>
									<li>
										Add at least <span>2 descriptive tags</span> per wallpaper.
									</li>
									<li>
										No <span>offensive</span> images.
									</li>
									<li>
										Please wait up to <span>24 hours</span> for approval.
									</li>
								</ul>
							</div>
							<form
								onSubmit={(e) => {
									e.preventDefault();
								}}
							>
								<TagContainer>
									<h1>Tags</h1>
									<ul>
										{tags.map((tag, index) => (
											<li key={index} className="tag">
												{tag} <span onClick={() => removeTag(tag)}>x</span>
											</li>
										))}
									</ul>
									<input onKeyDown={addTag} placeholder="enter tags" />
								</TagContainer>
								<div className="fileContainer">
									<h1>File</h1>
									<label htmlFor="file-upload" className="custom-file-upload">
										<MdOutlineUploadFile />
										Select file
									</label>

									<input
										id="file-upload"
										type="file"
										onChange={(event) => {
											setSelectedImage(event.target.files[0]);
										}}
										accept="image/jpeg,image/png"
									/>
									<button
										type="button"
										disabled={!selectedImage || tags.length < 2}
										onClick={handleSubmit}
									>
										Upload
									</button>
								</div>
							</form>
						</Sidebar>
					</div>
				</div>
			</Main>
		</>
	);
};

export default Upload;
