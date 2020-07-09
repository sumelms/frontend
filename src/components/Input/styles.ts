import styled, { css } from "styled-components";

import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  
  background: var(--white);
  color: var(--black);

  font-weight: 300;

  border: 1px solid var(--grey);

  padding: 16px;
  align-items: center;

  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--danger);
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--primary);
      border-color: var(--black);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--success);
    `}

  input {
    flex: 1;

    background: transparent;
    color: var(--black);
    
    border: 0;

    font-weight: 300;

    &::placeholder {
      color: var(--light-grey);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: 0;
  }

  > span {
    background: var(--danger);
    color: var(--white);

    &::before {
      border-color: var(--danger) transparent;
    }
  }
`;
