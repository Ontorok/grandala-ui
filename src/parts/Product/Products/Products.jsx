import { popularProducts } from "@fake-data/data";
import React from "react";
import Product from "../ProductItem/ProductItem";
import { Container } from "./Products.styled";

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
