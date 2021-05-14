import React, { Component } from 'react';
import Particles from 'react-particles-js';
import "pathseg";

class Particle extends Component {

    render() {
        return (
            <div>
                <Particles
                    params={{
                        particles: {
                            color: {
                                value: "#000000"
                            },
                            line_linked: {
                                color: {
                                    value: "#000000"
                                }
                            },
                            number: {
                                value: 50
                            },
                            size: {
                                value: 3
                            }
                        },
                        // polygon: {
                        //     color: {
                        //         value: "#000000"
                        //     },
                        //     line_linked: {
                        //         color: {
                        //             value: "#000000"
                        //         }
                        //     },
                        //     enable: true,
                        //     type: 'inside',
                        //     move: {
                        //         radius: 10
                        //     },
                        //     url: 'eg.svg'
                        // }
                    }}
                />

                <Particles
                    params={{
                        polygon: {
                            draw: {
                                enable: true,
                                stroke: {
                                    color: 'rgba(0, 0, 0, 1)'
                                },
                            },
                            enable: true,
                            type: 'inside',
                            move: {
                                radius: 10
                            },
                            url: 'https://cdn.matteobruni.it/images/particles/smalldeer.svg' 
                        },
                        "color": {
                            "value": "rgba(0, 0, 0, 1)"
                        },
                    }} />
            </div>
        );
    };

}

export default Particle;