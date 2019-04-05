import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import imagesjson from '../../images';

class Banner extends Component {
    
    render() {
        const imagesCarousel = imagesjson['carousel-images'];
        console.log("images..",imagesCarousel[0]);
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagesCarousel[0]}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagesCarousel[1]}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagesCarousel[2]}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagesCarousel[3]}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagesCarousel[4]}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Banner;