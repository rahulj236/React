import React, { Component } from 'react'
import {Ul} from './style';

class Navbar extends Component {
    render() {
        return (
            <Ul>
                <li>
                    <a href="https://www.myntra.com/shop/men">
                        Men
                        </a>
                </li>
                <li>
                    <a href="https://www.myntra.com/shop/women">
                        Women
                        </a>
                </li>
                <li>
                    <a href="https://www.myntra.com/shop/kid">
                        kid
                        </a>
                </li>
                <li>
                    <a href="https://www.myntra.com/shop/home-living">
                        home & living
                        </a>
                </li>
                <li>
                    <a href="https://www.myntra.com/shop/dicover">
                        discover
                        </a>
                </li>
            </Ul>
        )
    }
}
export default Navbar