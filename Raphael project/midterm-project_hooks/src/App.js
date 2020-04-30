import React from "react";
import { ContextProvier } from "./contexts/Context";
import { Dashbord } from "./components/Dashbord";
import { FormComponent } from "./components/FormComponent";

function App() {
  return (
    <ContextProvier>
      <div style={{ width: "30%", margin: "0 auto" }}>
        <Dashbord />
        <FormComponent />
      </div>
    </ContextProvier>
  );
}

export default App;
