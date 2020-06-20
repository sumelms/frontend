import React from "react";

import { Container, Separator, ResumeIcon, NotificationIcon, LogoutIcon, Actions } from "./styles";

import UserInfo from "../UserInfo";

const Header: React.FC = () => {
  return (
    <Container>
      <UserInfo />

      <Separator />

      <Actions>
        <ResumeIcon />
        <NotificationIcon />
        <LogoutIcon />
      </Actions>
    </Container>
  );
};

export default Header;
