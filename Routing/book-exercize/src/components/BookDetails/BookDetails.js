import React , {Component} from 'react';
import booksJSON from '../booksJson.json';

class BookDetails extends Component{
   
    render(){
        let {name,author, cost, description, rating} = booksJSON.books[this.props.match.params.id];
        return(
            <div>
                {name}
                <br/>
                {author}
                <br/>
                {description}
                <br/>
                {rating}
            </div>
        )
    }
}
export default BookDetails