import React, { Component } from "react";
import { Consumer } from "./App";

export default class FormComponent extends Component {
  state = {
    cityName: "",
  };

  handleChange = (e) => {
    this.setState({ cityName: e.target.value });
  };

  handleClick = () => {
    this.props.showWeather(this.state.cityName);
  };

  render() {
    return (
      <Consumer>
        {({ state, actions }) => {
          return (
            <>
              <input type="text" onChange={this.handleChange} />
              <button onClick={this.handleClick}>Show result</button>
            </>
          );
        }}
      </Consumer>
    );
  }
}
