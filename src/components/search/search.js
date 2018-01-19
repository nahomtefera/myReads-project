import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Search extends Component {

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
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;