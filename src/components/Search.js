import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Books from './Books'
import { useDebounce } from '../helpers/Debounce'

const Search = (props) => {
  const { shelf, moveBook } = props;
  const [books, setBooks] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerms, 500);

  const updateSearchTerms = terms => {
    setSearchTerms(terms);
  }

  useEffect(async () => {
    // API call when search is not empty
    if (debouncedSearchTerm.length) {
      const results = await BooksAPI.search(debouncedSearchTerm);

      // Run when no errors
      if (results && results["error"] === undefined) {
        const matched = results.map(result => {
          // Replace matching results with existing book entry to get shelf property
          const book = shelf.filter(book => {
            return result.id === book.id;
          })

          if (book.length && book[0])
            return book[0];

          return result;
        })

        setBooks(matched);
      }
      // Clear when errors
      else {
        setBooks([]);
      }
    }
    // Clear when empty
    else {
      setBooks([]);
    }
  }, [debouncedSearchTerm])

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
               However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerms}
            onChange={(event) => updateSearchTerms(event.target.value)} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          <Books
            books={books}
            moveBook={moveBook} />
        </ol>
      </div>
    </div>
  )
}

Search.propTypes = {
  shelf: PropTypes.array.isRequired,
  moveBook: PropTypes.func.isRequired,
}

export default Search;