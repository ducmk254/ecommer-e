import React from 'react';
import Category from '../components/Category';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';


const Home = () => {

    return (
        <>
            <NavBar />
            <Slider />
            <Category />
            <Products/>
            <NewsLetter/>
            <Footer/>
        </>
    );
};

export default Home;