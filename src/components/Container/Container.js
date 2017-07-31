import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Container = styled(View)`
  max-width: 100%;
  width: calc(94.2935vw + 10.8628px);
  margin-left: auto;
  margin-right: auto;

  @media(min-width: 1200px){
    width: 1140px;
  }
`;

export default Container;
