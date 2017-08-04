import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const SiteTitle = styled.Text`
  font-size: 2.3rem;
  color: #444;
  margin-top: .5rem;
`;

const HeaderWrap = styled.View`
  padding: 30px;
  background: rgb(220, 245, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = () =>
  <HeaderWrap>
    <Image
      source="/celebrity-hospital.jpg"
      style={{ width: 120, height: 120 }}
    />
    <SiteTitle accessibilityRole="heading" aria-level="1">
      Celebrity Hospital
    </SiteTitle>
  </HeaderWrap>;

export default Header;
