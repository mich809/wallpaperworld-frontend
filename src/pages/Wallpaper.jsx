import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPictureDetails } from "../utils/PictureApi";

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
		margin-right: -17px;
		height: 100%;
		padding: 1em 2em;
		text-shadow: 0 1px 1px #000;

		.sidebar-section {
			position: relative;
			margin-top: 1em;
			padding: 1em 0;
			font-size: 0.9em;
			text-align: center;
			h2 {
				margin: 0 0 1em;
				padding: 0;
				font-size: 0.85em;
				line-height: 1.52941176em;
				text-transform: uppercase;
				border: 0 none;
				text-align: left;
				font-weight: 700;
				color: #8cc;
				font-size: 1.2em;
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

	useEffect(() => {
		getPictureDetails(picName["id"]).then((pic) => {
			setPicture(pic);
		});
	}, []);

	return (
		<>
			<SearchNavBar />
			<Sidebar>
				<div className="sidebar-content" style={{}}>
					<div className="sidebar-section">
						<h2>Tags</h2>
						<ul></ul>
						<h2>Properties</h2>
						<ul>
							<li>Uploader</li>
							<li>Views </li>
							<li>Favorites</li>
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
