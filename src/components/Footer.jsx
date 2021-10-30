import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";
import {
  Center,
  Container,
  Description,
  Left,
  Logo,
  Right,
  SocialContainer,
  SocialIcon
} from "./styled/Footer.styled";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DIGI SHOP.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          laudantium totam quisquam sit exercitationem nobis asperiores
          voluptatum? Esse, id delectus?
        </Description>
        <SocialContainer>
          <SocialIcon bgColor="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon bgColor="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon bgColor="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon bgColor="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center />
      <Right />
    </Container>
  );
};

export default Footer;
