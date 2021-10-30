import React from "react";
import { popularProducts } from "../../fake-data/data";
import { Container } from "../../styled/Home/Products.styled";
import Product from "./Product";

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
