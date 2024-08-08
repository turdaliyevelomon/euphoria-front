import React from 'react';
import Hero from './Hero';
import Arrival from './arrival/Arrival';
import ForMen from './forMen/ForMen';
import ForWomen from './forWomen/ForWomen';
import Brands from './brands/Brands';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Navbar /> 
            <Hero />
            <Arrival />
            <ForMen />
            <ForWomen />
            <Brands />
            <Footer /> 
        </div>
    );
};

export default Home;
