import React, { useState} from 'react'
import { Link } from 'react-scroll'
import '../App.css';

function Nav() {
    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <div className='nav'>
            {click ? null :
            <nav className='nav-bar-main'>
                <p id='nav-link'><Link to='aboutme' spy={true} duration={500} offset={-225} smooth={true} onClick={closeMenu}>About Me</Link></p>
                <p id='nav-link'><Link to='projects' spy={true}  duration={500} offset={-105} smooth={true} onClick={closeMenu}>Projects</Link></p>
                <p id='nav-link'><Link to='resume' spy={true} duration={500} smooth={true} onClick={closeMenu}>Resume</Link></p>
                <p id='nav-link'><Link to='#' spy={true} duration={500} smooth={true} onClick={closeMenu}>Contact</Link></p>
            </nav>}
        </div>
    )
}

export default Nav
