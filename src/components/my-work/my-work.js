import React, {Component} from 'react';
import './my-work.css'
import Slider from 'react-slick';

class MyWork extends Component {
    render(){
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
        return(
            <div className="container">
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
        )
    }
}
export default MyWork;