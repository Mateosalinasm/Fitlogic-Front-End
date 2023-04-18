import VanillaTilt from "../vanilla-tilt";
import { useEffect } from "react";
import { motion } from 'framer-motion';

const SignIn = () => {
    useEffect(() => {
        // Use querySelectorAll to select all elements with data-tilt attribute
        const tiltElements = document.querySelectorAll("[data-tilt]");
        // Iterate over the elements and initialize VanillaTilt for each
        tiltElements.forEach((element) => {
        VanillaTilt.init(element);
        });
    }, []);
    return (
        <div className="sign-in-container">
        <img className="sign-in-background" src="/assets/images/icons/Untitled design (5).png" alt="" />
        <div data-tilt data-tilt-scale="1.01" data-tilt-max="10" data-tilt-glare data-tilt-max-glare="0.5" className="sign-in">
            <div>
            <div>
                <h1 className="sign-up-title">Sign In</h1>
                <img data-tilt data-tilt-scale="1.1" className="sign-in-logo" src="/assets/images/logos/Untitled design (4).png" alt="" />
                <div className="registration login-btns sign-up-layout">
                <form id="log-in-form" >
                    <fieldset className="account-info">
                    <input placeholder="USERNAME" className="sign-up-inputs" name="username" type="text" />
                    <input placeholder="PASSWORD" className="sign-up-inputs" name="password" type="password" />
                    </fieldset>
                </form>
                </div>
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                className="menu-btn"
                >
                <input className="req-btn log-in-btn" type="submit" value="Log in" form="log-in-form" />
                </motion.button>
            </div>
            </div>
        </div>
        {/* Move script outside the component */}
        <script type="text/javascript" src="vanilla-tilt.js"></script>
        </div>
    );
    };

export default SignIn;