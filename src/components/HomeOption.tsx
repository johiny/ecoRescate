import Image, { StaticImageData } from "next/image"

const HomeOption = ({img} : {img: {image: string | StaticImageData, alt: string}}) => {
  return (
    <div className="flex flex-row">
        <Image src={img.image} alt={img.alt} width={150} height={150}/>
    </div>
  )
}

export default HomeOption