const contactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:h-[85vh] h-[75vh]">
      <h1 className="text-4xl font-bold">Escribenos</h1>
      <div className="flex flex-col items-center justify-around bg-slate-700 h-1/2 mt-5 lg:w-2/4 p-5 mx-2 lg:mx-0 rounded-lg text-center">
        <div className="flex flex-row gap-5 w-full items-center mt-20">
          <p className="w-3/6 text-center">
            ¿tienes alguna duda o quieres hacer un aporte?
          </p>
          <textarea
            className="w-full h-24  rounded-lg text-center text-black outline-none"
            placeholder="Escribe aqui tu mensaje"
          ></textarea>
        </div>
          <button className="w-1/5  rounded-lg text-center bg-ecoWhite text-slate-700 py-4 outline-none hover:bg-slate-600 hover:text-ecoWhite">Enviar</button>
      </div>
    </div>
  );
};

export default contactPage;
