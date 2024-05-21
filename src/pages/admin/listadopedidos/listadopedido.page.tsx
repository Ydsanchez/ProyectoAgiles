import { Link, useNavigate } from "react-router-dom";
export const ListadoPedido = () => {
  const navigate = useNavigate();

  const verDetalle = () => {
    // Manejar la redirección utilizando el router
    navigate("./ordencompra");
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-2xl font-bold mb-4">PEDIDOS</h4>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">USUARIO</th>
                <th className="px-4 py-2">FECHA</th>
                <th className="px-4 py-2">TOTAL</th>
                <th className="px-4 py-2">PAGADO</th>
                <th className="px-4 py-2">ENTREGADO</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  476751c9-3891-4a02-b8da-ac4e69b16df8
                </td>
                <td className="border px-4 py-2">Nestor Arcila</td>
                <td className="border px-4 py-2">2020-12-22</td>
                <td className="border px-4 py-2">$60.00</td>
                <td className="border px-4 py-2">2020-12-23</td>
                <td className="border px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 4.1-4.1 1.4 1.4z" />
                  </svg>
                </td>
                <td className="border px-4 py-2">
                  <Link to={"../ordencompra"}>
                    <button
                      onClick={verDetalle}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      DETALLES
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  55e210f5-f068-4100-abe7-139331a4d6de
                </td>
                <td className="border px-4 py-2">Ricardo Mendez</td>
                <td className="border px-4 py-2">2020-12-20</td>
                <td className="border px-4 py-2">$150.00</td>
                <td className="border px-4 py-2">2020-12-23</td>
                <td className="border px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-2v-6h2v6zm-2 2h2v2h-2v-2z" />
                  </svg>
                </td>
                <td className="border px-4 py-2">
                  <Link to={"../ordencompra"}>
                    <button
                      onClick={verDetalle}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      DETALLES
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
