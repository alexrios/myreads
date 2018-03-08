import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  // static propTypes = {
  //     statusSet: PropTypes.array.isRequired,
  //     currentStatus: PropTypes.string.isRequired
  //   }

  static statusMap = new Map(Object.entries(
    {'Currently Reading': 1, 'Want to Read': 2, 'Read': 1 }
  ))

  render() {
    return <div className="book-shelf-changer">
      <select>
        {}
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  }
}

export default BookShelfChanger
