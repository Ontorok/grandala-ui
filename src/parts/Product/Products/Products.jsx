import { popularProducts } from "@fake-data/data";
import React, { useEffect } from "react";
import ProductService from "services/productService";
import Product from "../ProductItem/ProductItem";
import { Container } from "./Products.styled";

const Products = () => {
  useEffect(() => {
    ProductService.getProducts(1).then((res) => console.log(res));
  }, []);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
