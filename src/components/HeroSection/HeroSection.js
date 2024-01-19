import React from 'react';
import styles from './heroSection.module.css';
import Image from 'next/image';
import headerImage from '../../../public/header.png';
import googlePlayBtn from '../../../public/google-play.jpg';
import appleAppStore from '../../../public/app-store.jpg';
const HeroSection = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_content}>
                <h1>All-in-one<br />travel app</h1>
                <p className={styles.section_description}>
                    With a user-friendly interface, our app consolidates all your travel
                    needs in one place, offering a convenient and efficient solution for
                    planning and managing your journeys.
                </p>

                <div className={styles.header_btn}>
                    <Image src={googlePlayBtn} alt='google play btn' style={{
                        width: '150px',
                        height: 'auto',
                      }}/>
                    <Image src={appleAppStore} alt='google play btn' style={{
                        width: '150px',
                        height: 'auto',
                      }}/>
                </div>

            </div>
            <div className={styles.header__image}>
                <Image src={headerImage}
                    alt="header images"
                    style={{
                        width: '550px',
                        height: 'auto',
                      }}/>
            </div>
        </div>
    );
};

export default HeroSection;