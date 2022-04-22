import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";

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
		font-size: 2.2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
		color: white;
		text-align: center;
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

function Login() {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	function handleUserName(event) {
		setUser({ ...user, username: event.target.value });
	}

	function handlePassword(event) {
		setUser({ ...user, password: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(user);
	}

	return (
		<>
			<SearchNavBar />
			<Main>
				<Base>
					<div className="sidePanel">
						<h1>Welcome Back.</h1>
					</div>
					<div className="authPanel">
						<form action="" onSubmit={handleSubmit.bind(this)}>
							<input
								type="text"
								placeholder="Username"
								required
								onChange={handleUserName.bind(this)}
							></input>
							<input
								type="password"
								placeholder="Password"
								required
								onChange={handlePassword.bind(this)}
							></input>

							<button type="submit">
								{" "}
								<BiLogInCircle style={{ fontSize: "1.5em" }} />
								Login
							</button>
						</form>
					</div>
				</Base>
			</Main>
		</>
	);
}

export default Login;
