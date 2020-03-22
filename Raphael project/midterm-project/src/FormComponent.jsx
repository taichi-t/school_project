import React from "react";
import { Consumer } from "./App";

export default function FormComponent() {
  return (
    <Consumer>
      {({ state, actions }) => {
        return (
          <>
            <p>hello</p>
          </>
        );
      }}
    </Consumer>
  );
}
