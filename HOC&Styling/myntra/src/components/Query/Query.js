import React, { Component } from 'react'
import { Section } from './style'

class Query extends Component {
    render() {
        return (
            <Section>
                <a href="www.google.com">
                    <span> </span>
                </a>

                <input type="search" placeholder="Search for products, brands and more" />
            </Section>
        )
    }
}
export default Query