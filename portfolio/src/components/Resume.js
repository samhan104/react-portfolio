import React from "react";
import myResume from "../jan.pdf"
import '../App.css';

function Resume() {
    return (
        <>
            <div className="resume-box" id="resume">
                <h1 className="resume-name">My Most Updated Resume*</h1>
                <p>You can view and download my resume by clicking below</p>
                <a className="resumelink" href={myResume} target="_blank" rel="noreferrer"><button className="resumebutton">Click Me</button></a>
                <p className="resume-note">*It may take a while for me to update my resume and upload it</p>
            </div>
        </>
    )
}

export default Resume