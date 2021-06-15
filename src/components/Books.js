import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Books = (props) => {
    const { books, moveBook } = props;

    return (
        <>
            {books && books.map((book) => (
                <li key={ book.id }>
                    <Book
                        book={ book }
                        moveBook={ moveBook } />
                </li>
            ))}
        </>
    )
}

Books.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default Books;