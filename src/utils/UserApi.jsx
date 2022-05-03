import axios from "axios";

export const registerUser = async (user) =>
	await axios.post("/api/user/register", user);

export const login = async (user) =>
	await axios.post("/api/user/login", {
		username: user.username,
		password: user.password,
	});

export const addToFavorites = async (name) =>
	await axios.put(
		`/api/user/AddToFavorites?name=${name}`,
		{ param: { name: name } },
		{
			headers: { Authorization: "Bearer " + localStorage.getItem("token") },
		}
	);

export const removeFromFavorites = async (pictureID) =>
	await axios.put(
		"api/user/removeFromFavorites",
		{ param: { pictureID: pictureID } },
		{ headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
	);

export const getUserInfo = async () =>
	await axios.get("api/user/getUserInfo", {
		headers: { Authorization: "Bearer " + localStorage.getItem("token") },
	});
