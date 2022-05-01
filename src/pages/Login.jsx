import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { login } from "../utils/UserApi";
import { useRef, useState, useEffect } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

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
		text-align: center;
		flex-direction: column;

		.errorMessage {
			color: red;
		}

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
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const userRef = useRef();
	const errRef = useRef();

	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrorMessage("");
	}, [username, password]);

	const handleSubmit = (e) => {
		e.preventDefault();
		login({ username: username, password: password })
			.then((response) => {
				localStorage.setItem("token", response.data.jwt);
				localStorage.setItem("user", username);
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				setErrorMessage("Something went wrong! try again!");
			});
	};

	return (
		<>
			<SearchNavBar />
			<Main>
				<Base>
					<div className="sidePanel">
						<h1>Welcome Back.</h1>
					</div>
					<div className="authPanel">
						<p
							ref={errRef}
							className={errorMessage ? "errorMessage" : "offscreen"}
						>
							{errorMessage}
						</p>

						<form onSubmit={handleSubmit}>
							<input
								type="text"
								id="username"
								ref={userRef}
								autoComplete="off"
								onChange={(e) => setUserName(e.target.value)}
								value={username}
								placeholder="username"
								required
							/>

							<input
								type="password"
								id="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								required
								placeholder="password"
							/>
							<button>Sign In</button>
							<p style={{ color: "#ddd" }}>
								Need an Account?
								<br />
								<Link to="/register" style={{ color: "#6495ED" }}>
									Sign Up
								</Link>
							</p>
						</form>
					</div>
				</Base>
			</Main>
		</>
	);
}

export default Login;
