import React from 'react'
import AnimalCard from './AnimalCard'
const HelpedAnimals = () => {
  const animal = {
    name: "Pingüino del Cabo",
    category:"EN",
    population_trend: "Decreasing",
        description:"60-70 cm. Medium-sized, black-and-white penguin. Adult black above, white below with variable amount of black spotting on breast and belly. Broad, black breast-band and black-and-white facial pattern diagnostic. Whitish bare skin over the eyes becomes bright pinkish-red in very hot conditions. Male has deeper, more robust bill. Juvenile initially dark slaty-blue above, turning browner and, in second and third year, shows varying amount of adult facial pattern. Similar spp. Very rarely, some individuals show a double black breast-band - indicative of Magellanic Penguin S. magellanicus, which has never been positively recorded in Africa.",
        img:"https://plus.unsplash.com/premium_photo-1664298056797-2c95caaa2569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1541&q=80"
    }
  return (
    <div className='flex flex-row justify-center gap-5 flex-wrap overflow-auto helpedAnimalsSection'>
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
      <AnimalCard animal={animal} mini={true} />
    </div>
  )
}

export default HelpedAnimals