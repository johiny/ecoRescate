import Image from "next/image"
import Link from 'next/link'
const InteractiveCountry = ({country, size, top, left}: { country: {name: string, img: string}, size: number, top?: number, left?: number}) => {
  return (
    <div className={`absolute  hover:cursor-pointer countryEffect`} style={{top: top || 0, left: left || 0, width: size, height: size}}>
        <span className="relative top-1/2 left-[45%] countryName">{country.name}</span>
        <Link href={`/paises/${country.name.toLowerCase()}`}><Image src={country.img} width={size} height={size} alt={"pais de latinoamerica"} /></Link>
    </div>
  )
}

export default InteractiveCountry