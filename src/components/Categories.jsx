import React from "react";
import { categories } from "../fake-data/data";
import CategoryItem from "./CategoryItem";
import { Container } from "./styled/Categories.styled";

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
