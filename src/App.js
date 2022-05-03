import {
	Home,
	Random,
	Latest,
	Upload,
	TopList,
	Register,
	Login,
	Profile,
	Wallpaper,
	Search,
} from "./components/exporter";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./context/RequireAuth";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/random" element={<Random />} />
				<Route path="/latest" element={<Latest />} />
				<Route path="/toplist" element={<TopList />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/wallpaper/:id" element={<Wallpaper />} />
				<Route path="/search/:tag" element={<Search />} />
				<Route path="/" element={<Home />} />

				<Route element={<RequireAuth />}>
					<Route path="/upload" element={<Upload />} />
					<Route path="/profile/:username" element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
