import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Debounce } from "react-throttle";
import sortBy from "sort-by";
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    booksInShelf: PropTypes.array.isRequired
  }

  state = {
    query: '',
    booksFound: []
  }

  handleChange = (query) => {
    if (query || query.length) {
      BooksAPI.search(query).then((res)=> {
            let booksFound = null
            if (res !== undefined && res.error !== undefined) {
              booksFound = []
            } else {
              booksFound = res;
            }
            this.setState({booksFound})
        }).catch(error => {
          this.setState({ books: [] });
        });
      }
  }

  updateShelf = (shelf, book) => {
    this.props.updateShelf(shelf, book)
  }


  render() {
    const {booksFound} = this.state
    const {booksInShelf} = this.props

    if (booksFound || booksFound.length) {
      booksInShelf.map((book) => {
        booksFound.map( (b) => {
          if (b.id === book.id) {
              b.shelf = book.shelf
          }
        })
      })
    }

    return <div className="search-books">
        <div className="search-books-bar">
           <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="300" handler="onChange">
              <input
                onChange={(event)=> this.handleChange(event.target.value)}
                type="text"
                placeholder="Search by title or author"/>
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {booksFound.map( (book) => (
              <li key={book.id}>
              <div className="book">
                  <div className="book-top">
                      <div className="book-cover" style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : require("./images/no_image_available.svg")})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf === undefined ? book.shelf='none' : book.shelf}
                          onChange={(event)=> this.updateShelf(event.target.value, book)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                        </select>
                      </div>
                    </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
          ))}
          </ol>
        </div>
      </div>
  }
}

export default BookSearch
