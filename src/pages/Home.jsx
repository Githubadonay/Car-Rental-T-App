import React from 'react';
import Landing from '../components/Landing.jsx';
import Features from '../components/Features.jsx';
import Banner from '../components/Banner.jsx';
import Choose from '../components/Choose.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Download from '../components/Download.jsx';

const Home = () => {
    return (
        <>
        <Landing />
        <Features />
        <Banner />
        <Choose />
        <Testimonials />
        <Download />
        </>
    );
};

export default Home;
