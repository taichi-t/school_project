import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookContextProivider from "./contexts/BookContext";

import Home from "./Home";
import History from "./components/History";
import EachBookDetail from "./components/EachBookDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BookContextProivider>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/finished-bookList" component={History} exact />
            <Route path="/:id" component={EachBookDetail} exact />
          </Switch>
        </BookContextProivider>
      </BrowserRouter>
    </div>
  );
}

export default App;
