const Navbar = () => {
    return (
    <div className="container">
        <div className="navbar ">
            <div>
            <img
                className="logo"
                src="/assets/images/Ethereal Yoga & Wellness Logo (500 × 200 px) (500 × 100 px) (400 × 100 px) (250 × 60 px) (400 × 100 px).png"
                alt="Fitlogic logo"
            />
            </div>
            <div className="menu-container">
                <div className="form-container">
                    <img className="search" src="/assets//images/magnifying-glass (1).png" />
                    <form id="search" action="/">
                        <input type="text" />
                    </form>
                </div>
                <img className="menu " src="assets/images/more.png" alt="Menu" />
            </div>
        </div>
    </div>
    );
}

export default Navbar