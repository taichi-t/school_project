import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Link } from "react-router-dom";

export const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_HISTORY",
      id: book.id,
      title: book.title,
      author: book.author,
    });
  };

  return (
    <li>
      <div className="title">{book && book.title}</div>
      <div className="author">{book && book.author}</div>
      <Link to={book.id}>
        <input
          type="button"
          value="DETAIL"
          onClick={() => dispatch({ type: "DETAIL_BOOK", id: book.id })}
        />
      </Link>
      <input type="button" value="DONE" onClick={handleClick} />
      <input
        type="button"
        value="REMOVE"
        onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
        className="remove_button"
      />
    </li>
  );
};

export default BookDetails;
