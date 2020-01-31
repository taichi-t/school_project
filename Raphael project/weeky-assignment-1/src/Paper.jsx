import React, { PureComponent } from "react";
import Text from "./Text";
import styled from "styled-components";

const TextsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: left;
`;

export default class Paper extends PureComponent {
  render() {
    const { texts } = this.props;

    return (
      <TextsContainer>
        {texts.map((text, index) => (
          <Text text={text} key={index} />
        ))}
      </TextsContainer>
    );
  }
}
