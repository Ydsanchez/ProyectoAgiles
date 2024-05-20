import { ProductoArray } from "../../components/data/data";

import { useNavigate } from "react-router-dom";

export const CarritoCompra = () => {
  const navigate = useNavigate();

  const miArray = ProductoArray;
  let suma = 0;
  miArray.forEach((prod) => {
    suma += prod.precio;
  });

  const realizarCompra = () => {
    navigate("/procesocompra");
  };

  return (
    <div className="container mt-8 p-8 flex-auto justify-center content-center place-items-center items-center text-center">
      <h4 className="font-semibold text-gray-700 mb-10">CARRITO DE COMPRAS</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="lg:col-span-9 md:col-span-8 sm:col-span-12 xs:col-span-12">
          <table className="w-full">
            <tbody>
              {miArray.map((producto) => (
                <tr key={producto.id} className="border-b border-gray-200">
                  <td>
                    <img
                      className="w-16 h-16 object-cover"
                      src={producto.image}
                      alt="Imagen en Carrito"
                    />
                  </td>
                  <td>
                    <p className="font-semibold">{producto.title}</p>
                  </td>
                  <td>
                    <p className="font-semibold">${producto.precio}</p>
                  </td>
                  <td>
                    <select className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                  <td>
                    <button className="p-2 text-gray-700 hover:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="30"
                        viewBox="0 0 30 30"
                      >
                        <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 xs:col-span-12">
          <div className="border border-gray-300 rounded-md p-4">
            <div className="columns-2">
              <h6 className="font-semibold text-lg">
                ({miArray.length}) PRODUCTOS
              </h6>
              <div className="flex">
                <h5>SUBTOTAL:</h5>
                <p className="font-semibold">${Math.round(suma * 100) / 100}</p>
              </div>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="justify-center text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-60"
                onClick={realizarCompra}
              >
                REALIZAR COMPRA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
