export const EditarUsuario = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-3/4 lg:w-1/2 px-4">
        <div className="bg-white shadow-md rounded px-8 py-8">
          <h4 className="text-2xl font-bold mb-4 text-center">
            Editar Usuario
          </h4>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                defaultValue="Nestor Arcila"
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                defaultValue="Nestor@gmail.com"
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="admin" className="mr-2" />
              <label htmlFor="admin" className="select-none">
                Administrador
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
