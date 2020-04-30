import React, { useContext } from "react";
import { Context } from "../contexts/Context";

export const Dashbord = () => {
  const { data } = useContext(Context);
  console.log(data);
  return <div>hello</div>;
};
