import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("jwt");

export const getHomePictures = async () =>
	await axios
		.get("/api/picture/homePictures")
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.log(error.response.data);
		});

export const getPictureDetails = async (pictureName) =>
	await axios
		.get("/api/picture/getPictureDetails", { params: { title: pictureName } })
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.log(error.response.data);
		});

export const getPicturesByTag = async (tag) =>
	await axios
		.get("/api/picture/getPicturesByTag", {
			params: { tags: tag, pageNumber: 0 },
		})
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.log(error.response.data);
		});

export const getRandomPictures = async () =>
	await axios
		.get("/api/picture/getRandomPictures", { params: { pageNumber: 0 } })
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.log(error.response.data);
		});

export const getLatestPictures = async () =>
	await axios
		.get("/api/picture/getPicturesByDate", { params: { pageNumber: 0 } })
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.log(error.response.data);
		});
