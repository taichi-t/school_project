import React, { Component } from "react";
import { Consumer } from "./App";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class FormComponent extends Component {
  state = {
    cityName: "",
  };

  handleChange = (e) => {
    this.setState({ cityName: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.showWeather(this.state.cityName);
  };

  render() {
    return (
      <Consumer>
        {({ state, actions }) => {
          return (
            <>
              <div style={{ paddingTop: "20px" }}>
                <form noValidate autoComplete="off">
                  <TextField
                    label="Enter your country"
                    onChange={this.handleChange}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Show result
                  </Button>
                </form>
              </div>
            </>
          );
        }}
      </Consumer>
    );
  }
}
