import Navbar from "../components/Home/Navbar";
import SearchBar from "../components/Home/SearchBar";
import FeatureRow from "../components/Home/FeatureRow";
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

const TopNav = styled.div`
	margin: auto;
	text-align: center;
	max-width: 1560px;
`;

function Home() {
	return (
		<Container>
			<TopNav>
				<Navbar />
				<SearchBar />
			</TopNav>
			<FeatureRow />
		</Container>
	);
}

export default Home;
