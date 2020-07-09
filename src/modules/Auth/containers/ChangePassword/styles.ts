import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;

  height: 100%;
  width: 100%;

  h1 {
    font-weight: 500;
    font-size: 30px;

    line-height: 35px;

    margin-bottom: 8px;

    color: var(--black);
  }

  span {
    font-weight: 300;
    font-size: 14px;

    line-height: 16px;

    color: var(--grey);
  }

  p {
    font-weight: 300;
    font-size: 12px;

    a {
      color: var(--primary);
      text-decoration: none;
      font-size: 12px;
    }
  }

  > form {
    padding: 20px;
  }
`;
