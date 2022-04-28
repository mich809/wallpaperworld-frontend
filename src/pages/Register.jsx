import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { registerUser } from "../utils/UserApi";
import { useRef, useState, useEffect } from "react";

const StyledSection = styled.section`
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

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;

		h1 {
			color: #ddd;
			font-size: 1.5em;
		}

		button {
			background-image: radial-gradient(
				100% 100% at 0 bottom,
				#31751d 0,
				#a1c25a 100%
			);
			color: #000;
			cursor: pointer;
			width: 95%;
			margin: 0.5em;
			padding: 0.5em;
			border-radius: 2px;

			:hover {
				border: 1px #31751d solid;
			}
		}
	}

	.authPanel {
		border-top: 2px solid #333;
		padding: 1em;
		width: 50%;
		text-align: center;

		input {
			color: #ddd;
			width: 85%;
			font-size: 1.4em;
			margin: 0.5em;
			padding: 0.5em;
			background-color: #313131;
			border-radius: 2px;
			box-shadow: inset 0 0 0.75em rgba(255, 255, 255, 0.03), 0 2px 0 #222,
				0 3px 4px -3px #000, 0 1px 2px rgba(0, 0, 0, 0.2);

			:focus {
				background-color: #ddd;
				color: #313131;
			}
		}

		.instructions {
			font-size: 0.75rem;
			border-radius: 0.5rem;
			background: rgba(0, 0, 0, 0.3);
			color: #fff;
			padding: 0.25rem;
			position: relative;
			left: 20px;
			width: 70%;
			text-align: left;
		}

		.offscreen {
			position: absolute;
			left: -9999px;
		}

		.errorMessage {
			background-color: lightpink;
			color: firebrick;
			font-weight: bold;
			padding: 0.5rem;
			margin-bottom: 0.5rem;
		}

		button {
			background-image: radial-gradient(
				100% 100% at 0 bottom,
				#31751d 0,
				#a1c25a 100%
			);
			color: #000;
			cursor: pointer;
			width: 85%;
			margin: 0.5em;
			padding: 0.5em;
			border-radius: 2px;

			:hover {
				border: 1px #31751d solid;
			}
		}
	}
`;

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%#]).{8,24}$/;

function Register() {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	const [matchPassword, setMatchPassword] = useState("");
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		setValidName(result);
	}, [user]);

	useEffect(() => {
		const result = PASSWORD_REGEX.test(password);
		setValidPassword(result);
		const match = password === matchPassword;
		setValidMatch(match);
	}, [password, matchPassword]);

	useEffect(() => {
		setErrorMessage("");
	}, [user, password, matchPassword]);

	const onSubmit = (e) => {
		e.preventDefault();
		const newUser = { username: user, password: password };
		registerUser(newUser)
			.then((response) => {
				console.log(response);
				setSuccess(true);
			})
			.catch((err) => {
				console.log(err);
				setErrorMessage("Something went wrong! Try again!");
			});
	};

	return (
		<>
			<SearchNavBar />

			<StyledSection>
				<Base>
					<div className="sidePanel">
						<h1>Welcome to WallPaperWorld!</h1>
						<ul>
							<li>Advanced search by tags.</li>
							<li>Upload wallpapers so that others can see.</li>
							<li>Never miss a new wallpaper with tag and uploader.</li>
						</ul>
					</div>

					{success ? (
						<section>
							{" "}
							<h1>You have succesfully registered.</h1>
							<p>
								<button>
									<a href="/login">Sign In</a>
								</button>
							</p>
						</section>
					) : (
						<div className="authPanel">
							<p
								ref={errRef}
								className={errorMessage ? "errorMessage" : "offscreen"}
								aria-live="assertive"
							>
								{errorMessage}
							</p>
							<form onSubmit={onSubmit}>
								<input
									id="usernameInput"
									type="text"
									ref={userRef}
									autoComplete="off"
									onChange={(e) => setUser(e.target.value)}
									required
									onFocus={() => setUserFocus(true)}
									onBlur={() => setUserFocus(false)}
									placeholder="username"
								/>
								<p
									id="usernameInput"
									className={
										userFocus && user && !validName
											? "instructions"
											: "offscreen"
									}
								>
									4 to 24 characters. <br />
									Must begin with a letter. <br />
									Letters, numbers, underscores, hyphens allowed.
								</p>

								<input
									id="password"
									type="password"
									onChange={(e) => setPassword(e.target.value)}
									required
									onFocus={() => setPasswordFocus(true)}
									onBlur={() => setPasswordFocus(false)}
									placeholder="password"
								/>
								<p
									id="usernameInput"
									className={
										passwordFocus && !validPassword
											? "instructions"
											: "offscreen"
									}
								>
									8 to 24 characters. <br />
									Must include uppercase and lowercase letters,a number and a
									special character. <br />
								</p>

								<input
									type="password"
									onChange={(e) => setMatchPassword(e.target.value)}
									required
									onFocus={() => setMatchFocus(true)}
									onBlur={() => setMatchFocus(false)}
									placeholder="confirm password"
								/>
								<p
									id="confirmPassword"
									className={
										matchFocus && !validMatch ? "instructions" : "offscreen"
									}
								>
									Must match the first password input field.
								</p>
								<button
									disabled={
										!validName || !validPassword || !validMatch ? true : false
									}
								>
									Sign Up
								</button>
							</form>
						</div>
					)}
				</Base>
			</StyledSection>
		</>
	);
}

export default Register;
