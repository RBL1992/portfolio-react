import React from 'react';
import ProjectCard from '../ProjectCard.js';
import teamSpeakLogo from '../../images/TeamSpeakLogo.png';
import jatelogo from '../../images/jateLogo.svg'
import readmeLogo from '../../images/readmeLogo.svg'

import '../../styles/Projects.css'

function Projects() {
    return (
        <div>
            <ProjectCard
                img={teamSpeakLogo}
                liveLink="https://teamspeak-org.herokuapp.com/"
                gitHubLink="https://github.com/park-d/team-speak"
            />
            <ProjectCard
                img={jatelogo}
                liveLink="https://frozen-ravine-97502.herokuapp.com/"
                gitHubLink="https://github.com/RBL1992/text-editor-PWA"
            />
            <ProjectCard
               img={readmeLogo}
               liveLink="README Generator"
               gitHubLink="https://github.com/RBL1992/README-generator" 
            />
        </div>
    )
}

export default Projects;