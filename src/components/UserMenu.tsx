'use client';
import Image from "next/image"
import user from "@/media/tapir.png"
import close from "@/media/close.svg"
import { useState } from "react"
import { useSession } from "next-auth/react";
import HelpedAnimals from "./HelpedAnimals";
import { useContext } from "react";
import { HelpedAnimalsContext } from "./AppContext";
const UserMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const session = useSession()
    // creo que esto seria mejor utilizando el swr para tener un endpoint cacheado con los animales ayudados del usuario en vez del context
    const { helpedAnimals } = useContext(HelpedAnimalsContext)
  return (
    <>
     <div onClick={() => setMenuOpen(true)} className={" absolute  w-16 h-16  top-28 right-0 flex flex-row justify-center p-2 items-center cursor-pointer"}>
        <Image src={session.data?.user?.image || user} width={100} height={100} alt="user photo" className="rounded-full border-2 border-ecoDarkGreen aspect-square w-full hover:rotate-12 transition-all"/>
    </div>
    <div className={`h-screen w-96 bg-ecoWhite fixed top-0 right-[-1000px] flex flex-col p-2 items-center gap-3 ${menuOpen ? 'lateralMenuEntrance' : 'lateralMenuExit'}`}>
         <Image src={session.data?.user?.image || user} width={150} height={150} alt="user photo" className="rounded-full border-2 border-ecoDarkGreen aspect-square hover:rotate-12 transition-all"/>
         <Image src={close} width={35} height={35} alt="user photo" className="absolute top-0 right-0 cursor-pointer"
         onClick={() => setMenuOpen(false)}/>
         <h3 className="text-ecoDarkGreen text-2xl">Hola {session.data?.user?.name || 'paco'}!</h3>
         <h2 className="text-ecoDarkGreen text-1xl">Estos son los animales que estas apoyando</h2>
         <HelpedAnimals animals={helpedAnimals}/>
    </div>
    
    </>
  )
}

export default UserMenu