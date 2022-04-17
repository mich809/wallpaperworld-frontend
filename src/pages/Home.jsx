import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import primaryBackground from "../assets/blue-gradients.020-wh.jpg";
import secondaryBackground from "../assets/bg-dark-grain.png";

const Container = styled.div`
	border-top-width: 0;
	padding: 30px 30px 5px;
	text-align: center;
	height: 100vh;
	background: url(${primaryBackground}) top center/cover no-repeat fixed,
		#171717 url(${secondaryBackground}) top left repeat;
`;

function Home() {
	return (
		<Container>
			<Navbar />
			<SearchBar />
		</Container>
	);
}

export default Home;
