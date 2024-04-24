import React from "react";
import "./index.css";
import { Link } from "@mui/material";

function FooterMenuList(props) {
	return (
		<div className="d-flex align-items-start flex-column row float-start menu-list">
			<p className="footer-menu-title item">{props.title}</p>
			{props.listLinks?.map((text, index) => (
				<Link href="#" key={index} className="footer-menu-item item">
					{text}
				</Link>
			))}
		</div>
	);
}

export default FooterMenuList;
