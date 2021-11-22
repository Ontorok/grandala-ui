/**
 * Title: Product List
 * Description: All Products
 * Author: Nasir Ahmed
 * Date: 01-November-2021
 * Modified: 22-November-2021
 **/

import Footer from "parts/Footer/Footer";
import Newsletter from "parts/Newsletter/Newsletter";
import Products from "parts/Product/Products/Products";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title
} from "./ProductList.styled";

const ProductList = () => {
  //#region HOOKS
  const location = useLocation();
  //#endregion

  //#region STATES
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  //#endregion

  //#region UDFs

  //#endregion

  //#region EVENTS

  const handleFiltersChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSortChange = (e) => {
    const { value } = e.target;
    setSort(value);
  };

  //#endregion

  //#region EFFECTS

  //#endregion

  const category = location.pathname.split("/")[2];
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select
            name="color"
            defaultValue="Color"
            onChange={handleFiltersChange}
          >
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select
            name="size"
            defaultValue="Size"
            onChange={handleFiltersChange}
          >
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select defaultValue={"Newest"} onChange={handleSortChange}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="descs">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;

/** Change Log
 * 22-Nov-2021 : Functionality added on filters and sort
 **/
