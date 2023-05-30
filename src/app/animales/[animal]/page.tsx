import Image from "next/image"
import { animalType, nextResponse } from "@/utils/types"

const Animalpage = async ({params} : {params : {animal : string}}) => {
  let animal : animalType = {
    name: "paco",
    category: "EN",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.",
    img:  "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    population_trend: "up",
  }
  try{
    let res = await fetch(`http://localhost:3000/api/animales/${params.animal}`)
    res = await res.json()
    if(res){
      animal = res as any
    }
  }
  catch(e){
    console.log(e)
  }
  return (
    <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-center">{animal.name.toUpperCase()}</h2>
        <div className="flex flex-row h-[80vh] mt-5 text-zinc-900">
            <div className="w-1/3 backdrop-blur-md bg-ecoWhite flex -5 flex-col bigAnimalCard  ml-5">
            <Image src={animal.img} alt="tapir" width={700} height={700} className="object-fill"/>
                <p className="text-base font-bold text-center p-10">
                        {animal.description}
                </p>
            </div>
            <div className="w-2/3 flex flex-col mx-5 gap-3">
                <div className="flex-1  bg-ecoWhite  border-b-2  smallAnimalCard1"></div>
                <div className="flex-1  bg-ecoWhite  border-b-2  smallAnimalCard2"></div>
                <div className="flex-1 bg-ecoWhite  smallAnimalCard3"></div>
            </div>
        </div>
    </div>
  )
}

export default Animalpage