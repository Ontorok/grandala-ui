import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
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
} from './styled/Navbar.styled';

const Navbar = () => (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{ color: 'gray', fontSize: 16 }} />
                </SearchContainer>
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
