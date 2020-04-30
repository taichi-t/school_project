import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

require("dotenv").config();
const apiKey = process.env.REACT_APP_APIKEY;

export const ContextProvier = (props) => {
  const [data, setData] = useState();
  const [isNotFound, setCondition] = useState(false);

  useEffect(() => {
    fetchData(
      `http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${apiKey}`
    );
  }, []);

  const showResult = (cityName) => {
    fetchData(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    );
  };

  const fetchData = (url) => {
    fetch(url).then((response) => {
      if (response.status === 404) {
        setCondition(true);
        console.log("city is not founded " + response.status);
        return;
      }

      if (response.status !== 200) {
        setCondition(true);
        console.log(
          "Looks like there was a problem. Status Code:" + response.status
        );
        return;
      }

      response
        .json()
        .then((fetchData) => {
          setData(fetchData);
          setCondition(false);
        })
        .catch((error) => {
          console.log("this is a error" + error);
        });
    });
  };

  return (
    <Context.Provider value={{ data, isNotFound, showResult: showResult }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvier;
