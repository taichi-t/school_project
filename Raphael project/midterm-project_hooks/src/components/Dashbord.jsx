import React, { useContext } from "react";
import { Context } from "../contexts/Context";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const Dashbord = () => {
  const { data } = useContext(Context);

  const city = data && data.name;
  const currentweather = data && data.weather[0].main;
  const feelsLike = data && data.main["feels_like"];
  console.log(data && data.name);
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {city}
        </Typography>
        <Typography variant="h5" component="h2">
          {currentweather}
        </Typography>
        <Typography color="textSecondary">{feelsLike}&#08451;</Typography>
        {/* <Typography variant="body2" component="p">
          {state.isNotFound ? <p>Not Found</p> : null}
        </Typography> */}
      </CardContent>
    </Card>
  );
};
