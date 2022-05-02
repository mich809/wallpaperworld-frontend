import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

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
		.catch(function (error) {
			console.log(error.response.data);
		});

export const uploadPicture = async (formdata) =>
	axios.post("http://localhost:8080/api/picture/addPicture", formdata, {
		headers: {
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
	});
