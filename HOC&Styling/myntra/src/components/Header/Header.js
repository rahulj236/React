import React, { Component } from 'react';
import { Logo, Section, HeadLeft, HeadRight } from './headerStyle';
import Navbar from "../Navbar/Navbar";
import Query from "../Query/Query";
import Actionbar from "../Actionbar/Actionbar";


class Header extends Component {
    render() {
        return (
            <Section >
                <HeadLeft>
                    <Logo></Logo>
                    <Navbar />
                </HeadLeft>
                
                <HeadRight>
                    <Query />
                    <Actionbar />
                </HeadRight>

            </Section>
        )
    }
}
export default Header