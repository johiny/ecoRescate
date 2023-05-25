
const Navbar = () => {
  return (
    <div className='flex md:flex-row flex-col py-10 w-screen justify-center items-center'>
      <span className="md:absolute left-0">tu amigo en peligro</span>
      <div className="flex flex-row justify-around items-center w-full md:justify-center md:gap-4">
        <span className="opacity-50">Inicio</span>
        <span className="opacity-50">Mayor Riesgo</span>
        <span className="opacity-50">*</span>
        <span className="opacity-50">Acerca de</span>
        <span className="opacity-50">Contacto</span>
        </div>
    </div>
  )
}

export default Navbar