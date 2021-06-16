import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

const Book = (props) => {
    const { book, moveBook } = props;

    return (
        <div className="book">
            <div className="book-top">
                {
                    book.imageLinks &&
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail}})`
                        }} />
                }
                <ShelfChanger
                    book={book}
                    moveBook={moveBook} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                {book.authors && book.authors.map((author, index, authors) => (
                    index < authors.length - 1 ?
                        <span key={author}>{author}, </span> :
                        <span key={author}>{author}</span>
                ))}
            </div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default Book