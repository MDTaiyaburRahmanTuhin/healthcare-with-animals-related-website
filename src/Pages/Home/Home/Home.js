import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Departament from '../Departament/Departament';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Departament></Departament>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;