import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className="container">
      <div className="navbar">
        <div>
          <img
            className="logo"
            src="/assets/images/Ethereal Yoga & Wellness Logo (500 × 200 px) (500 × 100 px) (400 × 100 px) (250 × 60 px) (400 × 100 px).png"
            alt="Fitlogic logo"
          />
        </div>
        <div className="menu-container">
          <div className="form-container">
            <img className="search" src="/assets/images/magnifying-glass (1).png" />
            <form id="search" action="/">
              <input type="text" />
            </form>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="nav-links"
          >
            <li>
              <Link to="/">
                <div>Home</div>
              </Link>
            </li>

            <li>
              <Link to="/Workout">
              <dev>workout</dev>
              </Link>
            </li>
            
            <li>
              <Link to="/AddWorkout">
                <dev>add workout</dev>
              </Link>
            </li>

            <li>
              <Link to="/Helthytips">
                <dev>helthy tips</dev>
              </Link>
            </li>

            <li>
              <Link to="/Contact">
                <deiv>Contact</deiv>
              </Link>
            </li>

            <li>
              <Link to="/About">
                <dev>about</dev>
              </Link>
            </li>

            <li>
              <Link to="/SignIn">
                <dev>Sign in</dev>
              </Link>
            </li>

          </motion.ul>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="menu-btn"
            onClick={() => null}
          >
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
