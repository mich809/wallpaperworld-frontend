import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormStyle = styled.form`
	margin: 1em auto 1em auto;
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;

	input {
		background: rgba(255, 255, 255, 0.1);
		font-size: 1.5rem;
		border-radius: 2px;
		box-shadow: 2px 2px 4px rgb(0 0 0 / 60%);
		padding: 1em;
		height: 2.3em;
		color: #fff;
		text-shadow: 1px 1px 0 rgb(0 0 0 / 50%);
		min-width: 35em;
		flex-grow: 1;
		display: flex;
		align-items: center;
		::placeholder {
			color: #fff;
		}
	}
`;

function SearchBar() {
	let navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate("/search/" + input);
	};

	const [input, setInput] = useState("");

	return (
		<FormStyle onSubmit={submitHandler}>
			<div>
				<input
					type="search"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search..."
				/>
			</div>
		</FormStyle>
	);
}

export default SearchBar;
