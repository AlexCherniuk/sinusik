import { NavLink } from "react-router-dom";
import image from "./../../sinusik1.svg"
import s from "./Header.module.css"

const Nav = (props) => {
    return <NavLink to={props.to} activeClassName={s.active}>{props.name}</NavLink>
}


const Header = () => {

    return (
        <header className={s.header}>
            <nav className={s.navbar}>
                <div className={s.nav_container}>
                    <a href="index.html">
                        <img src={image} alt="logo" />
                    </a>
                    <a href="/index.html" className={s.navbar_logo}>Sinusik ART</a>
                </div>
                <div className={s.ul}>
                    <ul>
                        <Nav to="/about" name="About" />
                        <Nav to="/works" name="Works" />
                        <Nav to="/contact" name="Contact" />
                    </ul>
                </div>

            </nav>
        </header>

    )
}

export default Header;