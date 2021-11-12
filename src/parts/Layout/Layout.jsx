import Announcement from "parts/Announcement/Announcement";
import Navbar from "parts/Navbar/Navbar";
import React from "react";
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
