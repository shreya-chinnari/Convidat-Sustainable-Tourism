import React from "react";
import CalendarComponent from "../components/CalendarComponent";

const CarbonFootprint = () => {
	return (
		<>
			<div className="flex flex-col items-center p-6">
				<h1 className="text-2xl font-bold mb-4">Carbon Footprint Tracker</h1>
				<CalendarComponent />
			</div>
		</>
	);
};

export default CarbonFootprint;
