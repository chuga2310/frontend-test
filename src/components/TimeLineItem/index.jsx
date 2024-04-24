import React from "react";
import "./index.css";
export default function TimeLineItem(props) {
	const { label, content, img } = props;
	return (
		<div className="d-flex align-items-center justify-content-center mt-5 timeline-item_container">
			<div className="timeline-item_text_container">
				<label>{label}</label>
				<p className="mt-2">{content}</p>
			</div>
			<img src={img} />
		</div>
	);
}
