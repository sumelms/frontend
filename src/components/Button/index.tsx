import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'info' | 'danger';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,

  disabled = false,
  ...rest
}: ButtonProps) => (
  <Container
    variant={variant}
    disabled={disabled}
    data-testid="button-container"
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
