import React, { ReactNode } from "react";

import { Grid } from "./styles";

import Menu from "../LayoutMenu";
import Header from "../LayoutHeader";
import Main from "../LayoutMain";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Grid>
        <Menu />
        <Header />
        <Main>{children}</Main>
      </Grid>
    </>
  );
};

export default Layout;
