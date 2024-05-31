import { Link } from "react-router-dom";
import { ProductoArray } from "../../components/data/data";

export const Productos = () => {
  const miArray = ProductoArray;
  return (
    <div className="mt-8">
      <h1 className="font-semibold text-gray-900 mb-50">Productos</h1>
      <div className="grid justify-items-center">
      <div className="flex gap-x-10 ">
        {miArray.map((data) => (
          <div key={data.id} className="h-64 bg-gray-200 m-4">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
              {/* Imagen */}
              <img
                className="h-[200px] w-[200px] rounded-[4px] bg-gradient-to-b from-gray-300 to-white object-cover p-5"
                src={data.image}
                alt="Producto"
              />
              {/* Precio */}
              <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-2 rounded-bl-lg">
                <span>${data.precio}</span>
              </div>
              <div className="p-4">
                {/* Nombre del producto */}
                <h3 className="font-bold text-gray-600 mb-8">{data.title}</h3>
                {/* Botón "Más detalles" */}
                <Link to={`/componentes/pantallas/productos/${data.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                    Más Detalles
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Agrega más cards aquí si es necesario */}
      </div>
      </div>
    </div>
  );
};
