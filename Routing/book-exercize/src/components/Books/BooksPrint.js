import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './BooksPrint.css';

class BooksPrint extends Component{
    render(){
        console.log("@@@22",this.props.id);
        const{name,thumbnail} = this.props.item;
        return(
            <div className="card">
                <Link to={"/bookDetails/"+this.props.id}>
                    <h2>{name}</h2>
                    <img src={thumbnail} alt=""/>
                </Link>
            </div>
        )
    }
}
export default BooksPrint;