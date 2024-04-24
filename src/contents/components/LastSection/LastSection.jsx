import React from "react";
import "./styles.css";
export default function LastSection() {
	return (
		<div className="last-section_container position-relative">
			<div className="container last-section-content_container">
				<img src="logo-large.png" />
				<div>
					<p className="label">Become a part of the story</p>
					<p className="desc">
						Apply to become a part of the beautiful story we are building here at A******.
					</p>
				</div>
				<div className="position-absolute images-container">
					<img src="present1.png" className="images1" />
					<img src="present2.png" className="images2"/>
					<img src="present3.png" className="images3"/>
					<img src="present4.png" className="images4"/>
					<img src="present5.png" className="images5"/>
					<img src="present6.png" className="images6"/>
				</div>
			</div>
		</div>
	);
}
