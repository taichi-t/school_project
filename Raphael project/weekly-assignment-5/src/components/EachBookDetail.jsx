import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

//style
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const EachBookDetail = (props) => {
  const { state } = useContext(BookContext);
  const id = props.match.params.id;
  const item = state.books.filter((book) => book.id === id);

  const useStyles = makeStyles((theme) => ({
    root: {
      color: "black",
      padding: "10px",
    },
  }));
  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        <p>{item[0] && item[0].author}</p>
        <p>{item[0] && item[0].title}</p>
        <p>created at {item[0] && item[0].createdAt}</p>
      </List>
      <Button color="primary">
        <Link to="/">Back</Link>
      </Button>
    </>
  );
};

export default EachBookDetail;
