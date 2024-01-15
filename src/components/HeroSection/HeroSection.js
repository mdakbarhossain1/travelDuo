import React from 'react';
import './heroSection.module.css';
import Image from 'next/image';
const HeroSection = () => {
    return (
        <div className='header'>
            <div className="header__image">
                <Image src='/header.png'
                    alt="this is header images"
                    fill
                    sizes="(min-width: 300px) auto, auto"
                    style={{
                        objectFit: 'contain', // cover, contain, none
                    }}
                />

            </div>
            <div class="header__content">
                <h1>All-in-one<br />travel app</h1>
                <p class="section__description">
                    With a user-friendly interface, our app consolidates all your travel
                    needs in one place, offering a convenient and efficient solution for
                    planning and managing your journeys.
                </p>

            </div>
        </div>
    );
};

export default HeroSection;