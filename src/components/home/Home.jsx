import React from "react";
import { Container, Layout } from "./HomeStyled";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import Aside from "../aside/Aside";

const Home = () => {
  return (
    <Container>
      <Layout>
        <Sidebar />
        <Main />
        <Aside />
      </Layout>
    </Container>
  );
};

export default Home;
