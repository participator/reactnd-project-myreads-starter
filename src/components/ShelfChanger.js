import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SHELVES } from '../helpers/Constants';

const ShelfChanger = (props) => {
    const { book, moveBook } = props;

    const handleMoveBook = (newShelf) => {
        moveBook(book, newShelf);
    }

    return (
        <div className="book-shelf-changer">
            <select
                value={bookStatus(book.shelf)}
                onChange={(event) => {
                    handleMoveBook(event.target.value)
                }} >
                <option value="move" disabled>Move to...</option>
                {
                    SHELVES && SHELVES.map(shelf => (
                        <option
                            key={shelf.id}
                            value={shelf.id}>
                            {shelf.name}
                        </option>
                    ))
                }
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
const bookStatus = (shelfId) => {
    return SHELVES.filter(shelf => (shelf.id === shelfId)).length ?
        shelfId : "none";
}

ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default ShelfChanger;