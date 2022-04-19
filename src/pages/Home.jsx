import { Navbar, HomeSearchBar, FeatureRow } from "../components/exporter";
import styled from "styled-components";
import primaryBackground from "../assets/blue-gradients.020-wh.jpg";
import secondaryBackground from "../assets/bg-dark-grain.png";

const Container = styled.div`
	border-top-width: 0;
	padding: 30px 30px 5px;
	text-align: center;

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
				<HomeSearchBar />
			</TopNav>
			<FeatureRow />
		</Container>
	);
}

export default Home;
