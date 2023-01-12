import React, {useState, useEffect} from "react";
import { Link } from 'react-scroll'
import '../App.css';

function Home() {
    return (
        <>
            <div className="intro-box">
                <h1 className="title-name">SAMUEL HAN</h1>
                <p>I AM A </p>
                <br />
                <br />
                <div className="rotating-words">
                    <span>PROGRAMMER</span>
                    <span>AUDIO ENGINEER</span>
                    <span>VIDEO EDITOR</span>
                    <span>GAMER</span>
                    <span>ESPORTS ENTHUSIAST</span>
                    <span>HARD WORKER</span>
                </div>
            </div>
        </>
    )
}

export default Home