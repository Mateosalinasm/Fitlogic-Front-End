import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Backdrop from "./BackDrop.js";
import React from "react";

const Navbar = ({ activePage, onLinkClick, props }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const [searchData, setSearchData] = React.useState({
        searchterm: "",
    });

    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setSearchData({ ...searchData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://exerciseapi3.p.rapidapi.com/search/?q=${searchData.searchterm}`)
            .then(response => response.json())
            .then(data => {
                // Do something with the search results
                console.log(data)
            })
            .catch(error => console.error(error));
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
                    alt="search"
                    />
                    <form id="search" onSubmit={handleSubmit} >
                        <input 
                        type="text" 
                        placeholder="Search" 
                        name="searchterm"
                        onChange={handleChange}
                        value={searchData.searchterm}/>
                    </form>
                </div>
                <AnimatePresence>
                    {menuOpen && (
                    <Backdrop
                        onClick={toggleMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    )}
                    <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }} // set the duration value to 1 second for both
                    className={`nav-links ${menuOpen ? "open" : ""}`}
                    >
                    {menuOpen ? (
                        <React.Fragment>
                        <li>
                            <NavLink
                            to="/"
                            onClick={handleLinkClick}
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "600" : "",
                                borderBottom: isActive ? "1px solid rgb(139, 139, 139)" : "",
                                color: isActive ? "#A7FA38" : "white",
                                opacity: isActive ? "100%" : "90%",
                                };
                            }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/workout"
                            onClick={handleLinkClick}
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "600" : "",
                                borderBottom: isActive ? "1px solid rgb(139, 139, 139)" : "",
                                color: isActive ? "#A7FA38" : "white",
                                opacity: isActive ? "100%" : "90%",
                                };
                            }}
                            >
                                Workouts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/addWorkout"
                            onClick={handleLinkClick}
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "600" : "",
                                borderBottom: isActive ? "1px solid rgb(139, 139, 139)" : "",
                                color: isActive ? "#A7FA38" : "white",
                                opacity: isActive ? "100%" : "90%",
                                };
                            }}>
                                My Workout
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/healthy-tips"
                            onClick={handleLinkClick}
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "600" : "",
                                borderBottom: isActive ? "1px solid rgb(139, 139, 139)" : "",
                                color: isActive ? "#A7FA38" : "white",
                                opacity: isActive ? "100%" : "90%",
                                };
                            }}>
                                Healthy Tips
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/contact"
                            onClick={handleLinkClick}
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "600" : "",
                                borderBottom: isActive ? "1px solid rgb(139, 139, 139)" : "",
                                color: isActive ? "#A7FA38" : "white",
                                opacity: isActive ? "100%" : "90%",
                                };
                            }}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/about"
                            onClick={handleLinkClick}
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "600" : "",
                                borderBottom: isActive ? "1px solid rgb(139, 139, 139)" : "",
                                color: isActive ? "#A7FA38" : "white",
                                opacity: isActive ? "100%" : "90%",
                                };
                            }}>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/login"
                            onClick={handleLinkClick}
                            style={({ isActive, isPending }) => {
                                return {
                                fontWeight: isActive ? "600" : "",
                                borderBottom: isActive ? "1px solid rgb(139, 139, 139)" : "",
                                color: isActive ? "#A7FA38" : "white",
                                opacity: isActive ? "100%" : "90%",
                                };
                            }}>
                                Log in
                            </NavLink>
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
                    <img className='menu' src="/assets/images/icons/close.png" alt="close-menu" />) : (
                    <img className='menu' src="/assets/images/open.png" alt="open-Menu" />
                )}
                </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
