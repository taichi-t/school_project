import React, { createContext, Component } from "react";
import CildComponent from "./ChildComponent";
import { getDataFromApi } from "./main";

const Context = createContext();
export const { Provider, Consumer } = Context;
require("dotenv").config();
const apiKey = process.env.REACT_APP_APIKEY;

class App extends Component {
  state = {
    count: 1,
    fetchData: "",
  };
  componentDidMount() {
    getDataFromApi(
      `http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${apiKey}`
    );
  }
  render() {
    return (
      <Provider
        value={{
          state: this.state,
        }}
      >
        <CildComponent />
      </Provider>
    );
  }
}

export default App;
