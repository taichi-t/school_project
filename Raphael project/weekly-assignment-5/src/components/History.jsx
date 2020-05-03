import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export const History = () => {
  const { state } = useContext(BookContext);

  const item =
    state.history.length === 0 ? (
      <p>There is no history</p>
    ) : (
      <ul>
        {state.history.map((item) => (
          <li key={item.id}>
            title:{item.title}, author:{item.author}, finished at{" "}
            {item.finishedAt}
          </li>
        ))}
      </ul>
    );
  return <>{item}</>;
};

export default History;
