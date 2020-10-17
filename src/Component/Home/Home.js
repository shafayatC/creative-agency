import React from 'react';
import Carosal from './Carosal/Carosal';
import Clients from './Clients/Clients';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Services></Services>
            <Carosal></Carosal>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;