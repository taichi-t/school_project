import React from "react";
import { Consumer } from "./App";

export default function ChildComponent() {
  return (
    <Consumer>{({ state, actions }) => <div>{state.count}</div>}</Consumer>
  );
}
