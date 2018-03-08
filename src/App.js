import React from 'react'
import './App.css'
import BookList from './BookList'
import BookSearch from './BookSearch'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books)
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render= {() => (
          <BookSearch/>
        )}/>
        <Route exact path="/" render= {() => (
          <BookList/>
        )}/>
      </div>
    )
  }
}
export default BooksApp
