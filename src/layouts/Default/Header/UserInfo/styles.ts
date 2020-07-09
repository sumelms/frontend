import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  text-align: right;
  margin-right: 8px;

  > strong {
    display: block;
    font-size: 14px;

    color: var(--black);
  }

  > span {
    font-size: 12px;
    font-weight: 500;

    color: var(--grey);
  }
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;

  border-radius: 50%;
  background-color: var(--grey);
`;
