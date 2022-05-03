import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	font-size: 1.1em;
	white-space: nowrap;
	background-color: #212427;
	background-image: linear-gradient(to bottom, #292c2f 0, #191c1f 100%);
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.75);
	box-shadow: inset 0 0 0 1px rgba(31, 31, 31, 0.66),
		0 0 10px rgba(0, 0, 0, 0.75), 0 0 10px rgba(0, 0, 0, 0.75);

	position: fixed;
	top: 0;
	height: 50px;
	width: 100%;
	min-width: 640px;
	z-index: 200;

	div {
		border-left: 1px solid rgba(0, 0, 0, 0.5);
		border-right: 1px solid rgba(255, 255, 255, 0.05);
		position: relative;
		font-family: Montserrat, "Source Sans Pro", Arial, sans;
		font-variant: small-caps;
		line-height: 50px;
		display: inline-block;
		vertical-align: top;
		text-align: center;
	}
`;

const StyledItem = styled.li`
	border-right: 1px solid rgba(0, 0, 0, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.05);
	display: inline-block;
	color: ${(props) => props.color};
	font-size: 25px;
	padding: 0px 30px;
`;

const StyledAnchor = styled(Link)`
	background-color: ${(props) => props.backgroundcolor};
	color: ${(props) => props.textcolor};
	text-shadow: none;
	display: inline-block;
	margin: 0.2em 0.25em;
	padding: 0.5em 1em;
	text-align: center;
	cursor: pointer;
	text-shadow: -1px -1px 0 #000;
	border-radius: 3px;
	background-size: 100% 150%;
	background-position: 0 100%;
`;

const FormStyle = styled.form`
	flex-grow: 1;
	margin-left: 1em;
	display: flex;
	align-items: center;

	div {
		flex-grow: 1;
		max-width: 30em;
		display: flex;
		border-width: 1px 0 1px 1px;
		border-color: #000 #252525 #262626 #000;
		border-radius: 3px 0 0 3px;
		background-color: #1b1b1b;
		background-image: linear-gradient(to bottom, #191919 0, #1c1c1c 100%);
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);

		input {
			flex-grow: 1;
			height: 2em;
			line-height: 2em;
			padding: 0 0.5em;
			background: 0 0;
			box-shadow: none;
			color: #fff;

			::placeholder {
				color: #fff;
			}
		}
	}

	button {
		box-sizing: content-box;
		width: 2em;
		height: 2em;
		cursor: pointer;
		color: #aaa;
		background-color: #222;
		background-image: linear-gradient(to bottom, #242424 0, #1f1f1f 100%);
		border-width: 1px 1px 1px 0;
		border-color: #000 #252525 #262626 #000;
		border-radius: 0 3px 3px 0;
	}
`;

const UserPanel = styled.div`
	height: 50px;
	margin-right: 0.5em;
	position: relative;
	display: -ms-flexbox;
	display: flex;
`;

function SearchNavBar() {
	let navigate = useNavigate();
	const [input, setInput] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/search/" + input);
	};

	function logout() {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
	}

	return (
		<StyledHeader>
			<div>
				<ul>
					<StyledItem color="#ddd">
						<Link to="/">𝕎𝕒𝕝𝕝ℙ𝕒𝕡𝕖𝕣𝕎𝕠𝕣𝕝𝕕</Link>
					</StyledItem>
					<StyledItem color="#ad3">
						<Link to="/latest">Latest</Link>
					</StyledItem>
					<StyledItem color="#b760f0">
						{" "}
						<Link to="/toplist">TopList</Link>
					</StyledItem>
					<StyledItem color="#e73">
						{" "}
						<Link to="/random">Random</Link>
					</StyledItem>
					<StyledItem color="#d55">
						{" "}
						<Link to="/upload">Upload</Link>
					</StyledItem>
				</ul>
			</div>
			<FormStyle onSubmit={submitHandler}>
				<div>
					<input
						placeholder="Search..."
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</div>
			</FormStyle>

			<UserPanel>
				{!localStorage.getItem("user") && (
					<StyledAnchor to="/register" backgroundcolor="#d55" textcolor="#ddd">
						Register
					</StyledAnchor>
				)}
				{!localStorage.getItem("user") && (
					<StyledAnchor to="/login" backgroundcolor="#204650" textcolor="#ddd">
						Login
					</StyledAnchor>
				)}
				{localStorage.getItem("user") && (
					<StyledAnchor
						to={`/profile/${localStorage.getItem("user")}`}
						backgroundcolor="#d55"
						textcolor="#ddd"
					>
						Profile
					</StyledAnchor>
				)}
				{localStorage.getItem("user") && (
					<StyledAnchor
						to="/login"
						onClick={logout}
						backgroundcolor="#204650"
						textcolor="#ddd"
					>
						logout
					</StyledAnchor>
				)}
			</UserPanel>
		</StyledHeader>
	);
}

export default SearchNavBar;
