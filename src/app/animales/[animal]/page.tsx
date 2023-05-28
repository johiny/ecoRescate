import Image from "next/image"
import tapir from "@/media/tapir.png";

const Animalpage = ({params} : {params : {animal : string}}) => {
  return (
    <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-center">{params.animal.toUpperCase()}</h2>
        <div className="flex flex-row h-[80vh] mt-5 text-zinc-900">
            <div className="w-1/3 backdrop-blur-md bg-ecoWhite flex -5 flex-col bigAnimalCard  ml-5">
            <Image src={tapir} alt="tapir" width={700} height={700} className="object-fill"/>
                <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, obcaecati quod nostrum saepe doloremque iure iusto rem assumenda culpa fugit voluptate labore consequuntur, minima praesentium! Voluptatum molestias labore dolore autem.
                        Voluptas obcaecati molestias consequuntur eius, corporis, accusamus soluta deserunt est ab quos exercitationem, perspiciatis dignissimos quisquam. Ullam dolore exercitationem possimus numquam saepe atque sapiente corporis, rerum nesciunt adipisci hic quaerat.
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