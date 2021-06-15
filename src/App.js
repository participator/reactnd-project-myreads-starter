import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Title from './components/Title'
import Search from './components/Search'
import Shelf from './components/Shelf'

const BooksApp = () => {
  const [books, setBooks] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });

  /**
   * @description - Moves a given book to the moveTo location
   * @param {object} book - book to move
   * @param {func} moveTo - shelf name to move book to
   */
  const handleMoveBook = (book, moveTo) => {
    // Books not on a shelf
    if (book.shelf === undefined) {
      book.shelf = moveTo;
      const added = [...books[moveTo], book];

      // Update UI state
      setBooks({
        ...books,
        [moveTo]: added,
      });
    }
    // Books on a shelf
    else {
      const removed = books[book.shelf].filter(curr => (
        curr.id !== book.id
      ))

      // Update shelf location
      const originalShelf = book.shelf;

      if (moveTo === "none") {
        delete book.shelf;

        // Update UI state
        setBooks({
          ...books,
          [originalShelf]: removed,
        });
      }
      else {
        book.shelf = moveTo;
        const added = [...books[moveTo], book];

        // Update UI state
        setBooks({
          ...books,
          [originalShelf]: removed,
          [moveTo]: added,
        });
      }
    }
    // Update server
    BooksAPI.update(book, moveTo);
  }

  useEffect(async () => {
    const requestedBooks = await BooksAPI.getAll();
    const currentlyReading = requestedBooks.filter(book => {
      return book.shelf === "currentlyReading"
    })
    const wantToRead = requestedBooks.filter(book => {
      return book.shelf === "wantToRead"
    })
    const read = requestedBooks.filter(book => {
      return book.shelf === "read"
    })

    setBooks({
      currentlyReading,
      wantToRead,
      read
    });
  }, [books.length])

  return (
    <div className="app">
      <Route path="/search" render={() => (
        <Search
          shelf={[
            ...books.currentlyReading,
            ...books.wantToRead,
            ...books.read
          ]}
          moveBook={handleMoveBook}
        />
      )} />
      <Route exact path="/" render={() => (
        <div>
          <div className="list-books">
            <Title name="MyReads" />
            <div className="list-books-content">
              <div>
                <Shelf
                  name={"Currently Reading"}
                  books={books["currentlyReading"]}
                  moveBook={handleMoveBook} />
                <Shelf
                  name={"Want to Read"}
                  books={books["wantToRead"]}
                  moveBook={handleMoveBook} />
                <Shelf
                  name={"Read"}
                  books={books["read"]}
                  moveBook={handleMoveBook} />
              </div>
            </div>
          </div>
          <Link className="open-search" to="/search">
            <button>Add Book</button>
          </Link>
        </div>
      )} />
    </div>
  )
}

export default BooksApp
