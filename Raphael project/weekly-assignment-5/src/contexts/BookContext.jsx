import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducers";

export const BookContext = createContext();

const BookContextProivider = (props) => {
  const booksState = localStorage.getItem("books");
  const historyState = localStorage.getItem("history");

  const parcedBooksState = booksState ? JSON.parse(booksState) : [];
  const parcedHistoryState = historyState ? JSON.parse(historyState) : [];

  const initialState = {
    books: parcedBooksState,
    history: parcedHistoryState,
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(state.books));
  }, [state.books]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(state.history));
  }, [state.history]);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProivider;
