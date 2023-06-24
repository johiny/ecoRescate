'use client';
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { HelpedAnimalsContext } from "./AppContext";
import { animalType } from "@/utils/types";
const AnimalHeIpInfoCard = ({animal}: {animal: animalType}) => {
    const session = useSession();
    const { setHelpedAnimals, helpedAnimals } = useContext(HelpedAnimalsContext)
    const helpedAnimalsChecker = () => {
        const animalExist = helpedAnimals?.some(helpedanimal => helpedanimal.name === animal.name)
        return animalExist
    }
  return (
    <div className="flex-1 bg-ecoWhite  smallAnimalCard3 flex justify-center items-center flex-col">
        { session.status === "authenticated" ? 
        helpedAnimalsChecker() ? 
        <h2 className="text-ecoDarkGreen text-2xl">El {animal.name} ya está en tu lista de apadrinados</h2>
        :
        <>
        <h2 className="text-ecoDarkGreen text-2xl">Agrega al {animal.name} a tu lista de apadrinados</h2>
            <button className="bg-ecoDarkGreen text-ecoWhite px-4 py-2 rounded-md mt-4 hover:bg-ecoDarkGreen/90" onClick={() => setHelpedAnimals(animal)}>Agregar</button>
        </>
        :
        <h2 className="text-ecoDarkGreen text-2xl">Para agregar animales a tu lista de apadrinados debes iniciar sesión</h2>
        }      
    </div>
  )
}

export default AnimalHeIpInfoCard