import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

import { withSnackbar } from "notistack";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: #23b5d3;
`;

const Box = styled.div`
  position: absolute;

  width: 500px;
  height: auto;
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

const Item = styled.div``;

const ButtonContainer = styled.div`
  text-align: left;
  padding-top: 16px;
`;

const TitleText = styled.h1`
  font-size: 25px;
  font-weight: bold;
  white-space: nowrap;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      open: false,
      setOpen: true
    };
  }

  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);

  handleCloseIconButton = e => {
    e.preventDefault();
    this.setState({
      open: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const input = document.getElementById("input");
    const message = input.value;
    if (message === "") {
      this.setState({ open: true });
      setTimeout(() => {
        this.setState({ open: false });
      }, 2000);
      return;
    } else {
      this.props.enqueueSnackbar(message);
    }
    input.value = "";
  };
  render() {
    return (
      <Container>
        <Box>
          <Item>
            <TitleText>A Message You Would Like To Do</TitleText>
            <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
              <TextField
                id="input"
                label="Enter Your Massage"
                fullWidth={true}
                color="primary"
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
          </Item>
        </Box>
        <Collapse in={this.state.open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={this.handleCloseIconButton}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Please enter a message
          </Alert>
        </Collapse>
      </Container>
    );
  }
}

export default withSnackbar(App);
