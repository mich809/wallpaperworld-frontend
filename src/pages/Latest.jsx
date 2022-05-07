import SearchNavBar from "../components/Commons/SearchNavBar";
import { Container } from "../styles/style";
import { useEffect, useState } from "react";
import { getLatestPictures } from "../utils/PictureApi";
import Picture from "../components/Commons/Picture";
import { BsClockHistory } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";

const Latest = () => {
	const [pictures, setPictures] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	useEffect(() => {
		getLatestPictures(0).then((pics) => {
			setPictures(pics.content);
		});
	}, []);

	const fetchPictures = async () => {
		return await getLatestPictures(pageNumber)
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
						<BsClockHistory
							style={{ margin: "20 20 0 25", fontSize: "1.5em", color: "#ad3" }}
						/>
						Latest
					</h1>
				</header>
				<div>
					<section>
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

export default Latest;
