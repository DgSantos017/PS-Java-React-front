import { createContext, useContext, useState, ReactNode } from 'react'

interface TransfersContextType {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>
}

const TransfersContext = createContext<TransfersContextType>({
  data: [],
  setData: () => {}
});

export const useTransfersContext = () => {
  return useContext(TransfersContext)
};

interface TransfersProviderProps {
  children: ReactNode;
}

export const TransfersProvider = ({ children }: TransfersProviderProps) => {
  const [data, setData] = useState<any[]>([])

  return (
    <TransfersContext.Provider value={{ data, setData }}>
      {children}
    </TransfersContext.Provider>
  )
}

