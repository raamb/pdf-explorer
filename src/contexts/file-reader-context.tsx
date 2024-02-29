import { createContext, useState, useContext, useMemo } from 'react';

type FileContextType = {
  fileLink: string | null;
  setFileLink: (value : any) => void;
};

type FileReaderContextProviderProps = {
  children: React.ReactNode;
};

const FileReaderContext = createContext<FileContextType | undefined>(undefined);

export const FileReaderContextProvider = ({ children }: FileReaderContextProviderProps) => {
  const [fileLink, setFileLink] = useState(null);
  const value = useMemo(() => ({fileLink, setFileLink}), [fileLink]);

  return (
    <FileReaderContext.Provider value={value}>
      {children}
    </FileReaderContext.Provider>
  );
};

export const useFileReaderContext = () => {
  const context = useContext(FileReaderContext);
  if (context === undefined) {
    throw new Error(
      "useFileReaderContext must be used within a FileReaderContext"
    );
  }
  return context;
};