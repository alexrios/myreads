import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {
  state = {
    books: []
  }

  updateBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
 }

  componentDidMount() {
    this.updateBooks()
  }

  updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then(() => {
      let currentBookState = Array.from(this.state.books)
      book.shelf = shelf;
      this.setState((state) =>({
        books: currentBookState.filter( b => b.id !== book.id).concat([book])
      }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render= {(history) => (
          <BookSearch updateShelf={this.updateShelf} booksInShelf={this.state.books}/>
        )}/>
        <Route exact path="/" render= {() => (
          <BookList
            books={this.state.books}
            updateShelf={this.updateShelf}
        />
        )}/>
      </div>
    )
  }
}
export default BooksApp
