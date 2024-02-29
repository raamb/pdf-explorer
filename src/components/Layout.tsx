import { type ReactNode } from "react";
import { Box, styled } from "@mui/material";

import { HeaderBar } from "./HeaderBar";
import { Drawer } from "./Drawer";
import { Main } from "./Main";
// import { Reader } from './Reader';
// import { Footer } from "./Footer";

import { DrawerContextProvider } from "../contexts/drawer-context";

const OuterContainer = styled(Box)`
  display: flex;
  overflow: hidden;
  height: inherit;
  flex-direction: column;
  min-height: 100vh;
`;

const InnerContainer = styled(Box)`
  display: flex;
  flex: 1;
  overflow: hidden;
  height: inherit;
`;

interface ILayoutProps {
  children: NonNullable<ReactNode>;
}

export const Layout = ({ children }: ILayoutProps) => (
  <DrawerContextProvider>
    <OuterContainer>
      <HeaderBar />
      <InnerContainer>
        <Drawer />
        <Main>{children}</Main>
      </InnerContainer>
      {/* <Footer>Footer</Footer> */}
    </OuterContainer>
  </DrawerContextProvider>
);