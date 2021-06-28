import image from "./../../sinusik1.svg"
import s from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.nav_container}>
                <img src={image} alt="logo" />
                <a href="/" className={s.navbar_logo}>Sinusik ART</a>
            </div>
            <ul>
                <a href="/">About</a>
                <a href="/">Works</a>
                <a href="/">Contact</a>
            </ul>

        </nav>
    )
}

export default Nav;