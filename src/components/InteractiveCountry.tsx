import Image from "next/image"
const InteractiveCountry = ({country, size, top, left}: { country: string, size: number, top?: number, left?: number}) => {
  return (
    <div className="absolute w-full" style={{top: top || 0, left: left || 0}}>
        <Image src={country} width={size} height={size} alt={"pais de latinoamerica"} />
    </div>
  )
}

export default InteractiveCountry