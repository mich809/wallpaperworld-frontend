import SearchNavBar from "../components/Commons/SearchNavBar";
import { Container } from "../styles/style";
import { useEffect, useState } from "react";
import { getLatestPictures } from "../utils/PictureApi";
import Picture from "../components/Commons/Picture";
import { BsClockHistory } from "react-icons/bs";

const Latest = () => {
	const [pictures, setPictures] = useState([]);
	useEffect(() => {
		getLatestPictures().then((pics) => {
			console.log(pics.content);
			setPictures(pics.content);
		});
	}, []);

	return (
		<>
			<SearchNavBar />
			<Container>
				<header>
					<h1>
						<BsClockHistory
							style={{ margin: "20 20 0 25", fontSize: "1.5em" }}
						/>
						Latest
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
};

export default Latest;
