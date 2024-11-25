import { Banner } from "@/components/Banner";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Properties from "@/components/Properties";
import React from "react";

const HomePage = () => {
	return (
		<>
			<section className="relative">
				<Banner />
				<Features />
				<Metrics />
				<Properties />
			</section>
		</>
	);
};

export default HomePage;
