import { devices } from "mediaQuery/devices";
import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;

  @media ${devices.mobileM} {
    padding: 10px;
  }
  @media ${devices.tablet} {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.btnType === "filled" && "none"};
  background-color: ${(props) =>
    props.btnType === "filled" ? "black" : "transparent"};
  color: ${(props) => props.btnType === "filled" && "white"};
`;

export const TopTexts = styled.div`
  @media ${devices.mobileM} {
    display: none;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.mobileM} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.mobileM} {
    flex-direction: column;
  }
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const Hr = styled.hr`
  background-color: #e7dede;
  border: none;
  height: 1px;
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;

  @media ${devices.mobileM} {
    width: 150px;
  }
  @media ${devices.tablet} {
    width: 150px;
  }
`;

export const Detail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.span`
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
  @media ${devices.tablet} {
    margin: 5px 25px;
    width: 80px;
    height: 40px;
  }
`;

export const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;

  @media ${devices.mobileM} {
    margin-bottom: 2px;
  }
  @media ${devices.tablet} {
    margin-bottom: 2px;
  }
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
`;
