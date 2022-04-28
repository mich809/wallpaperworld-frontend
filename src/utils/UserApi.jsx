import axios from "axios";

export const registerUser = async (user) =>
	await axios.post("/api/user/register", user);

export const login = async (user) =>
	await axios.post("/api/user/login", {
		username: user.username,
		password: user.password,
	});

export const addToFavorites = async () =>
	await axios
		.put("/api/user/AddToFavorites", {
			username: "react51",
			password: "password",
		})
		.then(function (response) {})
		.catch(function (error) {
			return error;
		});

export const removeFromFavorites = async (pictureID) =>
	await axios
		.put("/removeFromFavorites", { param: { pictureID: pictureID } })
		.then(function (response) {})
		.catch(function (error) {
			console.log(error + "status code: " + error.res);
		});

export const getUserInfo = async (username) =>
	await axios
		.get("/getUser", { params: { username: username } })
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error + "status code: " + error.res);
		});
