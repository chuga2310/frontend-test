import React from "react";
import "./styles.css";
import { useMediaQuery } from "@mui/material";

function Section1() {
	const isMedium = useMediaQuery("(max-width:850px)");
	const isMobile = useMediaQuery("(max-width:441px)");

	return (
		<section className="container section-container">
			<div className={`row row1 g-2 mb-2`}>
				<div className={`${isMobile ? "col-6" : isMedium ? "col-3" : "col-4"} card-box`}>
					<div className="card-content default-box">
						<p className="card-content__title">2023</p>
						<p className="card-content__desc">A****** launched</p>
					</div>
				</div>
				<div className={`${isMobile ? "col-6" : isMedium ? "col-3" : "col-2"} card-box`}>
					<div className="card-content">
						<img src="rocket.png" alt="placeholder" />
					</div>
				</div>
				<div className={`${isMobile ? "col-6" : isMedium ? "col-3" : "col-4"} card-box`}>
					<div className="card-content">
						<img src="certificates.png" alt="placeholder" />
					</div>
				</div>
				<div className={`${isMobile ? "col-6" : isMedium ? "col-3" : "col-2"} card-box`}>
					<div className="card-content">
						<img src="row1_people.png" alt="placeholder" />
					</div>
				</div>
			</div>
			<div className={`row row2 g-2 mb-2`}>
				<div className={`card-box`}>
					<div className="card-content default-box">
						<p className="card-content__title p-4">
							Accelerate the world’s research one reference at a time.
						</p>
					</div>
				</div>
			</div>
			<div className={`row row3 g-2`}>
				<div className={`${isMobile ? "col-6" : isMedium ? "col-4" : "col-4"} card-box`}>
					<div className="card-content default-box">
						<img src="section1_600.png" alt="placeholder" />
					</div>
				</div>
				<div className={`${isMobile ? "col-6" : isMedium ? "col-3" : "col-2"} card-box`}>
					<div className="card-content">
						<img src="section1_people1.png" alt="placeholder" />
					</div>
				</div>
				<div className={`${isMobile ? "col-12" : isMedium ? "col-5" : "col-6"} card-box`}>
					<div className="card-content default-box">
						<p className="card-content__title">$700,000+</p>
						<p className="card-content__desc">Raised in captial</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Section1;
