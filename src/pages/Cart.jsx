import React from "react";
import styled from "styled-components";
import Announcement from "../components/Common/Announcement";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

const Container = styled.div``;

const Wrapper = styled.div``;

const Title = styled.h1``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
