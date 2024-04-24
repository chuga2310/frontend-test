import React from "react";
import "./styles.css";
import TimeLineItem from "../../../components/TimeLineItem";

export default function MainContent() {
	return (
		<section>
			<TimeLineItem
				label="January 2023"
				content="Our story starts at Lawrence University in Wisconsin, US, where Alec & Hung studied together in Economics & Data + Computer Science. Whilst studying, we got quickly frustrated with how over-complicated & stretched out researching papers were, knowing there would be a better way, the idea of A****** was born."
				img="map1.png"
			/>
			<TimeLineItem
				label="March 2023"
				content="A****** launched it’s first MVP to the the students of Lawrence University. We had a great response with 500 users immediately signing up (~50% of our college!) This made us realize that there was serious potential for A******. After graduating, we continued to grow A****** out of out apartment to see how far it could go."
				img="image1.png"
			/>
			<TimeLineItem
				label="July 2023"
				content="A****** launched on Product Hunt, doubling the number of active users. Shortly after, Sputnik ATX reached out with an interest to invest in A******. Soon after, we boarded a flight from Wisconsin to Austin, Texas to further present A****** to Sputnik ATX.  A make or break moment for the future of the company."
				img="image2.png"
			/>
			<TimeLineItem
				label="August 2023"
				content="Sputnik invested $100,000. We moved our HQ from Wisconsin to Austin and worked with Sputnik to try out new strategies to grow A******."
				img="image3.png"
			/>
      <TimeLineItem
				label="October 2023"
				content="We partnered up with the AppSumo team to launch on their platform. Spent 2 months preparing marketing assets, copywriting, doing user testing and refining the product, before launching on October 16, 2023."
				img="image4.png"
			/>
      <TimeLineItem
				label="December 2023"
				content="We passed $500,000 in revenue, became one of AppSumo’s hottest products of 2023 & earned multiple badges for various reasons. A crazy year to say the least!"
				img="image5.png"
			/>
		</section>
	);
}
