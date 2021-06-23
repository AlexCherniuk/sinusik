import image from "./../sinusik1.svg"
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <img src={image} alt="" />
                <a href="/" className="navbar-logo">Sinusik ART</a>
                <ul className="nav-menu">
                    <a href="/">About</a>
                    <a href="/">Works</a>
                    <a href="/">Contact</a>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;