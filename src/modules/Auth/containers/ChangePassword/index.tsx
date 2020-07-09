import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import React, { useCallback, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import getValidationErrors from "../../../../utils/getValidationErrors";
import { Container } from "./styles";

interface ChangePasswordPayload {
  password: string;
  passwordConfirm: string;
}

const ChangePassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { t } = useTranslation(["auth"]);

  const handleSubmit = useCallback(async (data: ChangePasswordPayload) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
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
      <h1>{t("change_password.title")}</h1>
      <span>{t("change_password.subtitle")}</span>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="password"
          icon={FiLock}
          placeholder={t(
            "change_password.form.password-input-placeholder-text",
          )}
        />
        <Input
          name="passwordConfirm"
          icon={FiLock}
          placeholder={t(
            "change_password.form.confirm-password-input-placeholder-text",
          )}
        />
        <Button variant="success">
          {t("change_password.form.confirm-button-text")}
        </Button>
      </Form>
      <p>
        <Trans i18nKey="change_password.extra-line-text">
          Did you remember the password? <Link to="/login">Login</Link>.
        </Trans>
      </p>
    </Container>
  );
};

export default ChangePassword;
