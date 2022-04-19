import styled from "styled-components";

const Pic = styled.img`
	max-width: 100%;
	border-radius: 5px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
	transition: 0.25s;
	width: 350px;
	height: 200px;

	:hover {
		filter: brightness(150%);
	}
`;

function Picture(props) {
	return <Pic src={props.src} alt=""></Pic>;
}

export default Picture;
