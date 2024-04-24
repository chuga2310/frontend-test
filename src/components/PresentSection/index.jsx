import React from "react";
import "./index.css";
import { Card, useMediaQuery } from "@mui/material";

const PresentContent = () => {
	return (
		<div className="container item-card_container">
			<div className="row">
				<div className="col-4 p-1 item-card-layout">
					<Card className="item-card">
						<img src="present1.png" />
						<p className="mt-3">A****** T-shirt to wear for conferences & pitches!</p>
					</Card>
				</div>
				<div className="col-4 p-1 item-card-layout">
					<Card className="item-card">
						<img src="black.png" />
						<p className="mt-3">Enjoying a meal with the Sputnik ATX class of 2023!</p>
					</Card>
				</div>
				<div className="col-4 p-1 item-card-layout">
					<Card className="item-card">
						<img src="present2.png" />
						<p className="mt-3">With the Sputnik ATX team</p>
					</Card>
				</div>
			</div>
			<div className="row">
				<div className="col-4 p-1 item-card-layout">
					<Card className="item-card">
						<img src="present3.png" />
						<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
					</Card>
				</div>
				<div className="col-4 p-1 item-card-layout">
					<Card className="item-card">
						<img src="present4.png" />
						<p className="mt-3">Sharing Entrepreneurial insights back at Lawrence Uni.</p>
					</Card>
				</div>
				<div className="col-4 p-1 item-card-layout">
					<Card className="item-card">
						<img src="present5.png" />
						<p className="mt-3">Our new UX Designer - Peter Da Silva</p>
					</Card>
				</div>
			</div>
			<div className="row">
				<div className="col-4 p-1 item-card-layout">
					<Card className="item-card">
						<img src="present6.png" />
						<p className="mt-3">Preparing meals so we can maximise time in the office!</p>
					</Card>
				</div>
				<div className="col-4 p-1 item-card-layout hidden-tablet">
					<Card className="item-card custom-card d-flex flex-column">
						<img src="book-open.png" style={{ objectFit: "contain" }} />
						<div style={{ flex: 1, overflow: "hidden" }}>
							<p className="label">2024 -{">"} Onwards</p>
							<p className="desc">More memories to be made...</p>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default function PresentSection() {
	const isMedium = useMediaQuery("(max-width:850px)");

	return (
		<>
			<div className="d-flex align-items-center justify-content-center mt-5 present_container">
				<div className="present_text_container">
					<label>Present</label>
					<p className="mt-2">
						We’ve grown our team & continue to invest time, money & effort into A******, with
						excitement for what the future holds!
					</p>
				</div>
			</div>

			{isMedium ? (
				<div className="overflow-scroll">
					<PresentContent />
					<PresentContent />
				</div>
			) : (
				<PresentContent />
			)}
		</>
	);
}
