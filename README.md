# MyReads Project

This project is a library to organize books on shevles.  There are three shelves: Currently Reading, Want to Read, and Read.  Books can be added to a shelf by searching for them on "/search".  Books can be move between shelves by selecting the shelf you want to move to.  They can be removed from the library by selecting "none".

## Installation

To get started developing right away:

**Using the package manager npm**
* install all project dependencies with `npm install`
* start the development server with `npm start`

**Using the package manager yarn**
* install all project dependencies with `yarn install`
* start the development server with `yarn start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    |── index.js # You should not need to modify this file. It is used for DOM rendering only.
    └── components
        ├── Book.js # Display a book
        ├── Books.js # Displays a list of books
        ├── Search.js # Allows searching for a books and displays results
        ├── Shelf.js # Displays books on a specific shelf
        ├── ShelfChanger.js # Moves books between shelves
        └── Title.js # Header for the application
    └── helpers
        ├── Constants.js # Constants that can be used throughout the app
        └── useDebounce.js # Custom hook that create a debouncer
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

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
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This project is complete for Udacity's React Nanodegree.  Shoutout to the creators of the course and projects that help ramp up developers confidence in building with React.

## Resources

In addition to the updates made after project was reviewed, the following resources were used:

[useDebounce](https://usehooks.com/useDebounce/)

[Various MDN pages](https://developer.mozilla.org/)

[Don't stop the data flow](https://overreacted.io/writing-resilient-components/#principle-1-dont-stop-the-data-flow)

[Logpoint](https://developer.chrome.com/blog/new-in-devtools-73/#logpoints) (Who knew this was a chrome feature?)

[Suggestions for a Good README](https://www.makeareadme.com/#suggestions-for-a-good-readme)