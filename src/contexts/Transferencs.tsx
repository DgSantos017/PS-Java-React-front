import { createContext, useContext, useState } from 'react';

const TransfersContext = createContext({});

export const useTransfersContext = () => {
  return useContext(TransfersContext)
}

export const TransfersProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <TransfersContext.Provider value={{ data, setData }}>
      {children}
    </TransfersContext.Provider>
  )
}


