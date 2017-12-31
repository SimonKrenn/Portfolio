import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor'
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';

//CSS
import './App.css';

//Images
import logo from '../src/assets/logo.svg'
import workbg from '../src/assets/work-bg.svg'
import servicebg from '../src/assets/service-bg.svg'
import contactbg from '../src/assets/contact-bg.svg'

class App extends Component {
  render() {
      const settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          }, {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
              }
          }, {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }]
      };
    return (
     <div className="page-container">
         <div className="landing-container">
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
                         <Scrollchor to="#work" className="nav-link">Sample</Scrollchor>
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
         <div className="work-section" id="work">
             <div className="work-container">
                 <h1> My Work </h1>
                 <Slider {...settings}>
                     <div className="carousel-card">
                     </div>
                     <div className="carousel-card">
                     </div>
                     <div className="carousel-card">
                     </div>
                     <div className="carousel-card">
                     </div>
                     <div className="carousel-card">
                     </div>
                 </Slider>
             </div>
         </div>

         <div className="service-section" id="service">
         </div>

         <div className="contact-section" id="contact">
         </div>
     </div>
    );
  }
}

export default App;
