/**
 * Title: Products
 * Description: Products by category
 * Author: Nasir Ahmed
 * Date: 22-November-2021
 * Modified: 22-November-2021
 **/

import axios from "axios";
import React, { useEffect, useState } from "react";
import { http } from "services/config";
import Product from "../ProductItem/ProductItem";
import { Container } from "./Products.styled";

const Products = (props) => {
  //#region PROPS
  const { category, filters, sort } = props;
  //#endregion

  //#region HOOKS

  //#endregion

  //#region STATES
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  //#endregion

  //#region UDFs

  //#endregion

  //#region EVENTS

  //#endregion

  //#region EFFECTS
  /**
   * fetch products from db by caterogy wise
   **/
  useEffect(() => {
    const source = axios.CancelToken.source();
    const token = source.token;

    const fetchProducts = async () => {
      try {
        const products = await http.get(
          category ? `/product?category=${category}` : "/product",
          {
            cancelToken: token
          }
        );
        setProducts(products.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();

    return () => {
      source.cancel();
    };
  }, [category]);

  /**
   * set filtered products by filters
   **/
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  /**
   * sorted poruducts
   **/
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
    if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  //#endregion

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;

/** Change Log
 * 22-Nov-2021 : Product api connect with application
 **/
