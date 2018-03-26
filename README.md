# MyReads Project

In this MyReads App, you can create your bookshelf that allows you to select and categorize books in below order:
- Currently reading
- Want to read
- Read

You can search books with selected queries and add the books to respective
bookshelf you want to.

The application is developed using ReactJS framework.

## TL;DR

To get the application running clone the project at:
https://github.com/alexrios/myreads.git

After that in the same directory:

* install all project dependencies with `npm install`
* start the development server with `yarn start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file.
├── node_modules # List of node modules for the application
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
│   └── manifest.json # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BookShelf.js # Component to display a bookshelf containing a list of Books with Title, Author, bookshelf selection
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles.
    ├── index.js # It is used for DOM rendering.
    ├── BookList.js # Component to list the bookshelves
    ├── BooksSearch.js # Component to show search page to query books and select
    ├── icons # Helpful icons for the app.
    │   ├── no_image_available.svg
    ├── icons # Helpful icons for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to perform necessary operations on the backend as per the given name:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
