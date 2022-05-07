import SearchNavBar from "../components/Commons/SearchNavBar";
import { Container } from "../styles/style";
import { useEffect, useState } from "react";
import { getRandomPictures } from "../utils/PictureApi";
import Picture from "../components/Commons/Picture";
import { FaRandom } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";

const Random = () => {
	const [pictures, setPictures] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		getRandomPictures(0)
			.then((response) => {
				setPictures(response.data.content);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const fetchPictures = async () => {
		return await getRandomPictures(pageNumber)
			.then((response) => {
				setPictures([...pictures, ...response.data.content]);
				if (
					response.data.content.length === 0 ||
					response.data.content.length < 20
				) {
					console.log("the end");
					setHasMore(false);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const fetchData = async () => {
		fetchPictures();
		setPageNumber(pageNumber + 1);
	};

	return (
		<>
			<SearchNavBar />
			<Container>
				<header>
					<h1>
						<FaRandom
							style={{
								margin: "20 20 0 25",
								fontSize: "1.5em",
								color: "#e73",
							}}
						/>
						Random
					</h1>
				</header>
				<div>
					<section style={{ margin: "3em" }}>
						<ul>
							<InfiniteScroll
								dataLength={pictures.length}
								next={fetchData}
								hasMore={hasMore}
								loader={
									<h4 style={{ fontSize: "2em", color: "#ddd" }}>Loading...</h4>
								}
								endMessage={
									<p style={{ textAlign: "center" }}>
										<b>Yay! You have seen it all</b>
									</p>
								}
							>
								{pictures.map((picture, index) => (
									<Picture
										src={picture.pictureUrl}
										url={picture.name}
										alt=""
										key={index}
									/>
								))}
							</InfiniteScroll>
						</ul>
					</section>
				</div>
			</Container>
		</>
	);
};

export default Random;
