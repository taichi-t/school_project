import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>currently you have {state.books.length} books to get through...</p>
      <Link to="/finished-booklist">
        <input type="button" value="book history" />
      </Link>
    </div>
  );
};

export default Navbar;
