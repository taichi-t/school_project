import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
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
      <input
        type="button"
        value="finish"
        onClick={() => dispatch({ type: "FINISH_BOOK", id: book.id })}
      />
    </li>
  );
};

export default BookDetails;
