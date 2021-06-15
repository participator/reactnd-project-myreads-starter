import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

const Book = ( props ) => {
    const { book, moveBook } = props;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ book.imageLinks.smallThumbnail }})` }}></div>
                <ShelfChanger 
                    book={ book }
                    moveBook={ console.log }
                />
            </div>
            <div className="book-title">{ book.title }</div>
            <div className="book-authors">{ book.authors[0] }</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default Book