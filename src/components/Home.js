import React from 'react';
import aboutImage from '../images/home.png';
import CommonPage from './CommonPage';
function Home() {
    return (
        <CommonPage heading="Grow your business with" imgSrc={aboutImage} openUrl="/services" btnText="Get Started"/>
    )
}

export default Home;