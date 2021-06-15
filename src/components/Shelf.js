import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Shelf = ( props ) => {
    const { name, books } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ name }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { books && books.map((book) => (
                        <li key={ book.id }>
                            <Book 
                                book={ book }
                                moveBook={ console.log } />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
}

export default Shelf