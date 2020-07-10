import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import getValidationErrors from "../../../../utils/getValidationErrors";
import { Container } from "./styles";

interface LoginPayload {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { t } = useTranslation(["auth"]);

  const handleSubmit = useCallback(async (data: LoginPayload) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required().email(),
        password: Yup.string().required(),
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
      <h1>{t("login.title")}</h1>
      <span>{t("login.subtitle")}</span>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          icon={FiMail}
          placeholder={t("login.form.email-input-placeholder-text")}
        />
        <Input
          name="password"
          icon={FiLock}
          placeholder={t("login.form.password-input-placeholder-text")}
        />
        <Button variant="success">{t("login.form.login-button-text")}</Button>
      </Form>
      <p>
        <Trans i18nKey="login.form.extra-line-text">
          <Link to="/forgot-password">Forgot your password?</Link> Don`t have an
          account? <Link to="/register">Sign up</Link>
        </Trans>
      </p>
    </Container>
  );
};

export default Login;
