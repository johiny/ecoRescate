'use client';

import{ createContext } from 'react';
import { useSession } from 'next-auth/react';
import useSWR from "swr"

// en realidad creo que yo quitaria todo este contexto, con el nuevo paradigma de nextjs y los react server components y lo increible de swr en cliente.
// veo que la cosa se esta llendo mas hacia el lado de conseguir la data justo donde esta se necesita en vez de tener un estado global de la aplicacion, por lo que creo que yo mejor haria los fetch en el componente de infocard y en el de helped animals.

// contexto
export const HelpedAnimalsContext = createContext([]);

// componente wrapper para el contexto
const AppContext = ({ children }) => {
  // obtiene la session en el cliente
  const session = useSession();

  // usando swr para manejar el fetch y el estado de los animales
  // fetcher para obtener la data array de los animales

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, mutate} = useSWR(`http://localhost:3000/api/usuarios/${session.data?.user}/helpedAnimals`, fetcher)
  //funcion para manejar el update de los animales y disparar la revalidacion de swr
  const setHelpedAnimals = async (animal) => {
    await fetch(`http://localhost:3000/api/usuarios/${session.data?.user}/helpedAnimals`, {method: 'POST', body: JSON.stringify(animal), headers: {'Content-Type': 'application/json'}})
    mutate([...data , animal])
  }
  console.log('animales en el front:',data)
  return (
    <HelpedAnimalsContext.Provider value={{helpedAnimals: data, setHelpedAnimals}}>
      {children}
    </HelpedAnimalsContext.Provider>
  );
};

export default AppContext

