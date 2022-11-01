import React from 'react';

import '../../styles/Projects.css'

function Projects() {
    return (
        <div class="container cards">
            <div class="cards" style="width: 18rem;">
                <img src="../../images/TeamSpeakLogo.png" class="card-img-top"
                    alt="screen shot of website" />
                <div class="card-body">
                    <h5 class="card-title">TeamSpeak</h5>
                    <p class="card-text">Created a full stack application to enhance team building!</p>
                    <a href="https://teamspeak-org.herokuapp.com/" class="btn btn-primary">View Website</a>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Projects;