import { Container } from "../../styles/style";
import { Link, Outlet } from "react-router-dom";
import SearchNavBar from "../../components/Commons/SearchNavBar";
import styled from "styled-components";

const Menu = styled.div`
	padding-top: 4em;
	font-size: 1.4em;
`;
const View = styled.div`
	margin: 2em auto;
	width: 60%;
	height: 75%;
`;

function Admin() {
	return (
		<>
			<SearchNavBar />
			<Container>
				{" "}
				<Menu>
					<ul>
						<li style={{ display: "inline", padding: "5em" }}>
							<Link to="Users" style={{ color: "white" }}>
								Users
							</Link>
						</li>
						<li style={{ display: "inline", padding: "5em" }}>
							<Link to="Pictures" style={{ color: "white" }}>
								Pictures
							</Link>
						</li>
					</ul>
				</Menu>
				<View>
					<Outlet />
				</View>
			</Container>
		</>
	);
}

export default Admin;
