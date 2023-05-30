import bioRescate from '@/media/bioRescate_logo_1.svg'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex md:flex-row flex-col py-10 w-screen justify-center items-center'>
      <Image  className="md:absolute left-5 top-5" alt='BioRescate logo' src={bioRescate} width={300} height={300}/>
      <div className="flex flex-row justify-around items-center w-full md:justify-center md:gap-4">
        <Link href="/"><span className="opacity-50 cursor-pointer hover:opacity-90">Inicio</span></Link>
        <Link href="/mayor_riesgo"><span className="opacity-50 cursor-pointer hover:opacity-90">Mayor Riesgo</span></Link>
        <span className="opacity-50 cursor-default ">🌎</span>
        <Link href="/acerca_de"><span className="opacity-50 cursor-pointer hover:opacity-90">Acerca de</span></Link>
        <Link href="/contacto"><span className="opacity-50 cursor-pointer hover:opacity-90">Contacto</span></Link>
        </div>
    </div>
  )
}

export default Navbar