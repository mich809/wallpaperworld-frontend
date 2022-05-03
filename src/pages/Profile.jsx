import React from "react";
import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getUserInfo } from "../utils/UserApi";
import Picture from "../components/Commons/Picture";

export const Container = styled.main`
	position: relative;
	height: 100vh;
	min-width: 800px;
	border-color: #000;
	border-top-width: 50px;
	background: #171717;
	z-index: 100;

	.content {
		margin: 0 5% 40px;
		padding: 40px 20px 20px;
		text-align: left;
		overflow: hidden;
		background-color: #1a1a1a;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.33);
		border-radius: 0 0 3px 3px;
		display: flex;

		.profile-box {
			overflow: hidden;

			margin-bottom: 1em;
			flex: 1;

			h2 {
				font-weight: 700;
				margin: 1.5em 0 1em;
				padding: 0.25em;
				color: #8cc;
				/* border-style: dotted;
				border-color: #333;
				border-width: 0 0 1px 0; */
			}

			dl {
				padding-left: 0.25em;
				white-space: nowrap;

				dt {
					width: 20%;
					padding-right: 1em;
					color: #85aaaf;
					background-color: #212121;
					border-radius: 2px;
					box-shadow: inset 0 0 0.75em rgba(255, 255, 255, 0.02),
						0 2px 0 #1c1c1c, 0 3px 4px -3px #000, 0 1px 2px rgba(0, 0, 0, 0.2);
					float: left;
				}

				dd {
					margin: 0.5em;
					color: #ddd;
					border-radius: 2px;
					background-color: #292929;
					box-shadow: inset 0 0 0.75em rgba(255, 255, 255, 0.03), 0 2px 0 #222,
						0 3px 4px -3px #000, 1px 1px 2px rgba(0, 0, 0, 0.2);
				}
			}
		}
	}
`;

const Profile = () => {
	const [user, setUser] = useState({});
	const [favoritePics, setFavoritePics] = useState([]);
	const [uploadedPics, setUploadedPics] = useState([]);

	function formatDate(string) {
		var options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(string).toLocaleDateString([], options);
	}
	useEffect(() => {
		getUserInfo()
			.then((response) => {
				setUser(response.data);
				setFavoritePics(response.data.favoritePictures);
				setUploadedPics(response.data.pictures);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<SearchNavBar />
			<Container>
				<div className="content">
					<div className="profile-box">
						<h2>User's Information</h2>
						<dl style={{ marginTop: "1.5em" }}>
							<dt>Joined:</dt>
							<dd>{formatDate(user.date)}</dd>
							<dt>Uploads:</dt>
							<dd>{user.uploadedPicsCount}</dd>
							<dt>Favorites:</dt>
							<dd>{user.favoritePicsCount}</dd>
						</dl>
					</div>
					<div className="profile-box">
						<h2>User's Favorites</h2>
						{favoritePics.map((pic, index) => (
							<Picture
								src={pic.pictureUrl}
								url={pic.name}
								alt=""
								key={index}
								height="100px"
								width="200px"
							/>
						))}
					</div>
					<div className="profile-box">
						<h2>User's Uploads</h2>
						{uploadedPics.map((pic, index) => (
							<Picture
								src={pic.pictureUrl}
								url={pic.name}
								alt=""
								key={index}
								height="100px"
								width="200px"
							/>
						))}
					</div>
				</div>
			</Container>
		</>
	);
};

export default Profile;
