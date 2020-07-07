import React, { useCallback, useRef } from "react";
import { FiLock } from "react-icons/fi";
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
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password"), undefined])
          .required("Password confirm is required"),
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
      <h1>Change your password</h1>
      <span>Enter your new password</span>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="password" icon={FiLock} placeholder="Your password" />
        <Input
          name="passwordConfirm"
          icon={FiLock}
          placeholder="Repeat your password"
        />
        <Button variant="success">Confirm</Button>
      </Form>
      <p>
        Did you remember the password? <Link to="/login">Login</Link>.
      </p>
    </Container>
  );
};

export default Login;
