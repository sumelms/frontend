import React from "react";
import { FiMail, FiLock } from "react-icons/fi";

import { Container } from "./styles";

import Input from "../../../../components/Input";

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Login</h1>
      <span>Something to login</span>

      <form>
        <Input name="email" icon={FiMail} placeholder="Your email address" />
        <Input name="password" icon={FiLock} placeholder="Your password" />
      </form>
    </Container>
  );
};

export default Login;
