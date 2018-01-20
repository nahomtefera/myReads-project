import React from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Search from './components/search/search'
import CurrentlyReading from './components/currentlyReading/currentlyReading'
import WantToRead from './components/wantToRead/wantToRead'
import ReadBooks from './components/readBooks/readBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      allBooks: [],
      currentRead: [],
      wantRead: [],
      read: []
    }

    this.updateBook = this.updateBook.bind(this);
  }
  

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      allBooks: books,
      currentRead: books.filter((book)=> book.shelf === "currentlyReading"),
      wantRead: books.filter((book)=> book.shelf === "wantToRead"),
      read: books.filter((book)=> book.shelf === "read")
    }));
  }

  updateBook(selectedBook) {
    let book = selectedBook.target;
    let bookShelf = selectedBook.target.value;

    BooksAPI.update(book, bookShelf).then((something)=>{
      BooksAPI.getAll().then((books) => this.setState({
        allBooks: books,
        currentRead: books.filter((book)=> book.shelf === "currentlyReading"),
        wantRead: books.filter((book)=> book.shelf === "wantToRead"),
        read: books.filter((book)=> book.shelf === "read")
      }));
    });
    

  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={()=>(
          <Search updateBook={this.updateBook} books={this.state.allBooks}/>
        )}/>
        <Route exact path="/"  render={({history})=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading updateBook={this.updateBook} books={this.state.currentRead}/>
                <WantToRead updateBook={this.updateBook} books={this.state.wantRead}/>
                <ReadBooks updateBook={this.updateBook} books={this.state.read}/>
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
