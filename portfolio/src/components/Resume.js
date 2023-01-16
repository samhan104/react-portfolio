import React from "react";
import myResume from "../jan.pdf"
import '../App.css';

function Resume() {
    return (
        <>
            <div className="resume-box" id="resume">
                <h1 className="resume-name">My Most Updated Resume*</h1>
                <div className="resume-note">
                    <p>It may take a while for me to update my resume and upload it</p>
                </div>
                <a href={myResume} target="_blank" rel="noreferrer" ><button>Click Me</button></a>
            </div>
        </>
    )
}

export default Resume