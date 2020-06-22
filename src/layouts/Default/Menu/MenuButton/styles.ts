import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 54px;
  height: 54px;

  margin: 8px 0;

  color: var(--light-grey);
  background-color: transparent;

  position: relative;
  cursor: pointer;

  border-radius: 50%;

  transition: border-radius 0.2s, background-color 0.2s;

  > svg {
    width: 24px;
    height: 24px;
  }

  &.active,
  &:hover {
    background-color: var(--white);

    border-radius: 16px;

    > svg {
      color: var(--primary);
    }
  }
`;
