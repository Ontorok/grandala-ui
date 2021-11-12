import { devices } from "mediaQuery/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: rgba(231, 224, 207, 0.2);

  @media ${devices.mobileM} {
    flex-direction: column;
  }

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1``;

export const Description = styled.p`
  margin: 20px 0;
  text-align: justify;
  word-break: keep-all;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #${(props) => props.bgColor};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;

  @media ${devices.mobileM} {
    display: none;
  }
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;

  @media ${devices.mobileM} {
    background-color: rgba(228, 240, 192, 0.2);
  }

  @media ${devices.tablet} {
    background-color: rgba(228, 240, 192, 0.2);
  }
`;

export const ContactItem = styled.div`
  argin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactItemDesc = styled.span`
  margin-left: 10px;
`;

export const Payment = styled.img`
  margin-top: 10px;
`;
