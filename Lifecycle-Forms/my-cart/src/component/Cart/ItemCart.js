import React, { Component } from 'react';
import './itemCart.css'

class ItemCart extends Component {
    render() {
        console.log("props coming...", this.props.item);
        console.log("index..", this.props.id);
        const { name, price, quantity } = this.props.item;
        return (
            <div className="items">
                <div className="left">
                    <div className="lf">
                        {name}
                    </div>

                    <div className="rt">
                        <span>{quantity}</span>


                        <span>{price}</span>
                    </div>

                </div>
                <div className="right">
                    <div className="lf">
                        <button className="btn_counter" onClick={() => this.props.handleOnIncrease(this.props.id)}>
                            +
                        </button>
                        <button className="btn_counter" onClick={() => this.props.handleOnDecrease(this.props.id)}>
                            -
                        </button>
                    </div>
                    <div className="rt">
                        <button className="btn-delete" onClick={() => this.props.handleOnDelete(this.props.id)}>X</button>
                    </div>

                </div>
            </div >
        )
    }
}
export default ItemCart


