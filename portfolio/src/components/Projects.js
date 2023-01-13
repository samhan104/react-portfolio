import React, { useState, useEffect } from "react";
import '../App.css';

function AboutMe() {
    return (
        <>
            <div className="projects" id="projects">
                <div className="row1">
                    <div className="programming">
                        <p>Programming</p>
                    </div>
                    <button id="project-button"><p id="button-text">For all of my projects, <br /> Click here for my Google Drive</p></button>
                    <div className="audios">
                        <p id="audio-title">Audios</p>
                        <div id="audio-projects">
                            <iframe src="https://www.youtube.com/watch?v=aIK5E0Oo3o4">
                            </iframe><br />
                            <audio controls>
                                <source src="/audio/BAYS1E1.mp3" type="audio/mpeg"></source>
                            </audio>
                            <audio controls>
                                <source src="/audio/HanCastillo_Project2.wav" type="audio/wav"></source>
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe