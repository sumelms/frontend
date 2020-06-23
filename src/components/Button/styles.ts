import styled from "styled-components";
import { shade, cssVar } from "polished";

export const Container = styled.button`
  height: 50px;
  width: 100%;

  border: 0;

  background: var(--success);
  color: var(--white);

  padding: 0 16px;
  margin-top: 16px;

  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    /* @FIXME Use --success instead hex value */
    background: ${shade(0.2, "#56C676")};
  }
`;
