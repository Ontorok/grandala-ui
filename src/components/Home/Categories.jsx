import React from "react";
import { categories } from "../../fake-data/data";
import { Container } from "../../styled/Home/Categories.styled";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
