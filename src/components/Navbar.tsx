import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <header className={styles["navbar-wrapper"]}>
            <div className={`${styles["link-wrapper"]} glass`}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}

export default Navbar;