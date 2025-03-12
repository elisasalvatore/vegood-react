import { motion } from "motion/react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";

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

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav
			className={
				isScroll ? "navbar bg-darkGreenCustom" : "navbar bg-transparent"
			}
		>
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
			>
				<NavLink to="/" className="pointer" onClick={scrollToTop}>
					<img
						src={logo}
						alt="Vegood Logo"
						className="w-25 h-25 sm:w-30 sm:h-30"
					/>
				</NavLink>
			</motion.div>
		</nav>
	);
};
