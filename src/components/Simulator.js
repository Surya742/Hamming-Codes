import React from 'react';
import HammingCodesNavbar from './HammingCodesNavbar';

export default function Simulator(){
    return <div style={{}}>
        <HammingCodesNavbar />
        <h1 style={{textAlign: "center"}}>Simulator</h1>
        <iframe style={{width: "90%", height: "40em", marginLeft: "5%"}} src="https://surya742.github.io/Logic-Circuit-Simulator/"></iframe>
        </div>
}