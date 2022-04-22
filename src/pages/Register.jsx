import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { registerUser } from "../utils/UserApi";

const Main = styled.main`
	min-height: 100vh;
	border-top-width: 20px;
	background: #171717;
`;

const Base = styled.div`
	background: #1a1a1a;
	box-shadow: 1px 10px 15px rgba(0, 0, 0, 0.7);
	border-radius: 3px;
	max-width: 45em;
	margin: 7em auto;
	display: flex;

	.sidePanel {
		padding: 1em;
		background: rgba(0, 0, 0, 0.3);
		text-shadow: 0 0 5px #000;
		font-family: Montserrat, "Source Sans Pro", Arial, sans;
		font-size: 2.2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
		color: white;

		ul {
			white-space: normal;
			text-align: left;
			font-size: 0.5em;

			li {
				margin: 0.35em;
			}
		}
	}

	.authPanel {
		border-top: 2px solid #333;
		padding: 1em;
		display: flex;
		width: 50%;

		input {
			color: white;
			width: 85%;
			font-size: 1.4em;
			margin: 0.5em;
			padding: 0.5em;
			background-color: #313131;
			border-radius: 2px;
			box-shadow: inset 0 0 0.75em rgba(255, 255, 255, 0.03), 0 2px 0 #222,
				0 3px 4px -3px #000, 0 1px 2px rgba(0, 0, 0, 0.2);
		}

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 2px;
			margin: 0.6em;
			padding: 0.5em;
			width: 85%;

			font-size: 1.3em;
			text-shadow: none;
			background-image: radial-gradient(
				100% 100% at 0 bottom,
				#31751d 0,
				#a1c25a 100%
			);
			color: #000;
			cursor: pointer;
		}
	}
`;

function Register() {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	// let errors = {};

	// function validate() {
	// 	let isValid = true;

	// 	if (user["password"] !== user["confirmPassword"]) {
	// 		isValid = false;
	// 		errors["password"] = "Passwords don't match.";
	// 	}

	// 	return isValid;
	// }

	function handleChange(event) {
		user[event.target.name] = event.target.value;
		setUser(user);
	}

	function handleSubmit(event) {
		// event.preventDefault();
		// registerUser(user);
	}

	return (
		<>
			<SearchNavBar />
			<Main>
				<Base>
					<div className="sidePanel">
						<h1>Welcome to WallPaperWorld!</h1>
						<ul>
							<li>Advanced search by tags.</li>
							<li>Upload wallpapers so that others can see.</li>
							<li>Never miss a new wallpaper with tag and uploader.</li>
						</ul>
					</div>
					<div className="authPanel">
						<form action="" onSubmit={handleSubmit.bind(this)}>
							<input
								type="text"
								placeholder="Username"
								name="username"
								required
								onChange={handleChange.bind(this)}
							></input>
							<input
								type="password"
								placeholder="Password"
								name="password"
								required
								onChange={handleChange.bind(this)}
							></input>
							{/* <input
								type="password"
								placeholder="Password(confirm)"
								required
								name="confirmPassword"
								onChange={handleChange.bind(this)}
							></input> */}

							<button type="submit">
								<IoMdCheckmark style={{ fontSize: "1.3em" }} />
								Register
							</button>
						</form>
					</div>
				</Base>
			</Main>
		</>
	);
}

export default Register;
