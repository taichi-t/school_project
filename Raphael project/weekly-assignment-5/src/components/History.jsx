import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

//style
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const History = () => {
  const { state } = useContext(BookContext);

  const useStyles = makeStyles((theme) => ({
    root: {
      color: "black",
    },
  }));

  const classes = useStyles();

  const item =
    state.history.length === 0 ? (
      <>
        <p style={{ color: "black" }}>There is no history</p>
        <Button color="primary">
          <Link to="/">Back</Link>
        </Button>
      </>
    ) : (
      <>
        <List className={classes.root}>
          {state.history.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} secondary={item.finishedAt} />
              {/* title:{item.title}, author:{item.author}, finished at{" "} */}
            </ListItem>
          ))}
        </List>
        <Button color="primary">
          <Link to="/">Back</Link>
        </Button>
      </>
    );
  return <>{item}</>;
};

export default History;
