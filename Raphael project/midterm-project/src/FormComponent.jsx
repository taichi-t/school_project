import React, { Component } from "react";
import { Consumer } from "./App";
import TextField from "@material-ui/core/TextField";

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
              <form noValidate autoComplete="off">
                <TextField
                  label="Enter your country"
                  onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Show result</button>
              </form>
            </>
          );
        }}
      </Consumer>
    );
  }
}
