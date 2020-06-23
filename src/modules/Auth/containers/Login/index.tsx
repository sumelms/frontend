import React from "react";
import { FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";
import { Container, Form } from "./styles";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Login</h1>
      <span>Access your account</span>

      <Form>
        <Input name="email" icon={FiMail} placeholder="Your email address" />
        <Input name="password" icon={FiLock} placeholder="Your password" />
        <Button>Login</Button>
      </Form>
      <p>
        Did you <Link to="/forgot-password">forgot your password?</Link>
      </p>
    </Container>
  );
};

export default Login;
