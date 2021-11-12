import React from "react";
import Announcement from "../Announcement/Announcement";
import Navbar from "../Navbar/Navbar";
import { Container } from "./Layout.styled";

const Layout = (props) => {
  const { children } = props;
  return (
    <Container>
      <Announcement />
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
