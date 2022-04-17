import { FaRegClock, FaUpload, FaRandom, FaGem } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
	display: flex;
	justify-content: center;
	margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-right: 1rem;
	border-radius: 3px;
	text-decoration: none;
	background: linear-gradient(
		to top,
		rgba(0, 0, 0, 0.5) 0,
		rgba(0, 0, 0, 0.1) 100%
	);
	width: 7rem;
	height: 6rem;
	cursor: pointer;
	transform: scale(1);
	padding: 1em;

	h4 {
		color: ${(props) => props.color};
		font-size: 1.3em;
	}

	svg {
		color: ${(props) => props.color};
		font-size: 2rem;
	}
`;

function Navbar() {
	return (
		<List>
			<SLink color="#ad3" to={"/latest"}>
				<FaRegClock />
				<h4>Latest</h4>
			</SLink>
			<SLink color="#b760f0" to={"/top"}>
				<FaGem />
				<h4>Toplist</h4>
			</SLink>
			<SLink color="#e73" to={"/random"}>
				<FaRandom />
				<h4>Random</h4>
			</SLink>
			<SLink color="#d55" to={"/upload"}>
				<FaUpload />
				<h4>Upload</h4>
			</SLink>
		</List>
	);
}

export default Navbar;
