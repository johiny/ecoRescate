import AnimalCard from "./AnimalCard";
import { animalType } from "@/utils/types"

const FirstResults = ({animals} : {animals: animalType[]}) => {
  return (
    <>
     {animals.map((animal : animalType) => {
      return (
      <AnimalCard animal={animal} key={animal._id}/>
      )
    })
    }
    </>
  )
}

export default FirstResults