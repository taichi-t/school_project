import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export const BookDetails = ({ book, history }) => {
  const { dispatch } = useContext(BookContext);

  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_HISTORY",
      id: book.id,
      title: book.title,
      author: book.author,
      payload: history,
    });
  };

  return (
    <li>
      <div className="title">{book && book.title}</div>
      <div className="author">{book && book.author}</div>
      <input
        type="button"
        value="remove"
        onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
      />
      <input
        type="button"
        value="detail"
        onClick={() => dispatch({ type: "DETAIL_BOOK", id: book.id })}
      />
      <input type="button" value="finish" onClick={handleClick} />
    </li>
  );
};

export default BookDetails;
