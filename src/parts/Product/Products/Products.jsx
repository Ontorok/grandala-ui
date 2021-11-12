import { popularProducts } from "@fake-data/data";
import React, { useEffect } from "react";
import Product from "../ProductItem/ProductItem";
import { Container } from "./Products.styled";

const Products = () => {
  useEffect(() => {
    const abortControler = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      signal: abortControler.signal
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    return () => {
      abortControler.abort();
    };
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
