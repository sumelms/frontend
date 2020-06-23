import React, { useCallback, useRef } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { Container } from "./styles";

import getValidationErrors from "../../../../utils/getValidationErrors";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Type a valid email"),
        password: Yup.string().required("Password is required"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <h1>Login</h1>
      <span>Access your account</span>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" icon={FiMail} placeholder="Your email address" />
        <Input name="password" icon={FiLock} placeholder="Your password" />
        <Button variant="success">Login</Button>
      </Form>
      <p>
        Did you <Link to="/forgot-password">forgot your password?</Link>
      </p>
    </Container>
  );
};

export default Login;
