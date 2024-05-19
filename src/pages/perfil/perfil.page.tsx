import { useNavigate } from "react-router-dom";

export const PerfilUserPage = () => {
  const navigate = useNavigate();
  const verDetalles = () => {
    const id = "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed";
    navigate(`/user/${id}`);
  };

  return (
    <div className="container mx-auto mt-5 p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <h5 className="text-2xl font-bold mb-4">PERFIL DE USUARIO</h5>
          <form onSubmit={(e) => e.preventDefault()} className="w-full">
            <div className="relative w-24 h-24">
              <input type="file" accept=".jpg, .gif, .png" className="hidden" />
              <button className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                {/* aqui va una imagen */}
              </button>
            </div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-4"
              value="John"
              readOnly
            />
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
              value="Peralta"
              readOnly
            />
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
              value="john@gmail.com"
              readOnly
            />
            <hr className="my-4 bg-slate-950" />
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-4"
            />
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-2 py-2 mt-2"
            />
            <button
              className="w-250 bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4"
              onClick={() => alert("Perfil actualizado")}
            >
              ACTUALIZAR
            </button>
          </form>
        </div>

        <div className="md:col-span-2">
          <h5 className="text-2xl font-bold mb-4">MIS PEDIDOS</h5>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">ID</th>
                <th className="border border-gray-400 px-4 py-2">FECHA</th>
                <th className="border border-gray-400 px-4 py-2">TOTAL</th>
                <th className="border border-gray-400 px-4 py-2">PAGADO</th>
                <th className="border border-gray-400 px-4 py-2">ENTREGADO</th>
                <th className="border border-gray-400 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2">
                  1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
                </td>
                <td className="border border-gray-400 px-4 py-2">2020-12-15</td>
                <td className="border border-gray-400 px-4 py-2">60.00</td>
                <td className="border border-gray-400 px-4 py-2">2020-12-15</td>
                <td className="border border-gray-400 px-4 py-2">
                  {/* Aqui va la imagen */}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
                    onClick={verDetalles}
                  >
                    DETALLES
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
