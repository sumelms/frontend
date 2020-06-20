import React from "react";

import { Container, Header } from "./styles";

import Layout from "../../components/Layout";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <div>
            <h1>Dashboard</h1>
            <span>Welcome back, Ricardo!</span>
          </div>
        </Header>
      </Container>
    </Layout>
  );
};

export default Dashboard;
