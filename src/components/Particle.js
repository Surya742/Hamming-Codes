import React, { Component } from 'react';
import Particles from 'react-particles-js';
import "pathseg";

class Particle extends Component {

    render() {
        return (//style={{backgroundColor: "black"}}
            <div>
                {/* <Particles
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
                    }}
                /> */}


{/* 
                <Particles
                    params={{
                        "particles": {
                            color: {
                                value: "#000000"
                            },
                            line_linked: {
                                color: {
                                    value: "#000000"
                                }
                            },
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} /> */}


<Particles
    style={{position: "absolute", top: 0, maxHeight: "60%", marginLeft: "-39%"}}
    params={{
	    "fps_limit": 600,
	    "particles": {
            color: {
                    value: "#000000"
                    },
	        "collisions": {
	            "enable": false
	        },
	        "number": {
	            "value": 115,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 30,
	            "opacity": 0.4,
                "color": "#000000",
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 0.05,
	                "speed": 1,
	                "sync": false
	            },
	            "value": 0.4
	        }
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 0.3,
	        "type": "inline",
	        "move": {
	            "radius": 10
	        },
	        "url": "http://127.0.0.1:5500/src/components/eg.svg",
	        "inline": {
	            "arrangement": "equidistant"
	        },
	        "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "rgba(0,0,0,.1)"
	            }
	        }
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "size": 6,
	                "distance": 40
	            }
	        }
	    }
	}} />
            </div>
        );
    };

}
// https://cdn.matteobruni.it/images/particles/smalldeer.svg
export default Particle;