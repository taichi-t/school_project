import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

export const BookList = () => {
  const { state } = useContext(BookContext);
  return state.books.length ? (
    <div className="book-list">
      <ul>
        {state.books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :)</div>
  );
};
