import styled from "styled-components";
import { getHomePictures } from "../../utils/PictureApi";
import { useState, useEffect } from "react";
import Picture from "../../components/Commons/Picture";

const FeatureContainer = styled.div`
	max-width: 1560px;
	margin: auto;
`;

const PictureRow = styled.div`
	justify-content: center;
	max-width: 1560px;
	display: inline-flex;
	flex-wrap: nowrap;

	span {
		padding: 2px 6px;
	}
`;

const SecondRow = styled.div`
	display: flex;
	justify-content: center;
	align-content: space-around;
	align-items: center;
	margin: 1em;
	background: linear-gradient(
		to right,
		rgba(0, 0, 0, 0) 0,
		rgba(0, 0, 0, 0.2) 10%,
		rgba(0, 0, 0, 0.2) 90%,
		rgba(0, 0, 0, 0) 100%
	);
	color: white;

	p {
		margin: 1em;
		font-size: 1.5em;
		font-weight: 700;
	}

	a {
		color: #0cd;
		cursor: pointer;
		font-weight: normal;
	}
`;

const StatsRow = styled.div`
	padding: 0px 60px;
	margin: 2em auto;
	display: flex;
	justify-content: space-between;
	align-content: stretch;
	align-items: flex-start;

	div {
		padding: 1em;
		text-align: left;
		background: rgba(0, 0, 0, 0.2);
		width: 45%;
	}

	h3 {
		margin: 0;
		padding: 0;
		line-height: 2em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		color: #fff;
		text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
	}
	p {
		margin: 1em 0;
		color: #fff;
	}
`;

function FeatRow({ pics, nums }) {
	return (
		<>
			{pics.length <= 0 && (
				<h1 style={{ fontSize: "2em", color: "#ddd" }}>
					No pics yet, maybe you should upload some?
				</h1>
			)}
			{pics.slice(nums[0], nums[1]).map((picture) => (
				<PictureRow key={picture.id}>
					<span>
						<Picture src={picture.pictureUrl} url={picture.name} alt="" />
					</span>
				</PictureRow>
			))}
		</>
	);
}
function SignUpRow() {
	return (
		<SecondRow>
			<p>New here?</p>
			<p>
				<a href="/register">Create a new account!</a> - or -{" "}
				<a href="/login">Log in</a>
			</p>
		</SecondRow>
	);
}

function Stats() {
	return (
		<StatsRow>
			<div>
				<h3>WallPaperWorld Stats</h3>
				<p>
					{" "}
					WallPaperWorld is home to <strong>929,075</strong> high quality
					wallpapers which have been viewed a total of{" "}
					<strong>2.43 billion</strong> times!{" "}
				</p>
				<p>
					{" "}
					We have <strong>771,162</strong> awesome users.
				</p>
				<p>
					{" "}
					Not sure what to search for? We're sure at least one of our{" "}
					<strong>76,013</strong> user created tags will help you find
					something!{" "}
				</p>
			</div>
		</StatsRow>
	);
}

function FeatureRow() {
	const [pictures, setPictures] = useState([]);

	useEffect(() => {
		getHomePictures()
			.then((response) => {
				setPictures(response);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<FeatureContainer>
			<FeatRow pics={pictures} nums={[0, 4]} />
			<SignUpRow />
			<FeatRow pics={pictures} nums={[4, pictures.length]} />
			<Stats />
		</FeatureContainer>
	);
}

export default FeatureRow;
