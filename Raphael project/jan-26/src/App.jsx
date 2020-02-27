import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "./Container";
import Grid from "@material-ui/core/Grid";

export default class App extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      fetchData: undefined
    };
  }
  componentDidMount() {
    const fetchData = url => {
      fetch(url)
        .then(resp => {
          if (resp.status !== 200) {
            //checking if the status is okay
            console.log("error");
          }
          resp.json().then(data => {
            this.setState({ fetchData: data });
          });
        })
        .catch(error => {
          console.log(`This is a error ${error}`);
        });
    };
    fetchData("https://jsonplaceholder.typicode.com/todos");
  }
  render() {
    console.log(this.state);
    const datas = this.state.fetchData;
    return (
      <div style={{ padding: 10 }}>
        <Grid container spacing={3}>
          <CssBaseline />

          {datas &&
            datas.map((data, index) => {
              return (
                <Grid item xs={3} key={index}>
                  <Container data={data}></Container>
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}
