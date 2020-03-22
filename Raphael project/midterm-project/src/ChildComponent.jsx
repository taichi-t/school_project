import React from "react";
import { Consumer } from "./App";

export default function ChildComponent() {
  return (
    <Consumer>
      {({ state, actions }) => {
        const city = state.fetchData && state.fetchData.name;
        const currentweather =
          state.fetchData && state.fetchData.weather[0].main;
        const feelsLike = state.fetchData && state.fetchData.main["feels_like"];
        return (
          <>
            <p>{city}</p>
            <p>{currentweather}</p>
            <p>{feelsLike}</p>
          </>
        );
      }}
    </Consumer>
  );
}
