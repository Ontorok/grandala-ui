import React from "react";
import { popularProducts } from "../fake-data/data";
import Product from "./Product";
import { Container } from "./styled/Products.styled";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
