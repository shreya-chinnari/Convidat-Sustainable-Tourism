import React, { useState } from "react";
import axios from "axios";

const CarbonForm = ({ selectedDate, setFootprintData }) => {
	const [formData, setFormData] = useState({
		hoursAtHome: 0,
		washingMachine: false,
		transportMode: "Car",
		transportHours: 0,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const calculateFootprint = () => {
		let footprint = formData.hoursAtHome * 2;
		if (formData.washingMachine) footprint += 5;
		if (formData.transportMode === "Car")
			footprint += formData.transportHours * 10;
		if (formData.transportMode === "Public Bus")
			footprint += formData.transportHours * 5;
		return footprint;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const totalFootprint = calculateFootprint();

		await axios.post("http://localhost:5000/api/carbon", {
			date: selectedDate,
			footprint: totalFootprint,
		});

		setFootprintData((prev) => ({ ...prev, [selectedDate]: totalFootprint }));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-4 border rounded-lg shadow-md bg-white"
		>
			<label>
				Hours at Home:{" "}
				<input
					type="number"
					name="hoursAtHome"
					onChange={handleChange}
				/>
			</label>
			<label>
				<input
					type="checkbox"
					name="washingMachine"
					onChange={handleChange}
				/>{" "}
				Used Washing Machine
			</label>
			<label>
				Mode of Transport:
				<select
					name="transportMode"
					onChange={handleChange}
				>
					<option>Car</option>
					<option>Public Bus</option>
					<option>Cycle</option>
				</select>
			</label>
			<label>
				Hours of Transport:{" "}
				<input
					type="number"
					name="transportHours"
					onChange={handleChange}
				/>
			</label>
			<button
				type="submit"
				className="bg-blue-500 text-white p-2 rounded mt-2"
			>
				Submit
			</button>
		</form>
	);
};

export default CarbonForm;
