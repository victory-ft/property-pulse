import React from "react";
import "@/assets/styles/global.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
	title: "PropertyPulse",
	description: "Find your dream rental property",
	keywords: "rentals, rental, find, property, properties, homes",
};

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
};

export default MainLayout;
