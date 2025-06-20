import React from "react";
import connectDB from "@/config/database";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

const HomePage = async () => {
	return (
		<>
			<Hero />
			<InfoBoxes />
			<HomeProperties />
		</>
	);
};

export default HomePage;
