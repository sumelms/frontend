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
    className="py-2 px-0 w-full uppercase font-medium border-0"
    variant={variant}
    disabled={disabled}
    data-testid="button-container"
    {...rest}
  >
    {children}
  </Container>
);

export default Button;
