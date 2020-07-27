import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import getValidationErrors from '../../../../utils/getValidationErrors';
import { Container } from './styles';

interface ForgotPasswordPayload {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { t } = useTranslation(['auth']);

  const handleSubmit = useCallback(async (data: ForgotPasswordPayload) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required().email(),
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
      <h1>{t('forgot_password.title')}</h1>
      <span>{t('forgot_password.subtitle')}</span>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          icon={FiMail}
          placeholder={t('forgot_password.form.email-input-placeholder-text')}
        />
        <Button variant="success">
          {t('forgot_password.form.send-button-text')}
        </Button>
      </Form>
      <p>
        <Trans i18nKey="forgot_password.form.extra-line-text">
          Did you remember the password? <Link to="/login">Login</Link>.
        </Trans>
      </p>
    </Container>
  );
};

export default ForgotPassword;
