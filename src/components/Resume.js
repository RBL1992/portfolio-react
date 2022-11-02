
import React from 'react';
import resume from '../images/Roy B Logan Jr Resume (1).pdf';

export default function Resume() {
    return (
        <div>
            <p>Download my<a href={resume} target="_blank" rel="noreferrer">Resume</a></p>
       </div>
    );
}