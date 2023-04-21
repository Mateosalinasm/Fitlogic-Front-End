// import VanillaTilt from "../vanilla-tilt";
// import { useEffect } from "react";
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import LoginButton from "../components/LoginButton";
// import LogoutButton from "../components/LogoutButton";
// import Profile from "../components/Profile";
// import { useAuth0 } from "@auth0/auth0-react";


// const LogIn = () => {
//     useEffect(() => {
//         // Use querySelectorAll to select all elements with data-tilt attribute
//         const tiltElements = document.querySelectorAll("[data-tilt]");
//         // Iterate over the elements and initialize VanillaTilt for each
//         tiltElements.forEach((element) => {
//         VanillaTilt.init(element);
//         });
//     }, []);
//     return (
//         <div className="sign-in-container">
//                 <Link to="/">
//                     <h1 className="sign-in-fitlogic">FITLOGIC</h1>
//                 </Link>
//                 <video className="sign-in-background" src="/assets/images/videos/1440 wave (4).mp4" 
//                 autoPlay
//                 loop
//                 muted
//                 ></video>
//             {/* <img className="sign-in-background" src="/assets/images/icons/Untitled design (5).png" alt="" /> */}
//             <div data-tilt data-tilt-scale="1.01" data-tilt-max="10" data-tilt-glare data-tilt-max-glare="0.5" className="sign-in">
//                 <div>
//                     <div>
//                         <h1 className="sign-in-title">Log In</h1>
//                         <img data-tilt data-tilt-scale="1.1" className="sign-in-logo" src="/assets/images/logos/Untitled design (4).png" alt="" />
//                         <div className="registration login-btns sign-up-layout">
//                             <form id="log-in-form" >
//                                 <fieldset className="account-info">
//                                     <input placeholder="USERNAME" className="sign-in-inputs" name="username" type="text" />
//                                     <input placeholder="PASSWORD" className="sign-in-inputs" name="password" type="password" autoComplete="current-password"/>
//                                 </fieldset>
//                             </form>
//                         </div>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.8 }}
//                             className="menu-btn"
//                         >
//                             <input className="req-btn log-in-btn" type="submit" value="Log in" form="log-in-form" />
//                         </motion.button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LogIn;


// import LoginButton from "../components/LoginButton";
// import LogoutButton from "../components/LogoutButton";
// import Profile from "../components/Profile";
// import { useAuth0 } from "@auth0/auth0-react";

// function App() {
//   const { isLoading, error } = useAuth0();

//   return (
//     <main className="column">
//       <h1>Auth0 Login</h1>
//       {error && <p>Authentication Error</p>}
//       {!error && isLoading && <p>Loading...</p>}
//       {!error && !isLoading && (
//         <>
//           <LoginButton />
//           <LogoutButton />
//           <Profile />
//         </>
//       )}
//     </main>
//   );
// }

// export default App;


import VanillaTilt from "../vanilla-tilt";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";
import { useAuth0 } from "@auth0/auth0-react";


const LogIn = () => {
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
                <Link to="/">
                    <h1 className="sign-in-fitlogic">FITLOGIC</h1>
                </Link>
                <video className="sign-in-background" src="/assets/images/videos/1440 wave (4).mp4" 
                autoPlay
                loop
                muted
                ></video>
            <div data-tilt data-tilt-scale="1.01" data-tilt-max="10" data-tilt-glare data-tilt-max-glare="0.5" className="sign-in">
                <div>
                    <div>
                        <h1 className="sign-in-title">Join Us!</h1>
                        <img data-tilt data-tilt-scale="1.1" className="sign-in-logo" src="/assets/images/logos/Untitled design (4).png" alt="" />

                             <main className="registration login-btns sign-up-layout">
                                <>
                                <LoginButton /> 
                                <LogoutButton /> 
                                <Profile />
                                </>
                                </main>
                            {/* <input className="req-btn log-in-btn" type="submit" value="Log in" form="log-in-form" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;