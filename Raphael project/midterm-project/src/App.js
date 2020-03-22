import React, { createContext, Component } from "react";
import CildComponent from "./ChildComponent";

const Context = createContext();
export const { Provider, Consumer } = Context;
require("dotenv").config();
const apiKey = process.env.REACT_APP_APIKEY;

class App extends Component {
  state = {
    fetchData: "",
  };
  componentDidMount() {
    this.getDataFromApi(
      `http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${apiKey}`
    );
  }
  getDataFromApi = (url) => {
    fetch(url).then((response) => {
      if (response.status === 404) {
        console.log("city is not founded " + response.status);
        return;
      }

      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code:" + response.status
        );
        return;
      }

      response
        .json()
        .then((data) => {
          this.setState({
            fetchData: data,
          });
        })
        .catch(function (error) {
          console.log("this is a error" + error);
        });
    });
  };
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
