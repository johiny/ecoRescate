'use client';

import{ createContext, useState } from 'react';

// Crea un nuevo contexto
export const HelpedAnimalsContext = createContext([]);

// Crea un componente de proveedor para el contexto
const AppContext = ({ children }) => {
  // Aquí puedes definir el estado y las funciones que desees compartir en el contexto
  const [helpedAnimals, setHelpedAnimals] = useState([])

  return (
    <HelpedAnimalsContext.Provider value={{helpedAnimals, setHelpedAnimals}}>
      {children}
    </HelpedAnimalsContext.Provider>
  );
};

export default AppContext

