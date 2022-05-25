import React from 'react';
import Banner from './Banner';
import Location from './Location';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';
import Team from './Team';

const Home = () => {
    return (
        <section>
            <Banner />
            <Summary />
            <Parts />
            <Reviews />
            <Location />
            <Team />
            
        </section>
    );
};

export default Home;