import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BookContextProivider from "./contexts/BookContext";

import Home from "./Home";
import History from "./components/History";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BookContextProivider>
          <Route path="/" component={Home} exact />
          <Route path="/finished-bookList" component={History} exact />
        </BookContextProivider>
      </BrowserRouter>
    </div>
  );
}

export default App;
