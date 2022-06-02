import React from 'react';
import s from './Main.module.scss'
import Particles from "react-tsparticles";
import {loadFull}  from "tsparticles";


const Main = () => {

    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };


    const particlesOptions = {
        particles: {
                number:{
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                }
        }
    }

    return (
<div className={s.mainBlock}>

    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },

                    resize: false,
                },
                modes: {
                    push: {
                        quantity: 1,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0.5, max: 2 },
                },
            },
            detectRetina: true,
        }}
    />
            <div className={s.container}>

               <div className={s.intro}>
                   <span>Hi there</span>
                    <h1 className={s.head}>
                       <div className={s.iAm}>I am</div><div className={s.name}> Nikolay Prasolov</div>
                    </h1>
                    <p className={s.text}>
                        Front-end developer
                    </p>
            </div>

                <div className={s.photo}>
                    <div className={s.image}/></div>

            </div>

        </div>
    );
};

export default Main;