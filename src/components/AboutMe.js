import React from 'react';

class AboutMe extends React.Component {
    render() {
        return (
            <div class="text-center" style={{ paddingTop: '30px', fontFamily: 'Courier' }}>
                <h1>Jessica Cheng</h1>
                <h4 style={{ paddingTop: '10px' }}>NJ / NYC ↔ Boston</h4>
                <h5 style={{ paddingTop: '10px' }}>B.S. Computer Science and Biology</h5>
                <h5>Northeastern University</h5>
                <div class="about text-left">
                    <p>I am a recent 2020 grad from Northeastern University with a degree in Computer Science and Biology.
                    I have experience in full-stack development and my interests lie in the advancement of science, healthcare and the betterment of society.
                    My goal as a software developer is to be instrumental in helping others increase their productivity and reach their goals while creating an impact on people's lives.
                </p>
                </div>
            </div>
        )
    }
}
export default AboutMe;