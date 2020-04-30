import React from "react";
import { ContextProvier } from "./contexts/Context";
import { Dashbord } from "./components/Dashbord";
import { FormComponent } from "./components/FormComponent";

function App() {
  return (
    <ContextProvier>
      <Dashbord />
      <FormComponent />
    </ContextProvier>
  );
}

export default App;
