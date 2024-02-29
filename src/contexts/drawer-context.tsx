import { createContext, useState, useContext, useMemo } from 'react';

type DrawerContextType = {
  isOpened: boolean;
  toggleIsOpened: (value: boolean) => void;
};

type DrawerContextProviderProps = {
  children: React.ReactNode;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerContextProvider = ({ children }: DrawerContextProviderProps) => {
  const [isOpened, toggleIsOpened] = useState(true);
  const value = useMemo(() => ({
    isOpened,
    toggleIsOpened
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