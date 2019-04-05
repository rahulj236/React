import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import images from '../../images';
import {Image} from "./style";

class OfferCarouselComponent extends Component{

    render() {
        const carouselImgs = images["offer-carousel-images"];
        return (
            <Carousel
                style={{margin: '25px 14px'}}
                interval={3000}
                controls={false}
            >
                {carouselImgs.map((image, index) => {
                    return (
                        <Carousel.Item key={index} style={{cursor: 'pointer'}}>
                            <Image src={image.image}/>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        )
    }
}
export default OfferCarouselComponent;