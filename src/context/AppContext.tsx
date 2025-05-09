// src/context/AppContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// Bu yerga baseURL qo‘shamiz
const urlBase = "https://bestcare.novacode.uz/api/";

// Context qiymati uchun type
type AppContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
  urlBase: string; // ✅ Qo‘shildi
};

// Default qiymat
const AppContext = createContext<AppContextType | undefined>(undefined);

// Props turi
interface AppProviderProps {
  children: ReactNode;
}

// Provider component
export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser, urlBase }}>
      {children}
    </AppContext.Provider>
  );
};

// Context hook
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
