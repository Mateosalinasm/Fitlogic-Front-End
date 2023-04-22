import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Backdrop from "./BackDrop.js";
import React from "react";
import SearchBar from "./SearchBar";
const axios = require("axios");
// const API  = process.env.REACT_APP_API;
// const APIKEY = process.env.REACT_APP_APIKEY;



const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
        window.scrollTo(0, 0)
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
        console.log(searchData.searchterm); // log the search term
        // fetch(`https://exerciseapi3.p.rapidapi.com/search/?q=${searchData.searchterm}`)
        //     .then(response => response.json())
        //     .then(data => {
        //          Do something with the search results
        //         console.log(data)
        //     })
        //     .catch(error => console.error(error));
        const options = {
        method: 'GET',
        url: 'https://exerciseapi3.p.rapidapi.com/search/',
        params: {name: 'Barbell Bench Press'},
        headers: {

        }
        };

        axios.request(options)
        .then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
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
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img
                                className="logo"
                                src="/assets/images/logos/Ethereal Yoga & Wellness Logo (500 × 200 px) (500 × 100 px) (400 × 100 px) (250 × 60 px) (400 × 100 px).png"
                                alt="Menu"
                            />
                        </Link>
                    </motion.button>
                </div>
                <div className="menu-container">
                <img className="search" src="/assets/images/icons/magnifying-glass (1).png" />
                <SearchBar setSearchQuery={setSearchQuery} handleData={props.handleData}/>
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
                        <li className="navbar-link">
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
                        <li className="navbar-link">
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
                        <li className="navbar-link">
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
                        <li className="navbar-link">
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
                        <li className="navbar-link">
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
                        <li className="navbar-link">
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
                        <li className="navbar-link">
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
                                Log in/out
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
