import { createContext, useContext, useState } from 'react'

interface TransfersContextType {
  data: any[]
  setData: React.Dispatch<React.SetStateAction<any[]>>
}

const TransfersContext = createContext<TransfersContextType>({
  data: [],
  setData: () => {}
});

export const useTransfersContext = () => {
  return useContext(TransfersContext)
};

export const TransfersProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <TransfersContext.Provider value={{ data, setData }}>
      {children}
    </TransfersContext.Provider>
  )
}


