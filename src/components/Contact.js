import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div class="text-center" style={{ paddingTop: '30px', fontFamily: 'Courier' }}>
                <h1>Contact</h1>
                <p style={{ paddingTop: '10px' }}><b>Email: </b>cheng.je@northeastern.edu</p>
                <p><b>LinkedIn: </b>
                    <a href="https://www.linkedin.com/in/jessica-cheng-b730ba15a">
                        https://www.linkedin.com/in/jessica-cheng-b730ba15a
                </a>
                </p>
            </div>
        )
    }
}
export default Contact;