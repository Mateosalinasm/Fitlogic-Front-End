import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MotionAnimate } from "react-motion-animate";
import Backdrop from "./BackDrop.js";
import React from "react";

const Navbar = ({ activePage, onLinkClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className="container">
            <div className="navbar">
                <div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.9 }}
                        className="menu-btn"
                        onClick={() => null}
                    >
                        <Link to="/">
                            <img
                                className="logo"
                                src="/assets/images/logos/Ethereal Yoga & Wellness Logo (500 × 200 px) (500 × 100 px) (400 × 100 px) (250 × 60 px) (400 × 100 px).png"
                                alt="Menu"
                            />
                        </Link>
                    </motion.button>
                </div>
                <div className="menu-container">
                <div className="form-container">
                    <img
                    className="search"
                    src="/assets/images/icons/magnifying-glass (1).png"
                    />
                    <form id="search" action="/">
                    <input type="text" />
                    </form>
                </div>
                <AnimatePresence>
                    {menuOpen && (
                    <Backdrop
                        onClick={toggleMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    )}
                    <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }} // set the duration value to 1 second for both
                    className={`nav-links ${menuOpen ? "open" : ""}`}
                    >
                    {menuOpen ? (
                        <React.Fragment>
                        <li>
                            <Link to="/" onClick={handleLinkClick}>
                            <div className={activePage === "home" ? "active" : ""}>
                                Home
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/workout" onClick={handleLinkClick}>
                            <div className={activePage === "workout" ? "active" : ""}>
                                Workouts
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addWorkout" onClick={handleLinkClick}>
                            <div
                                className={activePage === "addWorkout" ? "active" : ""}
                            >
                                My Workout
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/healthy-tips" onClick={handleLinkClick}>
                            <div
                                className={
                                activePage === "healthy-tips" ? "active" : ""
                                }
                            >
                                Healthy Tips
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={handleLinkClick}>
                            <div className={activePage === "contact" ? "active" : ""}>
                                Contact
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={handleLinkClick}>
                            <div className={activePage === "about" ? "active" : ""}>
                                About Us
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign-in" onClick={handleLinkClick}>
                            <div className={activePage === "sign-in" ? "active" : ""}>
                                Sign in
                            </div>
                            </Link>
                        </li>
                        </React.Fragment>
                    ) : null}
                    </motion.ul>
                </AnimatePresence>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    className="menu-btn"
                    onClick={toggleMenu}
                >
                     {menuOpen ? (
    <img className='menu' src="/assets/images/close.png" alt="Close-menu" />
  ) : (
    <img className='menu' src="/assets/images/open.png" alt="open-Menu" />
  )}
                </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
