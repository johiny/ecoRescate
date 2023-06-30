
const aboutPage = () => {
  return (
    <div className="flex flex-col items-center h-[85vh]">
        <h1 className="text-4xl font-bold">Acerca de EcoRescate</h1>
        <div className="flex flex-col items-center  bg-slate-700 h-full mt-5 w-2/4 p-5 rounded-lg text-center">
        <p className="text-xl flex flex-row items-center justify-center mt-auto mb-auto">
        EcoRescate es una plataforma en línea dedicada a la conservación de la biodiversidad en Latinoamérica. Esta web lista los animales en peligro de extinción y cuenta con un mapa interactivo que muestra su distribución geográfica. Además, brinda la oportunidad de ayudar donando a cualquier animal en peligro que desees apoyar.
        </p>
        </div>
    </div>
  )
}

export default aboutPage