import { useState } from "react";

require("./Navbar.css");

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const toggleNav = () => {
		setNav(!nav);
	};

	return (
		<nav className={nav ? "active" : ""}>
			<img src="/images/fitlogic.png" alt="Logo" />
			<button onClick={toggleNav}>
				<img src="images/hamburger.svg" />
			</button>
			<div className={nav ? "active" : ""}>
				<button onClick={toggleNav}>
					<img src="images/close.svg" />
				</button>

				<ul>
					<li>
                    <p> <a href="#">Home</a></p>
					</li>

					<li>

                    <p> <a href="#">workouts</a></p>
					
					</li>

					<li>
                    <p> <a href="#">custom workouts</a></p>

					</li>

					<li>
					<p> <a href="#">healthy tips</a></p>
					</li>
					
					<li>
					<p> <a href="#">sign in/up</a></p>
					</li>

				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
