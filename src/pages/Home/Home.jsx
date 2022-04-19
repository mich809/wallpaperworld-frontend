import {
	Navbar,
	HomeSearchBar,
	FeatureRow,
	primaryBackground,
	secondaryBackground,
	styled,
} from "../../components/exporter";

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
