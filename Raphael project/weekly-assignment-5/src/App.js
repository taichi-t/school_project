import React from "react";
import BookContextProivider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import { BookList } from "./components/BookList";
import { Bookform } from "./components/Bookform";

function App() {
  return (
    <div className="App">
      <BookContextProivider>
        <Navbar />
        <BookList />
        <Bookform />
      </BookContextProivider>
    </div>
  );
}

export default App;
