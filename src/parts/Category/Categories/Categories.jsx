import { categories } from "@fake-data/data";
import React from "react";
import CategoryItem from "../CategoryItems/CategoryItem";
import { Container } from "./Categories.styled";

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
