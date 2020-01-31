import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Paper from "./Paper";

import Button from "@material-ui/core/Button";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: #23b5d3;
`;

const Box = styled.div`
  position: absolute;
  overflow: scroll;
  width: 500px;
  height: 500px;
  background-color: #f7f7ff;
  border-radius: 10px;
  -webkit-box-shadow: 1px 3px 15px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 1px 3px 15px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 1px 3px 15px 0px rgba(0, 0, 0, 0.19);
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  padding: 15px;
`;

const ButtonContainer = styled.div`
  text-align: left;
  padding-top: 16px;
`;

const TitleText = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;

const OutPutField = styled.div`
  width: 100%;
  height: auto;
  margin-top: 16px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pretexts: [],
      texts: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      Pretexts: [e.target.value]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const input = document.getElementById("input");
    this.setState({ texts: this.state.texts.concat(this.state.Pretexts) });
    input.value = "";
  };
  render() {
    return (
      <Container>
        <Box>
          <TitleText>A Message You Would Like To Do</TitleText>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              id="input"
              label="Enter Your Massage"
              fullWidth={true}
              color="primary"
              onChange={this.handleChange}
            />

            <ButtonContainer>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                value="submit"
              >
                Submit
              </Button>
            </ButtonContainer>
          </form>
          <OutPutField>
            <Paper texts={this.state.texts} />
          </OutPutField>
        </Box>
      </Container>
    );
  }
}
