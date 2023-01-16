import React, { useState} from 'react'
import { Link } from 'react-scroll'
import '../App.css';

function Nav() {
    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <div className='nav'>
            <nav className='nav-bar-main'>
                <p id='nav-link'><Link to='aboutme' spy={true} duration={500} offset={-225} smooth={true} onClick={closeMenu}>About Me</Link></p>
                <p id='nav-link'><Link to='projects' spy={true}  duration={500} offset={-105} smooth={true} onClick={closeMenu}>Projects</Link></p>
                <p id='nav-link'><Link to='#' spy={true} duration={500} smooth={true} onClick={closeMenu}>Resume</Link></p>
                <p id='nav-link'><Link to='#' spy={true} duration={500} smooth={true} onClick={closeMenu}>Contact</Link></p>
                {/* <a href='#' id='nav-link'>Projects</a>
                <a href='#' id='nav-link'>Resume</a>
                <a href='#' id='nav-link'>Contact</a> */}

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
