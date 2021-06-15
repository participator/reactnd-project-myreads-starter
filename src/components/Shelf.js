import React from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

const Shelf = ( props ) => {
    const { name, books, moveBook } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ name }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Books
                        books={ books } 
                        moveBook={ moveBook } />
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