import React, { Component } from "react";
import styled from "styled-components";

export default class MemeComponent extends Component {
  state = {
    textBelow: "",
    textAbove: "",
    colorA: "white",
    colorB: "white",
    fontSizeA: 36,
    fontSizeB: 36
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const item = this.props.item && this.props.item;

    return (
      <>
        <form action="submit">
          <input
            id="textAbove"
            onChange={this.handleChange}
            placeholder="Enter the above text for the above"
          />
          <select
            name="color"
            id="colorA"
            datatype="color"
            onChange={this.handleChange}
          >
            <option value="white">white</option>
            <option value="black">black</option>
          </select>
          <select
            name="fontSizeA"
            id="fontSizeA"
            datatype="font-size"
            onChange={this.handleChange}
          >
            <option value="36">32px</option>
            <option value="40">40px</option>
            <option value="48">48px</option>
            <option value="56">56px</option>
            <option value="64">64px</option>
          </select>
        </form>

        <form action="submit">
          <input
            id="textBelow"
            onChange={this.handleChange}
            placeholder="Enter the above text for the below"
          />
          <select
            name="colorB"
            id="colorB"
            datatype="color"
            onChange={this.handleChange}
          >
            <option value="white">white</option>
            <option value="black">black</option>
          </select>
          <select
            name="fontSizeB"
            id="fontSizeB"
            datatype="font-size"
            onChange={this.handleChange}
          >
            <option value="36">32px</option>
            <option value="40">40px</option>
            <option value="48">48px</option>
            <option value="56">56px</option>
            <option value="64">64px</option>
          </select>
        </form>
        <Container>
          <Img src={item && item.url} alt={item && item.name} />
          <TextAbove color={this.state.colorA} fontSize={this.state.fontSizeA}>
            {this.state.textAbove}
          </TextAbove>
          <TextBelow color={this.state.colorB} fontSize={this.state.fontSizeB}>
            {this.state.textBelow}
          </TextBelow>
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  font-family: "Anton", sans-serif;
  position: relative;
  object-fit: contain;
  margin: 0 auto;
  max-width: 600px;
  max-height: 600px;
  text-align: center;
`;

const TextAbove = styled.p`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,
    -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,
    -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,
    -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;
`;
const TextBelow = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5,
    -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5,
    -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,
    -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;
