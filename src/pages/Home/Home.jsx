import {
	Navbar,
	HomeSearchBar,
	FeatureRow,
	primaryBackground,
	secondaryBackground,
	styled,
} from "../../components/exporter";
import { Link } from "react-router-dom";

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
		<>
			<Container>
				{localStorage.getItem("user") && (
					<h1
						style={{
							fontSize: "1em",
							color: "#ddd",
							float: "right",
							fontWeight: "400",
						}}
					>
						welcome back,
						<Link
							style={{ color: "#08A6F6" }}
							to={`/profile/${localStorage.getItem("user")}`}
						>
							{localStorage.getItem("user")}
						</Link>
					</h1>
				)}
				<TopNav>
					<Navbar />
					<HomeSearchBar />
				</TopNav>
				<FeatureRow />
			</Container>
		</>
	);
}

export default Home;
