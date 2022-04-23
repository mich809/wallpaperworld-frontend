import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPictureDetails } from "../utils/PictureApi";

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
	}, []);

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
									<a href="/#">{tag}</a>
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
				</div>
			</Sidebar>
			<Showcase>
				<img src={picture.url} alt="" />
			</Showcase>
		</>
	);
};

export default Wallpaper;
