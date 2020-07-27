import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;

  > img {
    height: 60px;
    width: auto;

    margin-bottom: 24px;
  }
`;

export const Card = styled.div`
  border: 1px solid var(--light-grey);
  padding: 40px 20px;

  background-color: var(--white);

  box-shadow: 0px 4px 4px rgba(229, 229, 229, 0.6);

  min-width: 388px;
`;
