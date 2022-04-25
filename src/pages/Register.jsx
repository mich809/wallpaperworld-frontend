import SearchNavBar from "../components/Commons/SearchNavBar";
import styled from "styled-components";
import { registerUser } from "../utils/UserApi";
import { useForm } from "react-hook-form";

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

		.SubmitBtn {
			background-image: radial-gradient(
				100% 100% at 0 bottom,
				#31751d 0,
				#a1c25a 100%
			);
			color: #000;
			cursor: pointer;

			:hover {
				border: 1px #31751d solid;
			}
		}
	}
`;

function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (user) => {
		console.log(user);
		registerUser(user);
	};

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
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								type="text"
								placeholder="Username"
								{...register("username", {
									required: true,
									min: 3,
									maxLength: 15,
								})}
							/>
							{errors.username && (
								<span style={{ color: "red", paddingLeft: "0.5em" }}>
									Username is required
								</span>
							)}
							<input
								type="password"
								placeholder="Password"
								{...register("password", {
									required: true,
									min: 4,
									maxLength: 100,
								})}
							/>
							{errors.password && (
								<span style={{ color: "red", paddingLeft: "0.5em" }}>
									Password is required
								</span>
							)}

							<input type="submit" className="SubmitBtn" />
						</form>
					</div>
				</Base>
			</Main>
		</>
	);
}

export default Register;
