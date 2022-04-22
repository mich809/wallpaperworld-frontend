import axios from "axios";

export const registerUser = async (user) =>
	await axios
		.post("/api/user/register", user)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error + "status code: " + error.res);
		});

export const login = async () =>
	await axios
		.post("/api/user/login", { username: "react51", password: "password" })
		.then(function (response) {
			localStorage.setItem("jwt", response.data["jwt"]);
		})
		.catch(function (error) {
			console.log(error + "status code: " + error.res);
		});

export const addToFavorites = async () =>
	await axios
		.put("/api/user/AddToFavorites", {
			username: "react51",
			password: "password",
		})
		.then(function (response) {})
		.catch(function (error) {
			console.log(error + "status code: " + error.res);
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
