/**
 * Title: Product Details
 * Description: Single product details
 * Author: Nasir Ahmed
 * Date: 05-November-2021
 * Modified: 23-November-2021
 **/

import { Add, Remove } from "@mui/icons-material";
import axios from "axios";
import Footer from "parts/Footer/Footer";
import Newsletter from "parts/Newsletter/Newsletter";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "services/config";
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
} from "./ProductDetails.styled";

const ProductDetails = () => {
  //#region HOOKS
  const { id } = useParams();
  //#endregion

  //#region STATES
  const [product, setProduct] = useState({});
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState(" ");
  //#endregion

  //#region EFFECTS
  /**
   * fetch products from db by caterogy wise
   **/
  useEffect(() => {
    const source = axios.CancelToken.source();
    const token = source.token;

    const fetchProducts = async () => {
      try {
        const product = await http.get(`/product/find/${id}`, {
          cancelToken: token
        });
        setProduct(product.data.data);
        setIsPageLoaded(true);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProducts();

    return () => {
      source.cancel();
    };
  }, [id]);
  //#endregion

  //#region EVENTS
  const handleQuantityChange = (direction) => {
    if (direction === "inc") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
    }
  };

  const handleAddToCart = () => {
    console.log({ color, size, quantity });
  };
  //#endregion
  return (
    <Container>
      {isPageLoaded ? (
        <Wrapper>
          <ImageContainer>
            <Image src={product.img} />
          </ImageContainer>
          <InfoCotainer>
            <Title>{product.title}</Title>
            <Description>{product.desc}</Description>
            <Price>$ {product.price}</Price>
            <FilerContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color.map((item) => (
                  <FilterColor
                    key={item}
                    color={item}
                    onClick={() => setColor(item)}
                  />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size.map((item) => (
                    <FilterSizeOption key={item}>{item}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilerContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleQuantityChange("dec")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantityChange("inc")} />
              </AmountContainer>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </AddContainer>
          </InfoCotainer>
        </Wrapper>
      ) : (
        <p> Item Loading.... </p>
      )}

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetails;

/** Change Log
 * 23-Nov-2021 : add quantity change, size select, color select functionality
 **/
