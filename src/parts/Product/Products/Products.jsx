import { popularProducts } from "@fake-data/data";
import axios from "axios";
import React, { useEffect } from "react";
import { ProductService } from "services";
import Product from "../ProductItem/ProductItem";
import { Container } from "./Products.styled";

const Products = () => {
  useEffect(() => {
    const source = axios.CancelToken.source();
    const token = source.token;

    const fetchUser = async () => {
      try {
        const data = await ProductService.getProducts(token);
        console.log(data);
      } catch (error) {
        console.log(error.message, error.response.status);
      }
    };

    fetchUser();

    return () => {
      source.cancel();
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
