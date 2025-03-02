import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Businesses from "./pages/Businesses";
import CarbonFootprint from "./pages/CarbonFootprint";
import Dashboard from "./pages/Dashboard";
import Hotels from "./pages/Hotels";
import Leadership from "./pages/Leadership";
import Login from "./pages/Login";
import Places from "./pages/Places";
import Resources from "./pages/Resources";
import Volunteerism from "./pages/Volunteerism";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/businesses"
					element={<Businesses />}
				/>
				<Route
					path="/carbon-footprint"
					element={<CarbonFootprint />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/hotels"
					element={<Hotels />}
				/>
				<Route
					path="/leadership"
					element={<Leadership />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/places"
					element={<Places />}
				/>
				<Route
					path="/resources"
					element={<Resources />}
				/>
				<Route
					path="/volunteerism"
					element={<Volunteerism />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
