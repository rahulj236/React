import React, { Component } from 'react';
import booksJSON from '../booksJson.json';
import BooksPrint from '../Books/BooksPrint';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [...booksJSON.books]
        }

        console.log("In Booklist >>>>>");

    }
    render() {
        let {books} = this.state;
        console.log("####3",books);
        return (
            <div>
                {
                    books.map((item, index) => {
                        return <BooksPrint key={index} item={item} id={index}/>
                    })
                }
            </div>
        )
    }
}
export default BookList