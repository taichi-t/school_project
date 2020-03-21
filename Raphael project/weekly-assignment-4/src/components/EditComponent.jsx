import React, { Component } from "react";

export default class EditComponent extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
