import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

export const getHomePictures = async () =>
	await axios
		.get("/api/picture/homePictures")
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {});

export const getPictureDetails = async (pictureName) =>
	await axios.get(`/api/picture/getPictureDetails?title=${pictureName}`);

export const getPicturesByTag = async (tag) =>
	await axios
		.get("/api/picture/getPicturesByTag", {
			params: { tags: tag, pageNumber: 0 },
		})
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {});

export const getRandomPictures = async (pageNumber) =>
	await axios.get("/api/picture/getRandomPictures", {
		params: { pageNumber: pageNumber },
	});

export const getLatestPictures = async () =>
	await axios
		.get("/api/picture/getPicturesByDate", { params: { pageNumber: 0 } })
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {});

export const uploadPicture = async (formdata) =>
	axios.post("http://localhost:8080/api/picture/addPicture", formdata, {
		headers: {
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
	});
