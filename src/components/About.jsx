import React from 'react';

function About() {
    return (
        <div className='aboutMe'>
            <div id='aboutMeTitle'>
                <h2 >About Me</h2>
            </div>
            <div id='aboutMeImage'>
                <img src='./assets/images/IMG_4491 Small.png'></img>
            </div>
            <div class='aboutMeText'>
                <p>Welcome to my professional portfolio!</p>
                <p>I have a background in teaching and have recently dove into learning to code. Problem solving has always been a passion of mine. I love the process of brainstorming and creating efficient and accessible solutions.</p>
                <p>I am excited to continue to learn and grow my skills towards becoming a professional fullstack web developer.</p>
            </div>
        </div>
    );
}

export default About;