'use client';
import React from 'react'
import AnimalCard from './AnimalCard'
import { useContext } from "react";
import { HelpedAnimalsContext } from "./AppContext";
const HelpedAnimals = () => {
  const { helpedAnimals, deleteHelpedAnimals } = useContext(HelpedAnimalsContext)
  return (
    <div className='flex flex-row justify-center gap-5 flex-wrap overflow-auto helpedAnimalsSection'>
      {helpedAnimals?.map(animal => {
       return(
      <AnimalCard animal={animal} mini={true} deleteHelpedAnimals={deleteHelpedAnimals} key={animal.id}/>
      )})}
    </div>
  )
}

export default HelpedAnimals