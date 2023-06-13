import React, { useRef } from "react";
import { FaFireAlt, FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import { Link } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <button className="logo-btn">
                <Link to="/AboutMe">
                    <FaFireAlt />
                </Link>
            </button>

			<nav ref={navRef}>
				<Link to="/AboutMe">About Me</Link>
				<Link to="/Education">Education</Link>
				<Link to="/WorkingExperience">Working Experience</Link>
				<Link to="/Projects">Projects</Link>
                <Link to="/ContactInfo">Contact Information</Link>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>

			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
            
		</header>
	);
}

export default Navbar;