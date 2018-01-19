import React from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Search from './components/search/search'
import CurrentlyReading from './components/currentlyReading/currentlyReading'
import WantToRead from './components/wantToRead/wantToRead'
import ReadBooks from './components/readBooks/readBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

const books = BooksAPI.getAll().then(books=> {console.log(books)});
// console.log(books)

class BooksApp extends React.Component {
  state = {
    currentRead: [],
    wantRead: [],
    read: []
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={()=>(
          <Search/>
        )}/>
        <Route exact path="/" render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading/>
                <WantToRead/>
                <ReadBooks/>
              </div>
            </div>
          <div className="open-search">
            <Link to="/search"> Add a book</Link>
          </div>
        </div>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
