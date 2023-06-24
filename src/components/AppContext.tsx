'use client';

import{ ReactNode, createContext } from 'react';
import { useSession } from 'next-auth/react';
import useSWR from "swr"
import { animalType } from "@/utils/types"
// en realidad creo que yo quitaria todo este contexto, con el nuevo paradigma de nextjs y los react server components y lo increible de swr en cliente.
// veo que la cosa se esta llendo mas hacia el lado de conseguir la data justo donde esta se necesita en vez de tener un estado global de la aplicacion, por lo que creo que yo mejor haria los fetch en el componente de infocard y en el de helped animals.

interface AnimalContextValue {
  helpedAnimals: any[]; // Reemplaza 'any' con el tipo correcto para los animales ayudados
  setHelpedAnimals: (animal: animalType) => Promise<void>;
  deleteHelpedAnimals: (animalName: string) => Promise<void>; // Reemplaza 'animalType' con el tipo correcto para los animales
}

// contexto
export const HelpedAnimalsContext = createContext<AnimalContextValue>({helpedAnimals: [], setHelpedAnimals: async () => {}, deleteHelpedAnimals: async () => {}
});

// componente wrapper para el contexto
const AppContext = ({ children } : {children: ReactNode}) => {
  // obtiene la session en el cliente
  const session = useSession();

  // usando swr para manejar el fetch y el estado de los animales
  // fetcher para obtener la data array de los animales

  const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json())
  const {data, mutate} = useSWR(`${process.env.NEXT_PUBLIC_DOMAIN}/api/usuarios/${session.data?.user?.name}/helpedAnimals`, fetcher)
  //funcion para manejar el update de los animales y disparar la revalidacion de swr
  const setHelpedAnimals = async (animal: animalType) => {
    await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/usuarios/${session.data?.user?.name}/helpedAnimals`, {method: 'POST', body: JSON.stringify(animal), headers: {'Content-Type': 'application/json'}})
    mutate([...data , animal])
  }
  const deleteHelpedAnimals = async (animalName: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/usuarios/${session.data?.user?.name}/helpedAnimals`, {method: 'PATCH', body: JSON.stringify({name: animalName}), headers: {'Content-Type': 'application/json'}})
    mutate(data.filter((item: animalType) => item.name !== animalName))
  }
  return (
    <HelpedAnimalsContext.Provider value={{helpedAnimals: data, setHelpedAnimals, deleteHelpedAnimals}}>
      {children}
    </HelpedAnimalsContext.Provider>
  );
};

export default AppContext

