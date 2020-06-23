import styled, { css } from "styled-components";
import { shade } from "polished";

interface ButtonProps {
  variant?: string;
}

export const Container = styled.button<ButtonProps>`
  height: 50px;
  width: 100%;

  border: 0;

  ${(props) =>
    !props.variant &&
    css`
      color: var(--black);
      background-color: var(--light);
    `}

  ${(props) =>
    props.variant === "primary" &&
    css`
      color: var(--white);
      background-color: var(--primary);
    `}

  ${(props) =>
    props.variant === "success" &&
    css`
      color: var(--white);
      background-color: var(--success);
    `}

  ${(props) =>
    props.variant === "info" &&
    css`
      color: var(--white);
      background-color: var(--info);
    `}

  ${(props) =>
    props.variant === "danger" &&
    css`
      color: var(--white);
      background-color: var(--danger);
    `}

  padding: 0 16px;
  margin-top: 16px;

  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    /* @FIXME Use --success instead hex value */
    background: ${shade(0.2, "#56C676")};
  }
`;
