import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  ...rest
}: ButtonProps) => (
  <Container variant={variant} data-testid="button-container" {...rest}>
    {children}
  </Container>
);

export default Button;
