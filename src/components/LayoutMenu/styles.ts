import styled from "styled-components";

export const Container = styled.div`
  grid-area: LS;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--black);
  padding: 11px 0;

  max-height: 100vh;
  /* overflow-y: scroll; */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Brand = styled.div`
  height: 80px;
  width: 100%;

  background-color: var(--primary);
  margin-top: -11px;

  > img {
    height: 80px;
    width: auto;
  }
`;
