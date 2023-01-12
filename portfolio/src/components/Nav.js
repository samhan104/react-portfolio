import React, { useState, useReact } from 'react'
import '../App.css';

function Nav() {
    return (
        <div className='nav'>
            <nav className='nav-bar-main'>
                <a href='#' id='nav-link'>About Me</a>
                <a href='#' id='nav-link'>Coding</a>
                <a href='#' id='nav-link'>Audio</a>
                <a href='#' id='nav-link'>Video</a>
                <a href='#' id='nav-link'>Graphics</a>
                <a href='#' id='nav-link'>Resume</a>
                <a href='#' id='nav-link'>Contact</a>
            </nav>
            {/* <nav className='nav-bar-small'>
            <ul>
                    <a href='#' id='nav-link'>About Me</a>
                    <a href='#' id='nav-link'>Coding</a>
                    <a href='#' id='nav-link'>Resume</a>
                    <a href='#' id='nav-link'>Contact</a>
                </ul>
            </nav> */}
        </div>
    )
}

export default Nav

// About Me, Coding, Audio, Video, Graphics, Resume, Contact
//About Me, Projects, Resume, Contact