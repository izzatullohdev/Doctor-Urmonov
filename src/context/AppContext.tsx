import { createContext, useContext, useState, ReactNode } from "react";
import { 
  PatientTypes, 
  InfoTypes, 
} from "../types";

import { 
  PatientData, 
  InfoData, 
} from "../../data";

const urlBase = "https://bestcare.novacode.uz/api/";

type AppContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
  urlBase: string;
  PatientData: PatientTypes[];
  InfoData: InfoTypes[];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider 
      value={{ 
        user, setUser, 
        urlBase, 
        PatientData: PatientData, 
        InfoData: InfoData, 
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};