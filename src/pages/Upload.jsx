import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import React, { useState, useRef } from "react";
import { uploadPicture } from "../utils/PictureApi";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
	min-height: 100vh;
	border-top-width: 20px;
	background: #171717;
	display: flex;
	align-items: center;
	justify-content: center;

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
		margin: 2em auto;
		width: 60%;
		padding: 1em;
		text-align: center;
		background-color: #1a1a1a;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.33);
		border-radius: 3px;
	}
`;

const Upload = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const errRef = useRef();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		let formData = new FormData();
		formData.append("file", selectedImage, selectedImage.name);
		formData.append("tags", "batman");
		uploadPicture(formData)
			.then((response) => {
				navigate(`/wallpaper/${response.data.pictureName}`);
			})
			.catch((err) => {
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
						<form onSubmit={handleSubmit}>
							<input
								type="file"
								name="myImage"
								onChange={(event) => {
									setSelectedImage(event.target.files[0]);
								}}
								accept="image/jpeg,image/png"
							/>

							<button disabled={!selectedImage}>upload</button>
						</form>
						<p
							ref={errRef}
							className={errorMessage ? "errorMessage" : "offscreen"}
						>
							{errorMessage}
						</p>
					</div>
				</div>
			</Main>
		</>
	);
};

export default Upload;
