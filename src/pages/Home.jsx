import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";

const container = styled.div`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

function Home() {
	return (
		<container>
			<Navbar />
			<SearchBar />
		</container>
	);
}

export default Home;
