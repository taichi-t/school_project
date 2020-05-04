import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Link } from "react-router-dom";

//style
import Button from "@material-ui/core/Button";

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

      <Button
        color="primary"
        onClick={() => dispatch({ type: "DETAIL_BOOK", id: book.id })}
      >
        <Link to={book.id}> Detail</Link>
      </Button>

      <Button onClick={handleClick} color="primary">
        Done
      </Button>

      <Button
        onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
        color="secondary"
      >
        Remove
      </Button>
    </li>
  );
};

export default BookDetails;
