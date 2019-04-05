import React, { Component } from 'react'
import {
    Profile,
    Wishlist,
    Bag,
    LogoName,
    Ul
} from './style';

class Actionbar extends Component {
    render() {
        return (
                <Ul>
                    <li>
                        <Profile></Profile>
                        <LogoName>Profile</LogoName>
                    </li>
                    <li>
                        <Wishlist></Wishlist>
                        <LogoName>Wishlist</LogoName>
                    </li>
                    <li>
                        <Bag></Bag>
                        <LogoName>Bag</LogoName>
                    </li>
                </Ul>
        )
    }
}
export default Actionbar