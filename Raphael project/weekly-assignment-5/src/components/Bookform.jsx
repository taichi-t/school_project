import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

//style
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

export const Bookform = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="title"
        inputProps={{ "aria-label": "description" }}
        onChange={(e) => setTitle(e.target.value)}
        required
        value={title}
        fullWidth={true}
      />

      <Input
        placeholder="author"
        inputProps={{ "aria-label": "aaa" }}
        onChange={(e) => setAuthor(e.target.value)}
        required
        value={author}
        fullWidth={true}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        value="add book"
        style={{ marginTop: "10px" }}
      >
        ADD
      </Button>
    </form>
  );
};

export default Bookform;
