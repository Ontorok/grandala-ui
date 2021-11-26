import { Add, Remove } from "@mui/icons-material";
import logo from "assets/logo.jpg";
import Footer from "parts/Footer/Footer";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "services/config";
import {
  Bottom,
  Button,
  Container,
  Detail,
  Hr,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductId,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper
} from "./Cart.styled";

const Cart = () => {
  //#region HOOKS
  const cart = useSelector(({ cart }) => cart);
  const navigate = useNavigate();
  //#endregion

  //#region STATES
  const [stripeToken, setStripeToken] = useState(null);
  //#endregion

  //#region LOCAL VARIABLES
  const estimatedShippingCost = 20;
  const discount = 5;
  const KEY = process.env.REACT_APP_STRIPE;
  //#endregion

  //#region EVENTS
  const onToken = (token) => {
    setStripeToken(token);
  };
  //#endregion Bearer

  //#region EFFECTS
  React.useEffect(() => {
    const makePayment = async () => {
      const data = {
        tokenId: stripeToken.id,
        amount: cart.total * 100
      };
      try {
        const res = await userRequest.post("/checkout/payment", data);
        navigate("/success", {
          state: {
            stripeData: res.data,
            productData: cart
          }
        });
      } catch (err) {
        console.log(err.message);
      }
    };

    stripeToken && makePayment();
  }, [stripeToken, cart.total, navigate, cart]);
  //#endregion

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({cart.quantity})</TopText>
            <TopText>Your wishlist (0)</TopText>
          </TopTexts>
          <TopButton btnType="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, index) => (
              <React.Fragment key={product._id}>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Detail>
                      <ProductName>
                        <b>Product: </b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID: </b> {product._id}
                      </ProductId>
                      <ProductColor bgColor={product.color} />
                      <ProductSize>
                        <b>Size: </b> {product.size}
                      </ProductSize>
                    </Detail>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add />
                    </ProductAmountContainer>
                    <ProductPrice>
                      $ {product.quantity * product.price}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              </React.Fragment>
            ))}
            <Hr />
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ {estimatedShippingCost}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ - {discount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                $ {cart.total + estimatedShippingCost - discount}
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              image={logo}
              billingAddress
              shippingAddress
              description={`Your cart total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
