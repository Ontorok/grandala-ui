import { Add, Remove } from "@mui/icons-material";
import React from "react";
import Announcement from "../components/Common/Announcement";
import Footer from "../components/Common/Footer";
import Newsletter from "../components/Common/Newsletter";
import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Description,
  FilerContainer,
  Filter,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoCotainer,
  Price,
  Title,
  Wrapper
} from "../styled/ProductDetails.styled";

const ProductDetails = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/HV8jrKV/denimjumpsuit.jpg" />
        </ImageContainer>
        <InfoCotainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            quam rem temporibus ea, laboriosam sit nobis quia illum quos
            repudiandae quisquam, cum soluta pariatur asperiores impedit maiores
            delectus, deserunt voluptates aliquam et in voluptatum veniam?
            Reprehenderit ducimus similique iure facere. Repellat dolorum,
            minima consequuntur officiis dolore vero sequi veritatis magnam!
          </Description>
          <Price>$ 20</Price>
          <FilerContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilerContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoCotainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetails;
