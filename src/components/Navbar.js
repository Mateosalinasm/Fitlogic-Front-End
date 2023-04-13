import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Navbar = ({ activePage, onLinkClick}) => {
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
                <img className='logo' src="/assets/images/Ethereal Yoga & Wellness Logo (500 × 200 px) (500 × 100 px) (400 × 100 px) (250 × 60 px) (400 × 100 px).png" alt="Menu" />
                </Link>
            </motion.button>
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
                <Link to="/" onClick={() => onLinkClick('home')}>
                <div className={activePage === 'home' ? 'active' : ''}>Home</div>
                </Link>
            </li>
            <li>
                <Link to="/workout" onClick={() => onLinkClick('workout')}>
                <div className={activePage === 'workout' ? 'active' : ''}>workout</div>
                </Link>
            </li>
            <li>
                <Link to="/addWorkout" onClick={() => onLinkClick('addWorkout')}>
                <div className={activePage === 'addWorkout' ? 'active' : ''}>add workout</div>
                </Link>
            </li>
            <li>
                <Link to="/healthy-tips" onClick={() => onLinkClick('healthy-tips')}>
                <div className={activePage === 'healthy-tips' ? 'active' : ''}>Healthy Tips</div>
                </Link>
            </li>
            <li>
                <Link to="/contact" onClick={() => onLinkClick('contact')}>
                <div className={activePage === 'contact' ? 'active' : ''}>Contact</div>
                </Link>
            </li>
            <li>
                <Link to="/about" onClick={() => onLinkClick('about')}>
                <div className={activePage === 'about' ? 'active' : ''}>about</div>
                </Link>
            </li>
            <li>
                <Link to="/sign-in" onClick={() => onLinkClick('sign-in')}>
                <div className={activePage === 'sign-in' ? 'active' : ''}>Sign in</div>
                </Link>
            </li>
            </motion.ul>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className="menu-btn"
                onClick={() => null}
            >
                <img className='menu' src="/assets/images/more.png" alt="Menu" />
            </motion.button>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
