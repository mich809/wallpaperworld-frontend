import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPictureDetails } from "../utils/PictureApi";
import { addToFavorites } from "../utils/UserApi";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const TagItem = styled.li`
	color: #94db94;
	text-align: center;
	margin: 0 4px 4px 0;
	padding: 0.3em;
	background-color: #293033;
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
	border-radius: 8px 0;
`;

const Sidebar = styled.aside`
	background-color: #1b1b1b;
	border-color: #292929;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
	left: 0;
	z-index: 150;
	position: fixed;
	bottom: 0;
	top: 50px;
	width: 20em;

	.sidebar-content {
		height: 100%;
		padding: 0em 2em;
		text-shadow: 0 1px 1px #000;

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
			color: red;
			cursor: pointer;
			background-color: #171717;

			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
			text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

			svg {
				color: white;
			}

			:hover {
				svg {
					color: red;
					font-size: 1.2em;
				}
			}
		}

		.sidebar-section {
			position: relative;
			margin-top: 1em;
			padding: 1em 0;
			font-size: 1.4em;

			h2 {
				text-transform: uppercase;
				text-align: left;
				color: #8cc;
				border-bottom: 1px dotted #333;
			}

			ul {
				list-style-type: none;
				padding-top: 5px;
				text-align: center;

				span {
					color: #85aaaf;
				}

				li {
					line-height: 2em;
					display: flex;

					p {
						color: #dddddd;
						padding-left: 1em;
					}
				}
			}
		}
	}
`;

const Showcase = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #171717;

	img {
		position: absolute;
		top: 15%;
		left: 25%;
		max-width: 75%;
		max-height: 75%;
		user-select: none;
		cursor: zoom-in;
		cursor: -webkit-zoom-in;
		display: inline-block;
		box-sizing: content-box;
		display: block;
		margin: auto;
	}
`;

const Wallpaper = () => {
	let picName = useParams();
	const [picture, setPicture] = useState({});
	const [Tag, setTags] = useState([]);

	useEffect(() => {
		getPictureDetails(picName["id"]).then((pic) => {
			setPicture(pic);
			setTags(pic.tags);
		});
	}, [picName]);

	const favoritePicture = () => {
		addToFavorites(picName["id"])
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<SearchNavBar />
			<Sidebar>
				<div className="sidebar-content" style={{}}>
					<div className="sidebar-section">
						<h2>Tags</h2>
						<ul
							style={{
								display: "flex",
								alignItems: "center",
								alignContent: "center",
								flexWrap: "wrap",
							}}
						>
							{Tag.map((tag, index) => (
								<TagItem key={index}>
									<Link to="/#">{tag}</Link>
								</TagItem>
							))}
						</ul>
						<h2>Properties</h2>
						<ul>
							<li>
								<span>Uploader </span> <p>{picture.uploadedBy}</p>
							</li>
							<li>
								<span>Views</span> <p>{picture.viewCount}</p>
							</li>
							<li>
								<span>Favorites</span> <p>{picture.favorites}</p>
							</li>
						</ul>
					</div>
					{localStorage.getItem("user") && (
						<button onClick={favoritePicture}>
							<FaHeart style={{ marginRight: "0.4em" }} />
							Add to favorites
						</button>
					)}
				</div>
			</Sidebar>
			<Showcase>
				<img src={picture.url} alt="" />
			</Showcase>
		</>
	);
};

export default Wallpaper;
