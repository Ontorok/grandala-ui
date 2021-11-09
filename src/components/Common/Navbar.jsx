import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper
} from "../../styled/Common/Navbar.styled";

const Navbar = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate("/")}>DIGI SHOP</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => navigate("/register")}>REGISTER</MenuItem>
          <MenuItem onClick={() => navigate("/login")}>LOG IN</MenuItem>
          <MenuItem onClick={() => navigate("/cart")}>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
