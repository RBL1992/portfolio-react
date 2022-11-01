import React from 'react';

import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
                <a onClick={() => handlePageChange('Projects')} href="./projects.html">Projects</a>
                <a href="https://github.com/RBL1992">GitHub</a>
                <a href="https://www.linkedin.com/in/roy-logan-6a352789/">LinkedIn</a>
                <a href="mailto: loganroyjr4@gmail.com">Email Me</a>
        </nav>
    )
}

export default Navbar;