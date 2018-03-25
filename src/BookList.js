import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const {books} = this.props
    return <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf sectionName="currently reading" books={filterBooks(books, 'currentlyReading')} updateShelf={this.props.updateShelf}/>
        </div>
        <div>
          <BookShelf sectionName="want to read" books={filterBooks(books, 'wantToRead')} updateShelf={this.props.updateShelf}/>
        </div>
        <div>
          <BookShelf sectionName="read" books={filterBooks(books, 'read')} updateShelf={this.props.updateShelf}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  }
}

function filterBooks(books, type) {
  if (books == null) {
    return []
  } else {
    return books.filter((b) => (b.shelf === type))
  }
}

export default BookList
