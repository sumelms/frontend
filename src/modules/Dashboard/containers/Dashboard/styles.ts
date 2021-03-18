import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 10px 0;
  padding: 6px 0;

  h1 {
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
    font-weight: 500;

    color: var(--grey);
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 10px 0;
  padding: 6px 0;

  h2 {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 8px;
  }

  ul {
    margin: 10px 0 10px 15px;
    font-weight: 500;
    font-size: 14px;
    color: var(--grey);
  }

  li {
    font-size: 12px;
  }
`;
