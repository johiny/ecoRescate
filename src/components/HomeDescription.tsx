import HomeOption from "@/components/HomeOption"
import IUCN_Red_List from "@/media/IUCN_Red_List.png"
const HomeDescription = () => {
  return (
    <div className="flex flex-col lg:p-20 p-4 text-center md:w-5/12  w-screen h-full lg:mt-24">
      <h1 className="text-4xl my-5">Sumérgete en un mundo de especies únicas y amenazadas</h1>
      <p className="text-lg opacity-50 text-start my-2">
      ¡Descubre la selva virtual de la biodiversidad latinoamericana en peligro!<br/> Únete a la misión de rescatar la biodiversidad latinoamericana y aprende sobre las especies en peligro.<br/><br/>
      Con la ayuda de:
      </p>
      <HomeOption img={{image:IUCN_Red_List, alt: "IUCN Red List"}}/>
    </div>
  )
}

export default HomeDescription