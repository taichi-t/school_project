import React, { useContext, useState } from "react";
import { Context } from "../contexts/Context";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const FormComponent = () => {
  const [cityName, setCity] = useState("");
  const { showResult } = useContext(Context);

  const handleClick = (e) => {
    e.preventDefault();
    showResult(cityName);
    setCity("");
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <form onSubmit={handleClick}>
      <TextField
        label="Enter your country"
        onChange={handleChange}
        value={cityName}
      />
      <Button type="submit" variant="contained" color="primary">
        Show result
      </Button>
    </form>
  );
};

export default FormComponent;
