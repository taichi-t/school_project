import React from "react";
import { BookList } from "./components/BookList";
import { Bookform } from "./components/Bookform";
import Navbar from "./components/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar />
      <BookList />
      <Bookform />
    </>
  );
};

export default Home;
