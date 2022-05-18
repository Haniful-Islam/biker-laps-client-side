import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import BikeServicing from '../BikeServicing/BikeServicing';
import LatestBikes from '../LatestBikes/LatestBikes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <BikeServicing></BikeServicing>
            <LatestBikes></LatestBikes>
        </div>
    );
};

export default Home;