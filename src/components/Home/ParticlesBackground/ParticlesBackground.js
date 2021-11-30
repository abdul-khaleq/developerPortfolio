import React from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from '../../../ParticlesConfig/ParticlesConfig'
import './ParticlesBackground.css';


const ParticlesBackground = () => {

    return (
        <div className="perticle">
            <Particles params={ParticlesConfig}
            />
        </div>
    );
};

export default ParticlesBackground;