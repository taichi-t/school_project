import React from "react";
import { ContextProvier } from "./contexts/Context";
import { Dashbord } from "./components/Dashbord";

function App() {
  return (
    <ContextProvier>
      <Dashbord />
    </ContextProvier>
  );
}

export default App;
