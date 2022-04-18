import React from "react";
import styled from "styled-components";
import { getRandomPictures } from "../../utils/PictureApi";
import { useState, useEffect } from "react";

const FeatureContainer = styled.div`
	max-width: 1560px;
	margin: auto;
`;

const FirstRow = styled.div`
	justify-content: center;
	max-width: 1560px;
	display: inline-flex;
	flex-wrap: nowrap;

	span {
		padding: 2px 6px;
	}

	img {
		max-width: 100%;
		border-radius: 5px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
		transition: 0.25s;
		width: 350px;
		height: 200px;
	}
	img:hover {
		filter: brightness(150%);
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

function FeatRow(props) {
	return (
		<>
			{props.pics.slice(0, 4).map((picture) => (
				<FirstRow key={picture.id}>
					<span>
						<a href="/#">
							<img src={picture.pictureUrl} alt="" />
						</a>
					</span>
				</FirstRow>
			))}
		</>
	);
}
function StartPageRow() {
	return (
		<SecondRow>
			<p>New here?</p>
			<p>
				<a href="/#">Create a new account!</a> - or - <a href="/#">Log in</a>
			</p>
		</SecondRow>
	);
}

// function MoreFeat() {}

function FeatureRow() {
	const [pictures, setPictures] = useState([]);

	useEffect(() => {
		let mounted = true;
		getRandomPictures().then((items) => {
			if (mounted) {
				setPictures(items);
			}
		});
		return () => (mounted = false);
	}, []);

	return (
		<FeatureContainer>
			<FeatRow pics={pictures} />
			<StartPageRow></StartPageRow>
		</FeatureContainer>
	);
}

export default FeatureRow;
