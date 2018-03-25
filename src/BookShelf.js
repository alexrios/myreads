import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
      sectionName: PropTypes.string.isRequired,
      books: PropTypes.array.isRequired,
      updateShelf: PropTypes.func.isRequired
    }

  handleChange = (shelf, book) => {
    this.props.updateShelf(shelf, book)
  }

  render() {
    const books = this.props.books !== undefined ? this.props.books : []
    const sectionName = this.props.sectionName
    return <div className="bookshelf">
      <h2 className="bookshelf-title">{sectionName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{
                   width: 128,
                   height: 193,
                   backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                 }}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={(event)=> this.handleChange(event.target.value, book)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
          </li>
        ))}
        </ol>
      </div>
   </div>
  }
}
export default BookShelf
