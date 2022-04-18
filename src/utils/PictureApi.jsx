import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api/picture";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("jwt");

export const getRandomPictures = async () =>
	await axios
		.get("/getRandomPictures")
		.then(function (response) {
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
