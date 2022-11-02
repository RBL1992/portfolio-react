import React from 'react';
import resume from '../images/Roy B Logan Jr Resume (1).pdf';

import '../styles/Navbar.css'

function Navbar({ handlePageChange }) {
    return (
        <div className='nav-wrapper'>
            <nav>
                <a onClick={() => handlePageChange('Projects')} >Projects</a>
                <a href="https://github.com/RBL1992" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/roy-logan-6a352789/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto: loganroyjr4@gmail.com"rel="noreferrer">Email Me</a>
                <a href={resume} target="_blank" rel="noreferrer">Resume</a>
            </nav>
            <div className='logo'>
                <a onClick={() => handlePageChange('Main')}>ROY LOGAN</a>
            </div>
        </div>
    )
}

export default Navbar;