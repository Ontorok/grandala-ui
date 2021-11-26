import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/actions/userAction";
import {
  Button,
  Container,
  Error,
  Form,
  Input,
  Link,
  Title,
  Wrapper
} from "./Login.Styled";

const Login = () => {
  //#region HOOKS
  const dipatch = useDispatch();
  const { isFatching, error } = useSelector(({ user }) => user);

  //#endregion

  //#region STATES
  const [reqbody, setReqbody] = useState({
    username: "",
    password: ""
  });
  //#endregion

  //#region EVENTS
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReqbody({
      ...reqbody,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(reqbody, dipatch);
  };
  //#endregion
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="username"
              name="username"
              value={reqbody.username}
              onChange={handleInputChange}
            />
            <Input
              placeholder="password"
              name="password"
              value={reqbody.password}
              onChange={handleInputChange}
            />
            <Button type="submit" disabled={isFatching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong</Error>}
            <Link>FORGOT YOUR PASSWORD?</Link>
            <Link>CREATE AN ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default Login;
