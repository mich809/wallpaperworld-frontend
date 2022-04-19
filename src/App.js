import Home from "./pages/Home/Home";
import Random from "./pages/Random";
import Latest from "./pages/Latest";
import TopList from "./pages/TopList";
import Upload from "./pages/Upload";
import Register from "./pages/Register";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/random" element={<Random />} />
				<Route path="/upload" element={<Upload />} />
				<Route path="/latest" element={<Latest />} />
				<Route path="/toplist" element={<TopList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
