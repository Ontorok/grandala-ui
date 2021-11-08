import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  Wrapper
} from "../../styled/Common/Navbar.styled";

const Navbar = () => (
  <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        {/* <SearchContainer> */}
        <Input imgurl="https://i.ibb.co/jh75D6m/search-Icon.png" />
        {/* <Search style={{ color: "gray", fontSize: 16 }} /> */}
        {/* </SearchContainer> */}
      </Left>
      <Center>
        <Logo>DIGI SHOP.</Logo>
      </Center>
      <Right>
        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
);

export default Navbar;
