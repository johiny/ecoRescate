import Image from "next/image";
import tapir from "@/media/tapir.png";
const AnimalCard = () => {
  return (
    <div className="flex flex-col w-80 h-96 border-2 border-gray-300 relative animalCardContainer overflow-hidden">
      <Image
        src={tapir}
        alt="tapir"
        className="object-cover h-full object-right-top cursor-pointer"
      />
      <div className="flex flex-col justify-center items-center absolute animalCardEffect bg-gray-700 opacity-80 cursor-pointer  w-full h-full">
        <h2 className="text-xl font-bold">Tapir</h2>
        <p className="text-sm font-semibold text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae earum consectetur, aliquam rerum magni doloremque distinctio, ab debitis, aspernatur voluptatem iure recusandae adipisci veniam alias? Magnam cupiditate ad nihil vitae?</p>
      </div>
    </div>
  );
};

export default AnimalCard;
