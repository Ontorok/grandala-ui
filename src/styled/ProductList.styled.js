import styled from "styled-components";
import { devices } from "../mediaQuery/devices";

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;

  @media ${devices.mobileM} {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
  }
  @media ${devices.tablet} {
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  @media ${devices.mobileM} {
    margin-right: 0;
  }
  @media ${devices.tablet} {
    margin-right: 0;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  @media ${devices.mobileM} {
    margin: 10px 0px;
  }
  @media ${devices.tablet} {
    margin: 10px 0px;
  }
`;

export const Option = styled.option``;
