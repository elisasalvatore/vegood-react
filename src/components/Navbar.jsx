import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import { motion } from "motion/react";

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
				<Link to="/" className="pointer" onClick={scrollToTop}>
					<img
						src={logo}
						alt="Vegood Logo"
						className="w-28 h-28 sm:w-32 sm:h-32"
					/>
				</Link>
			</motion.div>
		</nav>
	);
};
