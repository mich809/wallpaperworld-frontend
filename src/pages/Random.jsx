import SearchNavBar from "../components/Commons/SearchNavBar";
import { Container } from "../styles/style";
import { useEffect, useState } from "react";
import { getRandomPictures } from "../utils/PictureApi";
import Picture from "../components/Commons/Picture";
import { FaRandom } from "react-icons/fa";

const Random = () => {
	const [pictures, setPictures] = useState([]);
	useEffect(() => {
		getRandomPictures().then((pics) => {
			setPictures(pics.content);
		});
	}, []);

	return (
		<>
			<SearchNavBar />
			<Container>
				<header>
					<h1>
						<FaRandom style={{ margin: "20 20 0 25", fontSize: "1.5em" }} />
						Random
					</h1>
				</header>
				<div>
					<section>
						<ul>
							{pictures.map((picture, index) => (
								<Picture
									src={picture.pictureUrl}
									url={picture.pictureName}
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
};

export default Random;
