import React, { Fragment } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper
} from "./Login.Styled";

const Login = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>FORGOT YOUR PASSWORD?</Link>
            <Link>CREATE AN ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Login;
