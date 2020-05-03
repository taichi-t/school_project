import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export const EachBookDetail = (props) => {
  const { state } = useContext(BookContext);
  const id = props.match.params.id;
  const item = state.books.filter((book) => book.id === id);

  return (
    <div>
      <p>{item[0] && item[0].author}</p>
      <p>{item[0] && item[0].title}</p>
      <p>created at {item[0] && item[0].createdAt}</p>
    </div>
  );
};

export default EachBookDetail;
