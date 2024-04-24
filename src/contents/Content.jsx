import React from "react";
import Section1 from "./components/Section1/Section1";
import "./styles.css";
import MainContent from "./components/MainContent/MainContent";
import PresentSection from "../components/PresentSection";
import LastSection from "./components/LastSection/LastSection";
const Content = () => {
	return (
		<article className="content-container">
			<Section1 />
			<MainContent />
			<PresentSection />
			<LastSection />
		</article>
	);
};

export default Content;
