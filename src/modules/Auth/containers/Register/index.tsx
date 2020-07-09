import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import getValidationErrors from '../../../../utils/getValidationErrors';
import { Container } from './styles';

interface RegisterPayload {
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: RegisterPayload) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required')
          .email('Type a valid email'),
        password: Yup.string().required('Password is required'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password'), undefined])
          .required('Password confirm is required'),
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
      <h1>Register</h1>
      <span>Create your account</span>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" icon={FiMail} placeholder="Your email address" />
        <Input name="password" icon={FiLock} placeholder="Your password" />
        <Input
          name="passwordConfirm"
          icon={FiLock}
          placeholder="Repeat your password"
        />
        <Button variant="success">Register</Button>
      </Form>
      <p>
        or <Link to="/login">login</Link> if you already have one.
      </p>
    </Container>
  );
};

export default Register;
