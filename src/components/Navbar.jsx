import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";

export const Navbar = () => {
	const [isScroll, setIsScroll] = useState(false);

	const changeBackgroundColor = () => {
		if (window.scrollY >= 120) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	};
	window.addEventListener("scroll", changeBackgroundColor);

	return (
		<nav
			className={
				isScroll ? "navbar bg-darkGreenCustom" : "navbar bg-transparent"
			}
		>
			<Link to="/" className="pointer">
				<img
					src={logo}
					alt="VeGood Logo"
					className="w-28 h-28 sm:w-32 sm:h-32"
				/>
			</Link>
		</nav>
	);
};
