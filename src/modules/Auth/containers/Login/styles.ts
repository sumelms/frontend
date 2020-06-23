import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;

  height: 100%;
  width: 100%;

  h1 {
    font-family: Roboto;
    font-weight: 500;
    font-size: 30px;

    line-height: 35px;

    margin-bottom: 8px;

    color: var(--black);
  }

  span {
    font-family: Roboto;
    font-weight: 300;
    font-size: 14px;

    line-height: 16px;

    color: var(--grey);
  }

  p {
    font-family: Roboto;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;

    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
`;

export const Form = styled.form`
  padding: 20px;
`;
