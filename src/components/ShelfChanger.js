import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ShelfChanger = ( props ) => {
    const { book, moveBook } = props;
    const [ status, setStatus ] = useState( bookStatus(book.shelf) );

    const handleMoveBook = ( newShelf ) => {
        console.log('newShelf', newShelf)
        setStatus( bookStatus(newShelf) )
        moveBook( book, newShelf );
    }

    return (
        <div className="book-shelf-changer">
            <select 
                value={ status }
                onChange={ (event) => {
                    handleMoveBook(event.target.value)
                }} >
                <option value="move" disabled>Move to...</option>
                <option
                    value="currentlyReading" >
                    Currently Reading
                </option>
                <option
                    value="wantToRead" >
                    Want to Read
                </option>
                <option
                    value="read" >
                    Read
                </option>
                <option
                    value="none" >
                    None
                </option>
            </select>
        </div>
    )
}

/**
 * @description Makes sure status is acceptable
 * @param {string} status - current book's status
 * @returns {string} acceptable status
 */
const bookStatus = ( shelf ) => {
    switch (shelf) {
        case "currentlyReading":
        case "wantToRead":
        case "read":
            return shelf;
        default:
            return null;
    }
}

ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default ShelfChanger;