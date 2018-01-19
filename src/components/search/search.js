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
                        {this.props.books.map((book)=>{
                            return (
                                <li>{book.title} </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;