import React from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Container(data) {
  const inf = data.data;
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          userId:{inf.userId}
        </Typography>
        <Typography variant="h5" component="h2">
          Id:{inf.id}
        </Typography>
        <Typography color="textSecondary">Title:{inf.title}</Typography>
      </CardContent>
    </Card>
  );
}
