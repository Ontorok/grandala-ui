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
import { useParams } from "react-router-dom";
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
  const params = useParams();
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

  const { category } = params;
  return (
    <Container>
      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select
            name="color"
            defaultValue="Color"
            onChange={handleFiltersChange}
          >
            <Option disabled>Color</Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="green">Green</Option>
            <Option value="ash">Ash</Option>
          </Select>
          <Select
            name="size"
            defaultValue="Size"
            onChange={handleFiltersChange}
          >
            <Option disabled>Size</Option>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
            <Option value="XXL">XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select defaultValue={"Newest"} onChange={handleSortChange}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
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
