import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

require("dotenv").config();
const apiKey = process.env.REACT_APP_APIKEY;

export const ContextProvier = (props) => {
  const [data, setData] = useState([]);
  const [isNotFound, setCondition] = useState(false);

  useEffect(() => {
    const fetchData = (url) => {
      fetch(url).then((response) => {
        if (response.status === 404) {
          console.log("city is not founded " + response.status);
          setCondition({ isNotFound: true });
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
          .then((fetchData) => {
            setData([...data, fetchData]);
          })
          .catch((error) => {
            console.log("this is a error" + error);
          });
      });
    };
    fetchData(
      `http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${apiKey}`
    );
  }, []);

  return (
    <Context.Provider value={{ data, isNotFound }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvier;
