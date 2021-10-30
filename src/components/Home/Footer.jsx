import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from "@mui/icons-material";
import React from "react";
import {
  Center,
  ContactItem,
  ContactItemDesc,
  Container,
  Description,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title
} from "../../styled/Home/Footer.styled";

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
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Acount</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Tearms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          <ContactItemDesc>1642, Apon Nibas Bylane</ContactItemDesc>
        </ContactItem>
        <ContactItem>
          <Phone />
          <ContactItemDesc>+880 XXXX XXX XXX</ContactItemDesc>
        </ContactItem>
        <ContactItem>
          <MailOutline />
          <ContactItemDesc>nasir@mail.com</ContactItemDesc>
        </ContactItem>
        <Payment src="https://i.ibb.co/2j4zR8W/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
