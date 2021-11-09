import styled from "styled-components";
import { devices } from "../../mediaQuery/devices";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  @media ${devices.mobileM} {
    padding: 0;
    flex-direction: column;
  }
`;
