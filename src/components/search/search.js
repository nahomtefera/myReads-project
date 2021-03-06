import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    state = {
        query: ""
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        let sortedBooks;
        if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            sortedBooks = this.props.books.filter((book)=> match.test(book.title) )
            console.log(sortedBooks)
        } else {
            sortedBooks = this.props.books;
        }

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to="/"
                        className="close-search" 
                    >Close</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text" onChange={this.handleChange} value={this.state.query} placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {sortedBooks.map((book)=>{
                            return(
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                        <select value={book.shelf} id={book.id} onChange={this.props.updateBook}>
                                            <option value="">Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.author}</div>
                                </div>
                            </li>
                        )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;