import React from "react";
import styled from "styled-components";
import Announcement from "../components/Common/Announcement";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import Newsletter from "../components/Common/Newsletter";
import {
  Description,
  Image,
  ImageContainer,
  InfoCotainer,
  Price,
  Title,
  Wrapper
} from "../styled/ProductDetails.styled";

const Container = styled.div``;

const ProductDetails = () => {
  return (
    <Container>
      <Navbar />
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
        </InfoCotainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetails;
