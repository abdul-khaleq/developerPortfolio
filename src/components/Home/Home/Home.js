import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <React.Fragment>
            <Navigation></Navigation>
            {/* <ParticlesBackground></ParticlesBackground> */}
            <Banner></Banner>
            <About></About>
            <Projects></Projects>

            {/* <Skills></Skills> */}
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Home;