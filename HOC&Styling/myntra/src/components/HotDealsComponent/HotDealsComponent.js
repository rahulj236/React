import React, {Component} from 'react';
import images from '../../images';
import {Deal, Footer, Header, HotDealsWrapper, Message} from "./style";

class HotDealsComponent extends Component {

    render() {
        let dealImages = images["deals-card-images"]
        return (
            <HotDealsWrapper>
                {dealImages.map((image, index) => {
                        return <Deal image={image.image}
                                     key={image.id}
                        >
                            <Header>
                                HOT DEALS
                            </Header>
                            <Message>
                                {image.message}
                            </Message>

                            <Footer>
                                + SHOP NOW
                            </Footer>

                        </Deal>
                    }
                )
                }
            </HotDealsWrapper>
        )
    }
}
export default HotDealsComponent;