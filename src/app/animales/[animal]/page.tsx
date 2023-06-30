import Image from "next/image"
import { animalType } from "@/utils/types"
import AnimalHeIpInfoCard from "@/components/AnimalHeIpInfoCard"
const Animalpage = async ({params} : {params : {animal : string}}) => {
  // animal por defecto pr si aago va mal, esto segurtamente se puede hacer mejor que asco me da jaja
  let animal : animalType = {
    _id: "id",
    name: "paco",
    category: "EN",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.",
    img:  "https://images.unsplash.com/photo-1463852247062-1bbca38f7805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
    population_trend: "up",
  }
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/animales/${params.animal}`, {cache: "no-cache"})
    const data = await res.json()
    if(data){
      console.log(data)
      animal = data
    }
  }
  catch(e){
    console.log(e)
  }
  return (
    <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-center">{animal.name.toUpperCase()}</h2>
        <div className="flex flex-row h-[80vh] mt-5 text-zinc-900">
            <div className="w-1/3  bg-ecoWhite flex  flex-col ml-5 relative">
              <div className="h-1/2 overflow-hidden">
            <Image src={animal.img} alt="tapir" width={700} height={500} className="object-cover aspect-video"/>
            </div>
                <p className="text-base font-bold text-center p-10">
                        {animal.description}
                </p>
            </div>
            <div className="w-2/3 flex flex-col mx-5 gap-3">
                <div className="flex-1  bg-ecoWhite  border-b-2  smallAnimalCard1 flex justify-center items-center">
                  {animal.category === "LC" ?
                    <h2 className=" text-2xl text-ecoDarkGreen">Preocupación menor</h2> :
                    animal.category === "VU" ?
                    <h2 className=" text-2xl text-orange-600">Vulnerable</h2> :
                    <h2 className=" text-2xl text-red-700">En peligro</h2>}
                </div>
                <div className="flex-1  bg-ecoWhite  border-b-2  smallAnimalCard2 flex justify-center items-center flex-col">
                    <h2 className=" text-2xl text-ecoDarkGreen">Tendencia Poblacional</h2>
                    <h2 className=" text-1xl text-ecoDarkGreen">{animal.population_trend}</h2>
                </div>
                <AnimalHeIpInfoCard animal={animal}/>
            </div>
        </div>
    </div>
  )
}

export default Animalpage