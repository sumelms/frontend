import { FiBell, FiLogOut, FiPlayCircle } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: TN;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 17px;
  background-color: var(--white);

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 20px;
  }
`;

export const Separator = styled.div`
  height: 48px;
  width: 1px;

  background-color: var(--grey);
  opacity: 0.2;

  margin: 0 20px;
`;

export const ResumeIcon = styled(FiPlayCircle)`
  width: 24px;
  height: 24px;

  color: var(--dark-grey);

  &.active,
  &:hover {
    color: var(--primary);
  }
`;

export const NotificationIcon = styled(FiBell)`
  width: 24px;
  height: 24px;

  color: var(--dark-grey);

  &.active,
  &:hover {
    color: var(--primary);
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  width: 24px;
  height: 24px;

  color: var(--dark-grey);

  &.active,
  &:hover {
    color: var(--primary);
  }
`;
