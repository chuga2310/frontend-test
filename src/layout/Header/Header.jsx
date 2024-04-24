import React, { useState } from "react";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "@mui/material";
import "./styles.css";

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const isMedium = useMediaQuery("(max-width:850px)");

	const toggleDrawer = (open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}
		setDrawerOpen(open);
	};

	const drawerContent = (
		<>
			<nav className="group-links">
				<Link href="#">Affiliate</Link>
				<Link href="#">Pricing</Link>
				<Link href="#">Help Center</Link>
				<Link href="#">Blog</Link>
			</nav>
			<div className={isMedium ? `d-grid gap-3` : `float-start`}>
				<Button className={`row ${!isMedium ? "me-2" : ""}`} variant="contained" color="secondary">
					Log in
				</Button>
				<Button className="row" variant="contained" color="primary">
					Try for free
				</Button>
			</div>
		</>
	);

	return (
		<header className="d-flex justify-content-between align-items-center header-container border-bottom ">
			<div className="d-flex align-items-center gap-2 ">
				<img src="logo.png" alt="logo" className="logo" />
				<h4>A******</h4>
			</div>
			{isMedium ? (
				<>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
						<div className="d-grid gap-3 p-3 drawer-content">{drawerContent}</div>
					</Drawer>
				</>
			) : (
				drawerContent
			)}
		</header>
	);
};

export default Header;
