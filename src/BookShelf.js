import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
      sectionName: PropTypes.string.isRequired
    }

  render() {
    const {sectionName} = this.props

    return <div className="bookshelf">
      <h2 className="bookshelf-title">{sectionName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                <BookShelfChanger/>
              </div>
              <div className="book-title">To Kill a Mockingbird</div>
              <div className="book-authors">Harper Lee</div>
            </div>
          </li>
        </ol>
      </div>
   </div>
  }
}
export default BookShelf
