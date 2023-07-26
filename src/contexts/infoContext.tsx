import { ReactNode, createContext, useState } from "react";

export const InfoContext = createContext({
  showComponent: 'classification',
  setShowComponent: (value: string) => {},
  loading: true,
  setLoading: (value: boolean) => {},
});

interface ProviderProps {
  children: ReactNode;
}


export function InfoContextProvider({children}: ProviderProps) {
  const [showComponent, setShowComponent] = useState('classification');
  const [loading, setLoading] = useState(true);

  return (
    <InfoContext.Provider
      value={{
        showComponent,
        setShowComponent,
        loading,
        setLoading,
    }}>
      {children}
    </InfoContext.Provider>
  )
}