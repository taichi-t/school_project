import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Link } from "react-router-dom";

//style
import Button from "@material-ui/core/Button";

const Navbar = () => {
  const { state } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>currently you have {state.books.length} books to get through...</p>

      <Button variant="book history" color="primary">
        <Link to="/finished-booklist">History</Link>
      </Button>
    </div>
  );
};

export default Navbar;
