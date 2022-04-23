import styled from "styled-components";

export const Container = styled.main`
	position: relative;
	height: 100vh;
	min-width: 800px;
	border-color: #000;
	border-top-width: 50px;
	background: #171717;
	z-index: 100;

	header {
		background-image: radial-gradient(
			400px 80px at 0px top,
			rgba(65, 153, 255, 0.3),
			transparent
		);
		position: relative;
		margin: 0;
		text-align: left;
		padding: 1em 2em;
		font-weight: 700;
		display: block;

		h1 {
			margin: 0.1em 1em 0.1em 0;
			font-size: 2em;
			vertical-align: middle;
			text-shadow: 1px 2px 4px #000;
			color: #ddd;
		}
	}

	div {
		text-align: center;
	}
`;
