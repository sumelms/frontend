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

interface RegisterPayload {
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { t } = useTranslation(["auth"]);

  const handleSubmit = useCallback(async (data: RegisterPayload) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required().email(),
        password: Yup.string().required(),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password"), undefined])
          .required(),
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
      <h1>{t("register.title")}</h1>
      <span>{t("register.subtitle")}</span>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          icon={FiMail}
          placeholder={t("register.form.email-input-placeholder-text")}
        />
        <Input
          name="password"
          icon={FiLock}
          placeholder={t("register.form.password-input-placeholder-text")}
        />
        <Input
          name="passwordConfirm"
          icon={FiLock}
          placeholder={t(
            "register.form.confirm-password-input-placeholder-text",
          )}
        />
        <Button variant="success">
          {t("register.form.register-button-text")}
        </Button>
      </Form>
      <p>
        <Trans i18nKey="register.extra-line-text">
          or <Link to="/login">login</Link> if you already have one.
        </Trans>
      </p>
    </Container>
  );
};

export default Register;
