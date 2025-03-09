import React from "react";
import homeBg from "/src/assets/home-bg.jpg";

const Hero = () => {
	return (
		<>
			<div className="flex flex-col flex-wrap items-center justify-center w-full h-[400px] md:h-[500px]  ">
				{/* Left Side: Tagline */}
				<div className="w-full md:w-1/2 text-center md:text-left p-8 md:pl-12 items-center md:items-start justify-center">
					<h1 className="text-4xl font-bold text-gray-800 ">
						Travel with Purpose
					</h1>
					<p className="text-lg text-gray-600 mt-4">
						Count your Carbon Footprint. Explore Sustainable Tourism, Green
						Businesses, Eco-Friendly Stays.
					</p>
				</div>

				{/* Right Side: Image */}
				<div className="w-full h-full">
					<img
						src={homeBg}
						alt="Background"
						className="w-full h-auto max-h-[200px] md:max-h-[500px] sm:object-contain md:object-cover"
					/>
				</div>
			</div>
		</>
	);
};

export default Hero;
