import { shade } from "polished";
import styled, { css } from "styled-components";

import colors from "../../styles/colors";

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
      color: ${colors.black};
      background-color: ${colors.light};
    `}

  ${(props) =>
    props.variant === "primary" &&
    css`
      color: ${colors.white};
      background-color: ${colors.primary};
    `}

  ${(props) =>
    props.variant === "success" &&
    css`
      color: ${colors.white};
      background-color: ${colors.success};
    `}

  ${(props) =>
    props.variant === "info" &&
    css`
      color: ${colors.white};
      background-color: ${colors.info};
    `}

  ${(props) =>
    props.variant === "danger" &&
    css`
      color: ${colors.white};
      background-color: ${colors.danger};
    `}

  padding: 0 16px;
  margin-top: 16px;

  font-weight: 500;
  text-transform: uppercase;

  transition: background-color 0.2s;

  &:hover {
    /* @FIXME Use --success instead hex value */
    background: ${shade(0.2, colors.success)};
  }
`;
