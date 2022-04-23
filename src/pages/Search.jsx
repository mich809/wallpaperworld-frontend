import SearchNavBar from "../components/Commons/SearchNavBar";
import Picture from "../components/Commons/Picture";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPicturesByTag } from "../utils/PictureApi";
import { Container } from "../styles/style";

function Search() {
	let { tag } = useParams();
	const [pictures, setPictures] = useState([]);
	const [amount, setAmout] = useState(0);

	useEffect(() => {
		getPicturesByTag(tag).then((pics) => {
			setPictures(pics.content);
			setAmout(pics.totalElements);
		});
	}, []);

	return (
		<>
			<SearchNavBar />
			<Container>
				<header>
					<h1>
						{amount} wallpapers found for "
						<span style={{ color: "#49f" }}>{tag}</span>"
					</h1>
				</header>
				<div>
					<section>
						<ul>
							{pictures.map((picture, index) => (
								<li key={index} style={{ display: "inline-block", padding: 5 }}>
									<Picture src={picture.pictureUrl}></Picture>
								</li>
							))}
						</ul>
					</section>
				</div>
			</Container>
		</>
	);
}

export default Search;
