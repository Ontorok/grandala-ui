import { Send } from "@mui/icons-material";
import React from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title
} from "./Newsletter.styled";

const Newsletter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
