import Home from "./pages/Home";

import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		</div>
	);
}

export default App;
