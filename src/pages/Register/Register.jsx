import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
  Agreement,
  Button,
  Container,
  Form,
  Input,
  Title,
  Wrapper
} from "./Register.styled";

const Register = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="first name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default Register;
