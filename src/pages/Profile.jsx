import React from "react";
import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { useEffect } from "react";

export const Container = styled.main`
	position: relative;
	height: 100vh;
	min-width: 800px;
	border-color: #000;
	border-top-width: 50px;
	background: #171717;
	z-index: 100;
`;

const Profile = () => {
	useEffect(() => {}, []);

	return (
		<>
			<SearchNavBar />
			<Container></Container>
		</>
	);
};

export default Profile;
