import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from "@mui/icons-material";
import React from "react";
import { Container, Image } from "./styled/CategoryItem.styled";
import { Circle, Icon, Info } from "./styled/Product.styled";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
