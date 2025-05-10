import { createContext, useContext, useState, ReactNode } from "react";
import { CardTypes, ServiceTypes, PatientTypes } from "../types";
import { CardData, ServiceData, PatientData } from "../../data";

const urlBase = "https://bestcare.novacode.uz/api/";

type AppContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
  urlBase: string;
  cardData: CardTypes[];
  serviceData: ServiceTypes[];
  PatientData: PatientTypes[];
};

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser, urlBase, cardData: CardData, serviceData: ServiceData, PatientData: PatientData }}>
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