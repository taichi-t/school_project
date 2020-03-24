import React, { Component } from "react";
import axios from "axios";
import MemeComponent from "./MemeComponent";

const MEME_END_POINT = "https://api.imgflip.com/get_memes";

export default class App extends Component {
  state = {
    fetchData: null,
    randomMeme: null
  };

  componentDidMount() {
    axios
      .get(MEME_END_POINT)
      .then(results => {
        const data = results.data.data.memes;
        this.setState({ fetchData: data });
      })
      .catch(err => {
        console.log("fetching data failed", err);
      });
  }

  handleClick = e => {
    e.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.fetchData.length);
    const randomMeme = this.state.fetchData[randomNum];

    this.setState({ randomMeme: randomMeme });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Generate</button>

        <MemeComponent item={this.state.randomMeme} />
      </div>
    );
  }
}
