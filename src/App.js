import Home from "./pages/Home/Home";
import Random from "./pages/Random";
import Latest from "./pages/Latest";
import TopList from "./pages/TopList";
import Upload from "./pages/Upload";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wallpaper from "./pages/Wallpaper";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/random" element={<Random />} />
				<Route path="/upload" element={<Upload />} />
				<Route path="/latest" element={<Latest />} />
				<Route path="/toplist" element={<TopList />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/wallpaper/:id" element={<Wallpaper />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
