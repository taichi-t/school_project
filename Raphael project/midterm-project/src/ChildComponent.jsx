import React from "react";
import { Consumer } from "./App";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {city}
                </Typography>
                <Typography variant="h5" component="h2">
                  {currentweather}
                </Typography>
                <Typography color="textSecondary">
                  {feelsLike}&#08451;
                </Typography>
                <Typography variant="body2" component="p">
                  {state.isNotFound ? <p>Not Found</p> : null}
                </Typography>
              </CardContent>
            </Card>
          </>
        );
      }}
    </Consumer>
  );
}
