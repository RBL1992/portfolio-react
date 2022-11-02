import React from 'react';
import ProjectCard from '../ProjectCard.js';
import teamSpeakLogo from '../../images/TeamSpeakLogo.png';
import bestArtistLogo from '../../images/BestArtistSearchEverLogo.png';
import jatelogo from '../../images/jateLogo.svg'
import readmeLogo from '../../images/readmeLogo.svg'

import '../../styles/Projects.css'

function Projects() {
    return (
        <div>
            <ProjectCard
                img={teamSpeakLogo}
                name="TeamSpeak"
                link="https://teamspeak-org.herokuapp.com/"
            />
            <ProjectCard
                img={jatelogo}
                name="Text Editor"
                link="https://frozen-ravine-97502.herokuapp.com/"
            />
            <ProjectCard
                img={bestArtistLogo}
                name="B.A.S.E"
                link="https://nolacoder.github.io/Best-Artist-Search-Ever/"
            />
            <ProjectCard
               img={readmeLogo}
               name="README Generator"
               link="https://github.com/RBL1992/README-generator" 
            />
        </div>
    )
}

export default Projects;