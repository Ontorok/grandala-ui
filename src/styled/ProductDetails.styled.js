import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

export const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

export const InfoCotainer = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-weight: 200;
`;
export const Description = styled.p`
  margin: 20px 0;
  letter-spacing: 0.5px;
  text-align: justify;
`;
export const Price = styled.span`
  font-weight: 100px;
  font-size: 40px;
`;
