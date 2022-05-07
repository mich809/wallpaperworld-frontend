import SearchNavBar from "../components/Commons/SearchNavBar";
import Picture from "../components/Commons/Picture";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPicturesByTag } from "../utils/PictureApi";
import { Container } from "../styles/style";
import { BsSearch } from "react-icons/bs";

function Search() {
	let { tag } = useParams();
	const [pictures, setPictures] = useState([]);
	const [amount, setAmout] = useState(0);

	useEffect(() => {
		getPicturesByTag(tag).then((pics) => {
			const result = pics.content.filter(
				(picture) => picture.approved === true
			);
			setPictures(result);
			setAmout(result.length > 0 ? result.length : 0);
		});
	}, [tag]);

	return (
		<>
			<SearchNavBar />
			<Container>
				<header>
					<h1>
						{" "}
						<BsSearch style={{ margin: "20 20 0 25", fontSize: "1.5em" }} />
						{amount} wallpapers found for "
						<span style={{ color: "#49f" }}>{tag}</span>"
					</h1>
				</header>
				<div>
					<section>
						<ul>
							{pictures.map((picture, index) => (
								<Picture
									src={picture.pictureUrl}
									url={picture.name}
									alt=""
									key={index}
								/>
							))}
						</ul>
					</section>
				</div>
			</Container>
		</>
	);
}

export default Search;
