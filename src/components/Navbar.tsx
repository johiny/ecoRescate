import bioRescate from '@/media/bioRescate_logo_1.svg'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='flex md:flex-row flex-col py-10 w-screen justify-center items-center'>
      <Image  className="md:absolute left-5 top-5" alt='BioRescate logo' src={bioRescate} width={300} height={300}/>
      <div className="flex flex-row justify-around items-center w-full md:justify-center md:gap-4">
        <span className="opacity-50 cursor-pointer hover:opacity-90">Inicio</span>
        <span className="opacity-50 cursor-pointer hover:opacity-90">Mayor Riesgo</span>
        <span className="opacity-50 cursor-default">*</span>
        <span className="opacity-50 cursor-pointer hover:opacity-90">Acerca de</span>
        <span className="opacity-50 cursor-pointer hover:opacity-90">Contacto</span>
        </div>
    </div>
  )
}

export default Navbar