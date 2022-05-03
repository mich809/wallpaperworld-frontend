import styled from "styled-components";
import { Link } from "react-router-dom";

const Pic = styled.img`
	max-width: 100%;
	border-radius: 5px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
	width: ${(props) => (props.pictureWidth ? props.pictureWidth : "350px")};
	height: ${(props) => (props.pictureHeight ? props.pictureHeight : "200px")};
	margin: 0.4em;

	:hover {
		filter: brightness(150%);
	}
`;

function Picture(props) {
	console.log(props);
	return (
		<>
			<Link to={`/wallpaper/${props.url}`}>
				<Pic
					src={props.src}
					alt=""
					pictureHeight={props.height}
					pictureWidth={props.width}
				></Pic>
			</Link>
		</>
	);
}

export default Picture;
