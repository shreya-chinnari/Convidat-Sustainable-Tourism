import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DateCircle from "./DateCircle";
import CarbonForm from "./CarbonForm";
import axios from "axios";

const CalendarComponent = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [footprintData, setFootprintData] = useState({});

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/carbon")
			.then((res) => setFootprintData(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="flex flex-col items-center">
			<Calendar onClickDay={(date) => setSelectedDate(date)} />
			<div className="grid grid-cols-7 gap-2 mt-4">
				{[...Array(31)].map((_, index) => (
					<DateCircle
						key={index}
						day={index + 1}
						footprint={footprintData[index + 1] || 0}
						onClick={() => setSelectedDate(index + 1)}
					/>
				))}
			</div>
			{selectedDate && (
				<CarbonForm
					selectedDate={selectedDate}
					setFootprintData={setFootprintData}
				/>
			)}
		</div>
	);
};

export default CalendarComponent;
