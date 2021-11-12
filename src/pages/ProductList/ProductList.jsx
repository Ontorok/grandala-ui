import React from "react";
import Footer from "../../parts/Footer/Footer";
import Newsletter from "../../parts/Newsletter/Newsletter";
import Products from "../../parts/Product/Products/Products";
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
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue={"Color"}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select defaultValue={"Size"}>
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
          <Select defaultValue={"Newest"}>
            <Option disabled>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
