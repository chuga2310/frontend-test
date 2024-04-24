import React from "react";
import "./index.css";
import { Card } from "@mui/material";

export default function PresentSection() {
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
			<div className="container item-card_container">
				<div className="row">
					<div className="col-4 p-1 item-card-layout">
						<Card className="item-card">
							<img src="present1.png" />
							<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
						</Card>
					</div>
					<div className="col-4 p-1 item-card-layout">
						<Card className="item-card">
							<img src="present1.png" />
							<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
						</Card>
					</div>
					<div className="col-4 p-1 item-card-layout">
						<Card className="item-card">
							<img src="present1.png" />
							<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
						</Card>
					</div>
				</div>
        <div className="row">
					<div className="col-4 p-1 item-card-layout">
						<Card className="item-card">
							<img src="present1.png" />
							<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
						</Card>
					</div>
					<div className="col-4 p-1 item-card-layout">
						<Card className="item-card">
							<img src="present1.png" />
							<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
						</Card>
					</div>
					<div className="col-4 p-1 item-card-layout">
						<Card className="item-card">
							<img src="present1.png" />
							<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
						</Card>
					</div>
				</div>
        <div className="row">
					<div className="col-4 p-1 item-card-layout">
						<Card className="item-card">
							<img src="present1.png" />
							<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
						</Card>
					</div>
					<div className="col-4 p-1 item-card-layout">
						<Card className="item-card">
							<img src="present1.png" />
							<p className="mt-3">Demo Day at Sputnik ATX! Presenting to A****** investors</p>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
