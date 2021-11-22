/**
 * Title: Products
 * Description: Products by category
 * Author: Nasir Ahmed
 * Date: 22-November-2021
 * Modified: 22-November-2021
 **/

import { popularProducts } from "@fake-data/data";
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
  useEffect(() => {
    const source = axios.CancelToken.source();
    const token = source.token;

    const fetchProducts = async () => {
      try {
        const products = await http.get("/product", {
          params: {
            category: "Polo",
            latest: true
          },
          cancelToken: token
        });
        console.log(products.data.data);
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
  //#endregion

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

/** Change Log
 * 22-Nov-2021 : Product api connect with application
 **/
