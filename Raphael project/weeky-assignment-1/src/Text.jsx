import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const PapaerContainer = styled.div`
  width: 30%;
  padding-top: 10px;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  font-size: 16px;
`;

export default class Text extends Component {
  render() {
    console.log(this.props);
    return (
      <PapaerContainer>
        <Paper
          elevation={3}
          style={({ height: 100 }, { backgroundColor: "#6be7ff" })}
        >
          {this.props.text}
        </Paper>
      </PapaerContainer>
    );
  }
}
