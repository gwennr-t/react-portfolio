import React from 'react';

function Resume() {
    return (
        <div className='resume'>
            <div id='resumeTitle'>
                <h2 >Resume</h2>
            </div>
            <div className='resumeDownload'>
                <a href=''></a>
                <span className='icon'>
                    <i></i>
                </span>
                <span>Download My Resume</span>
            </div>
            <div class='proficiencies'>
                <h4>Below are a list of my developer proficiencies:</h4>
                <ul>
                    <li>HTML5</li>
                    <li>CSS, Bootstrap</li>
                    <li>JavaScript</li>
                    <li>APIs</li>
                    <li>Node.js, Express.js, Jest</li>
                    <li>MySQL, Sequelize, NoSQL</li>
                    <li>MongoDB, Mongoose</li>
                    <li>GraphQL</li>
                    <li>React</li>
                    <li>Object-Relational Mapping(ORM)</li>
                    <li>Model-View-Controller(MVC)</li>
                    <li>Progressive Web Applications(PWA)</li>
                    <li>MERN</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;