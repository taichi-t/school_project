import { v4 as uuidv4 } from "uuid";
const moment = require("moment");

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      const createdAt = moment().calendar();
      return {
        ...state,
        books: state.books.concat({
          title: action.book.title,
          author: action.book.author,
          id: uuidv4(),
          createdAt,
        }),
      };

    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };

    case "ADD_HISTORY":
      const finishedAt = moment().calendar();

      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
        history: state.history.concat({
          title: action.title,
          author: action.author,
          id: action.id,
          finishedAt,
        }),
      };

    default:
      return state;
  }
};
