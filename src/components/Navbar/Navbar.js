"use client"
import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import { FaBars} from "react-icons/fa6";

const Navbar = () => {

    const [navbar, setNavbar] = useState(true);

    const showSidebar = () => setNavbar(!navbar);

    return (
        <div>
            <header className={styles.section__container}>
                <div className={styles.header__container}>
                    <nav>
                        <div className={styles.nav__menu__btn} onClick={showSidebar}>
                            <span><FaBars /></span>
                            <h4>Menu</h4>
                        </div>
                        <ul className={`${styles.nav__links} ${navbar?styles.open:styles.close} `} id="nav-links">
                            <Link onClick={showSidebar} href="/">Home</Link>
                            <Link onClick={showSidebar} href="/travel">Travel</Link>
                            <Link onClick={showSidebar} href="/discover">Discover</Link>
                            <Link onClick={showSidebar} href="/clients">Client</Link>
                            <Link onClick={showSidebar} href="/about">About</Link>
                        </ul>
                    </nav>
                   
                    
                </div>
            </header>
        </div>
    );
};

export default Navbar;