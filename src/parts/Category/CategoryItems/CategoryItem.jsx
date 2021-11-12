import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Image, Info, Title } from "./CategoryItem.styled";

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => navigate("/products")}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
