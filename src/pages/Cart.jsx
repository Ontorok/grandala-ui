import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Common/Announcement";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import { devices } from "../mediaQuery/devices";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  @media ${devices.mobileM} {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.btnType === "filled" && "none"};
  background-color: ${(props) =>
    props.btnType === "filled" ? "black" : "transparent"};
  color: ${(props) => props.btnType === "filled" && "white"};
`;

const TopTexts = styled.div`
  @media ${devices.mobileM} {
    display: none;
  }
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.mobileM} {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.mobileM} {
    flex-direction: column;
  }
`;

const Hr = styled.hr`
  background-color: #e7dede;
  border: none;
  height: 1px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;

  @media ${devices.mobileM} {
    width: 150px;
  }
`;

const Detail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
  margin: 5px;
  width: 70px;
  height: 30px;
  border: 0.5px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  @media ${devices.mobileM} {
    margin: 5px 15px;
  }
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;

  @media ${devices.mobileM} {
    margin-bottom: 2px;
  }
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  padding: 10px;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your wishlist (0)</TopText>
          </TopTexts>
          <TopButton btnType="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
                <Detail>
                  <ProductName>
                    <b>Product: </b> Apext Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 123456789
                  </ProductId>
                  <ProductColor bgColor="#A78D74" />
                  <ProductSize>
                    <b>Size: </b> 37.5
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                <Detail>
                  <ProductName>
                    <b>Product: </b> Apext Shoes
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 123456789
                  </ProductId>
                  <ProductColor bgColor="#7A7E7A" />
                  <ProductSize>
                    <b>Size: </b> 37.5
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 40</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 10.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 5.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 85</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
