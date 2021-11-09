import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined
} from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Circle,
  Container,
  Icon,
  Image,
  Info
} from "../../styled/Home/Product.styled";

const Product = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon onClick={() => navigate("/product-detail")}>
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
