import { devices } from "mediaQuery/devices";
import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background-color: rgba(231, 224, 207, 0.2);

  @media ${devices.mobileM} {
    height: 50px;
  }

  @media ${devices.tablet} {
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.mobileM} {
    padding: 10px 0;
  }

  @media ${devices.tablet} {
    padding: 10px 0;
  }
`;
/* **************************************************************
 *                    Left Side of Navbar (Start)
 ************************************************************** */

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
`;

export const Input = styled.input`
  border: none;
  background-color: inherit;

  @media ${devices.mobileM} {
    width: 50px;
  }

  @media ${devices.tablet} {
    width: 50px;
  }
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  @media ${devices.mobileM} {
    display: none;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;
/* **************************************************************
 *                    Left Side of Navbar (End)
 ************************************************************** */

/* **************************************************************
 *                    Center Side of Navbar (Start)
 ************************************************************** */
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;

  @media ${devices.mobileM} {
    font-size: 15px;
  }

  @media ${devices.tablet} {
    font-size: 15px;
  }
`;
/* **************************************************************
 *                    Center Side of Navbar (End)
 ************************************************************** */

/* **************************************************************
 *                    Right Side of Navbar (Start)
 ************************************************************** */
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${devices.mobileM} {
    justify-content: center;
    flex: 2;
  }

  @media ${devices.tablet} {
    justify-content: center;
    flex: 2;
  }
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  @media ${devices.mobileM} {
    font-size: 12px;
    margin-left: 10px;
  }

  @media ${devices.tablet} {
    font-size: 12px;
    margin-left: 10px;
  }
`;
/* **************************************************************
 *                    Right Side of Navbar (End)
 ************************************************************** */
