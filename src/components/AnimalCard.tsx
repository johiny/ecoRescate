import Image from "next/image";
import { animalType } from "@/utils/types"
import Link from "next/link";
const AnimalCard = ({animal, mini} : {animal : animalType, mini? : boolean}) => {
  return (
    <Link href={`/animales/${animal.name}`}>
    <div data-testid="animalCard" className={`flex flex-col ${ mini ? `w-[8vw]` : 'w-80'} ${ mini ? `h-[20vh]` : 'h-96'} border-2 border-gray-300 relative animalCardContainer overflow-hidden`}>
      <Image
        src={animal.img}
        alt={animal.name}
        className="object-cover h-full object-center cursor-pointer"
        width={400}
        height={400}
      />
      <div className="flex flex-col justify-center items-center absolute animalCardEffect bg-gray-700 opacity-80 cursor-pointer  w-full h-full">
        <h2 className="text-xl font-bold text-center">{animal.name}</h2>
      </div>
    </div>
  </Link>
  );
};

export default AnimalCard;
