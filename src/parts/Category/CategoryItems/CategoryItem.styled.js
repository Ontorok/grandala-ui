import { devices } from "mediaQuery/devices";
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media ${devices.mobileM} {
    height: 20vh;
  }
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`;
