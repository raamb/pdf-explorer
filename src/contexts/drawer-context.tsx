import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import { createContext, useState, useContext, useMemo } from 'react';

import { type IMenuItem } from '../types';

const MENU_LIST: IMenuItem[] = [
  {
    route: "/",
    literal: 'Dashboard',
    Icon: PictureAsPdfIcon,
  },
  {
    route: "/",
    literal: 'Orders',
    Icon: PictureAsPdfIcon,
  },
  {
    route: "/",
    literal: 'Customers',
    Icon: PictureAsPdfIcon,
  },
  {
    route: "/",
    literal: 'Inventory',
    Icon: PictureAsPdfIcon,
  },
];

type DrawerContextType = {
  isOpened: boolean;
  toggleIsOpened: (value: boolean) => void;
  menu: IMenuItem[];
};

type DrawerContextProviderProps = {
  children: React.ReactNode;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerContextProvider = ({ children }: DrawerContextProviderProps) => {
  const [isOpened, toggleIsOpened] = useState(false);

  const value = useMemo(() => ({
    isOpened,
    toggleIsOpened,
    menu: MENU_LIST
  })
  , [isOpened]);

  return (
    <DrawerContext.Provider value={value}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error(
      "useDrawerContext must be used within a DrawerContextProvider"
    );
  }
  return context;
};