import React from "react";
import { Text, View } from "react-native";
import Container from "../Container/Container";
import Row from "../Row/Row";
import styled from "styled-components";

const SiteTitle = styled(Text)`
  font-size: 2rem;
  padding-top: 1em;
  padding-bottom: 1em;
  color: #444;
`;

const HeaderWrap = styled(View)`
  background: rgb(220, 245, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () =>
  <HeaderWrap>
    <SiteTitle accessibilityRole="heading" aria-level="1">
      Celebrity Hospital
    </SiteTitle>
  </HeaderWrap>;

export default Header;
