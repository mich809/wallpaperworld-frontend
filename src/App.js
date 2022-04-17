import Category from "./components/Category.jsx";
import Pages from "./pages/Pages.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Category />
			</BrowserRouter>
		</div>
	);
}

export default App;
