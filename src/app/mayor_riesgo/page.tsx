import FirstResults from "@/components/FirstResults"
import MoreResults from "@/components/MoreResults"

const mostInDangerPage =  async () => {
    let animals : [] = []
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/paises/mostInDanger`, {next: { revalidate: 3600 * 6}})
    const {data}  = await res.json()
    if(data){
      animals = data
    }
  }
  catch(e){
    console.log(e)
  }
  return (
    <div className="flex flex-col mt-5 ">
        <h2 className="text-5xl font-bold text-center">ANIMALES EN MAYOR RIESGO</h2>
        <div className="flex flex-wrap flex-row justify-center mt-5 gap-16 px-10">
        <FirstResults animals={animals}/>
        <MoreResults/>
        </div>
    </div>
  )
}

export default mostInDangerPage