import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components";

const SiteTitle = styled(Text)`
  font-size: 2.3rem;
  color: #444;
  margin-top: .8rem;
`;

const HeaderWrap = styled(View)`
  background: rgb(220, 245, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

const Header = () =>
  <HeaderWrap>
    <Image
      source={{
        uri: "/celebrity-hospital.jpg",
        width: "120px",
        height: "120px"
      }}
    />
    <SiteTitle accessibilityRole="heading" aria-level="1">
      Celebrity Hospital
    </SiteTitle>
  </HeaderWrap>;

export default Header;
