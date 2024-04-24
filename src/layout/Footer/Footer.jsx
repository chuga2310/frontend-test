import React from "react";
import "./styles.css";
import { Select, MenuItem } from "@mui/material";
import FooterMenuList from "../../components/FooterMenuList";

export default function Footer() {
	const [language, setLanguage] = React.useState("en");
	return (
		<footer
			className="align-items-center flex-column d-flex pb-5 "
			style={{ backgroundColor: "#FCFCFD" }}
		>
			<div className="footer-container d-flex flex-column row align-items-center">
				<div className="d-flex align-items-center justify-content-between">
					<div className="d-flex align-items-center gap-2">
						<img src="logo.png" alt="logo" className="logo" />
						<h4>A******</h4>
					</div>
					<Select
						value={language}
						onChange={(val) => {
							setLanguage(val.target.value);
						}}
						style={{ overflow: "hidden" }}
					>
						<MenuItem value="en">English</MenuItem>
						<MenuItem value="fr">French</MenuItem>
						<MenuItem value="es">Spanish</MenuItem>
					</Select>
				</div>
				<div className="footer-menu-container">
					<FooterMenuList
						title="Company"
						listLinks={[
							"Our Story",
							"Affiliate Program",
							"Roadmap",
							"Pricing",
							"Blog",
							"Contact us"
						]}
					/>
					<FooterMenuList
						title="Resources"
						listLinks={[
							"Our Story",
							"Affiliate Program",
							"Roadmap",
							"Pricing",
							"Blog",
							"Contact us"
						]}
					/>
					<FooterMenuList
						title="Compare"
						listLinks={[
							"Our Story",
							"Affiliate Program",
							"Roadmap",
							"Pricing",
							"Blog",
							"Contact us"
						]}
					/>

					<div className="copyright">
						<p>Copyright ©2023 A****** inc.️</p>
						<div className="group-icons">
							<img src="linked.png" alt="facebook" />
							<img src="youtube.png" alt="twitter" />
							<img src="tiktok.png" alt="instagram" />
							<img src="twitter.png" alt="instagram" />
						</div>
					</div>
					<div className="d-flex col footer-backed align-items-center">
						<div className="divider"></div>
						<div className="footer-backed__label">
							<span className="footer-backed__label__text">A****** is backed by</span>
						</div>
						<div className="divider"></div>
					</div>
					<div className="d-flex align-items-center backed-list">
						<img src="spuntnikatx.png" alt="spuntnikatx" />
						<img src="plugandplay.png" alt="plugandplay" />
						<img src="hatcher.png" alt="hatcher" />
					</div>
				</div>
			</div>
		</footer>
	);
}
