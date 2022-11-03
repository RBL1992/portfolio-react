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
                name="TeamSpeak"
                liveLink="https://teamspeak-org.herokuapp.com/"
                gitHubLink="https://github.com/park-d/team-speak"
            />
            <ProjectCard
                img={jatelogo}
                name="J.A.T.E"
                liveLink="https://frozen-ravine-97502.herokuapp.com/"
                gitHubLink="https://github.com/RBL1992/text-editor-PWA"
            />
            <ProjectCard
               img={readmeLogo}
               name=""
               liveLink="README Generator"
               gitHubLink="https://github.com/RBL1992/README-generator" 
            />
        </div>
    )
}

export default Projects;