import Home from "./pages/Home/Home";
import Random from "./pages/Random";
import Latest from "./pages/Latest";
import TopList from "./pages/TopList";
import Upload from "./pages/Upload";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Wallpaper from "./pages/Wallpaper";
import Profile from "./pages/Profile";
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
				<Route path="/profile" element={<Profile />} />

				<Route path="/wallpaper/:id" element={<Wallpaper />} />
				<Route path="/search/:tag" element={<Search />} />
				<Route path="/" element={<Home />} />

				<Route element={<RequireAuth />}>
					<Route path="/upload" element={<Upload />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
