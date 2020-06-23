import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--ligh-grey);
  padding: 13px;
  width: 100%;

  color: var(--black);
  border: 1px solid var(--grey);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--primary);
      border-color: var(--primary);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--primary);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--black);

    &::placeholder {
      color: var(--grey);
    }
  }

  svg {
    margin-right: 16px;
    color: var(--grey);
  }
`;
