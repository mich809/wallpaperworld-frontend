import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getPicturesNeedingApproval } from "../../utils/PictureApi";
import InfiniteScroll from "react-infinite-scroll-component";
import Picture from "../../components/Commons/Picture";

const Container = styled.div`
	height: 100%;
	background-color: #1b1b1b;
	display: flex;
`;

function Pictures() {
	const [pictures, setPictures] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		getPicturesNeedingApproval(0).then((pics) => {
			setPictures(pics.data.content);
		});
	}, []);

	const fetchPictures = async () => {
		return await getPicturesNeedingApproval(pageNumber)
			.then((response) => {
				setPictures([...pictures, ...response.data.content]);
				if (
					response.data.content.length === 0 ||
					response.data.content.length < 20
				) {
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
			<h1 style={{ color: "#ddd" }}>Pictures needing approval</h1>
			<Container>
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
							width="150px"
							height="100px"
						/>
					))}
				</InfiniteScroll>
			</Container>
		</>
	);
}

export default Pictures;
