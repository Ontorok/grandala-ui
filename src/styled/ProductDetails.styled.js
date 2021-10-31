import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

export const InfoCotainer = styled.div`
  flex: 1;
  padding: 0 50px;
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

export const FilerContainer = styled.div`
  display:flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%
`;
export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
export const Amount = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
export const Button = styled.div`
  padding: 15px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #f8f4f4
  }
`;
