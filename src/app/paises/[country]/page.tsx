import AnimalCard from "@/components/AnimalCard"
import { animalType, nextResponse } from "@/utils/types"

const CountryPage = async ({params} : {params : {country : string}}) => {
  let animals : [] = []
  try{
    let res : nextResponse = await fetch(`http://localhost:3000/api/paises/${params.country}`)
    res  = await res.json()
    if(res.data){
      animals = res.data
    }
  }
  catch(e){
    console.log(e)
  }
  return (
    <div className="flex flex-col mt-5">
        <h2 className="text-5xl font-bold text-center">{params.country.toUpperCase()}</h2>
        <div className="flex flex-wrap flex-row justify-center mt-5 gap-16 px-10">
          {animals.map((animal : animalType) => {
            console.log(animal.name)
            return (
            <AnimalCard animal={animal}/>
            )
          })
          }
        </div>
    </div>
  )
}

export default CountryPage