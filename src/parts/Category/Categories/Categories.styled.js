import { devices } from "mediaQuery/devices";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  @media ${devices.mobileM} {
    padding: 0;
    flex-direction: column;
  }
  @media ${devices.tablet} {
    padding: 0;
    flex-direction: column;
  }
`;
