import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offer from '../components/Offer/Offer';
import NewCollection from '../components/NewCollections/NewCollection';
import NewLetter from '../components/NewLetter/NewLetter';

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection/>
            <NewLetter/>
        </div>
    );
};

export default Shop;