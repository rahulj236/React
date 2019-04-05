import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap'
import imagesJson from '../../images'
import './style.css'

class BrandsImage extends Component {
    render() {
        const BrandImages = imagesJson['brands-focus-images'];
        return (
            <div>
                <h4 className="brandName">
                    Brands in Focus
                    <span className="subName">Show some brand love</span>
                </h4>

                <Container className="brand-container">
                    <Row>
                        <Col xs={6} sm ={6} md={3}>
                            <Figure>
                                <Figure.Image
                                    width={230}
                                    height={330}
                                    alt="171x180"
                                    src={BrandImages[0].image}
                                />
                            </Figure>
                        </Col>
                        <Col xs={6} sm ={6} md={3}>
                            <Figure>
                                <Figure.Image
                                    width={230}
                                    height={330}
                                    alt="171x180"
                                    src={BrandImages[1].image}
                                />
                            </Figure>
                        </Col>
                        <Col xs={6} sm ={6} md={3}>
                            <Figure>
                                <Figure.Image
                                    width={230}
                                    height={330}
                                    alt="171x180"
                                    src={BrandImages[2].image}
                                />
                            </Figure>
                        </Col>
                        <Col xs={6} sm ={6} md={3}>
                            <Figure>
                                <Figure.Image
                                    width={230}
                                    height={330}
                                    alt="171x180"
                                    src={BrandImages[3].image}
                                />
                            </Figure>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} sm ={6} md={3}>
                            <Figure>
                                <Figure.Image
                                    width={230}
                                    height={330}
                                    alt="171x180"
                                    src={BrandImages[4].image}
                                />
                            </Figure>
                        </Col>
                        <Col xs={6} sm ={6} md={3}>
                            <Figure>
                                <Figure.Image
                                    width={230}
                                    height={330}
                                    alt="171x180"
                                    src={BrandImages[5].image}
                                />
                            </Figure>
                        </Col>
                        <Col xs={6} sm ={6} md={3}>
                            <Figure>
                                <Figure.Image
                                    width={230}
                                    height={330}
                                    alt="171x180"
                                    src={BrandImages[6].image}
                                />
                            </Figure>
                        </Col>
                        <Col xs={6} sm ={6} md={3}>
                            <Figure>
                                <Figure.Image
                                    width={230}
                                    height={330}
                                    alt="171x180"
                                    src={BrandImages[7].image}
                                />
                            </Figure>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
export default BrandsImage;