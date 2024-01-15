import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={`${styles.section__container} ${styles.header__container}`}>
                    <nav>
                        <div className={styles.nav__menu__btn} id="menu-btn">
                            <span><i className={styles.ri_menu_2_line}></i></span>
                            <h4>Menu</h4>
                        </div>
                        <ul className={styles.nav__links} id="nav-links">
                            <Link href="/">Home</Link>
                            <Link href="/travel">Travel</Link>
                            <Link href="/discover">Discover</Link>
                            <Link href="/clients">Client</Link>
                            <Link href="/about">About</Link>
                        </ul>
                    </nav>
                   
                    
                </div>
            </header>
        </div>
    );
};

export default Navbar;