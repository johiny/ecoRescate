import React from 'react'
import AnimalCard from './AnimalCard'
const HelpedAnimals = ({animals}) => {
  return (
    <div className='flex flex-row justify-center gap-5 flex-wrap overflow-auto helpedAnimalsSection'>
      {animals.map(animal => <AnimalCard animal={animal} mini={true}/>)}
    </div>
  )
}

export default HelpedAnimals