import React, { Component } from 'react';
import './landing.css';
import logo from '../../assets/logo.svg'
import workbg from '../../assets/work-bg.svg'
import servicebg from '../../assets/service-bg.svg'
import contactbg from '../../assets/contact-bg.svg'
import Fade from 'react-reveal/Fade';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <Fade top delay={300} duration={2000}>
                    <img src={logo} className="page-logo" alt="logo" />
                    </Fade>
                </div>

                <div className="text-container">
                    <Fade left delay={500} duration={3000}>
                        <h1>
                            Hello i am Simon. <br/>
                            I'm a UI/UX Designer <br/>
                            and Frontend Developer. <br/>
                        </h1>
                    </Fade>
                </div>

                <Fade bottom delay={400} duration={3000}>
                    <div className="card-grid">
                        <div className="card">
                            <img src={workbg} className="work-bg" alt="work background" />
                        </div>
                        <div className="card">
                            <img src={servicebg} className="service-bg" alt="service background" />
                        </div>
                        <div className="card">
                            <img src={contactbg} className="contact-bg" alt="about background"/>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Landing;
