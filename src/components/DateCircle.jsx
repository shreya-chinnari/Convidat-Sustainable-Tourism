import React from "react";

const getColor = (footprint) => {
	if (footprint > 50) return "bg-red-500";
	if (footprint > 40) return "bg-orange-500";
	if (footprint > 30) return "bg-yellow-500";
	return "bg-green-500";
};

const DateCircle = ({ day, footprint, onClick }) => {
	return (
		<div
			className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${getColor(
				footprint
			)}`}
			onClick={onClick}
		>
			{day}
		</div>
	);
};

export default DateCircle;
