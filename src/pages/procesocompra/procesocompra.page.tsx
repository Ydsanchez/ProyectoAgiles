import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProcesoCompra = () => {
  const [activeStep, setActiveStep] = useState(1);

  const continuarProceso = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const retrocederProceso = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const navigate = useNavigate();

  const realizarPedido = () => {
    navigate(`/ordencompra`);
  };

  const steps = [
    { label: "Registrarse" },
    { label: "Envio" },
    { label: "Metodo de Pago" },
    { label: "Realizar Pedido" },
  ];

  return (
    <div className="container mt-8">
      <div className="flex items-center justify-around space-x-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`h-12 w-12 flex items-center justify-center rounded-full border border-gray-300 ${
                index <= activeStep ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {index + 1}
            </div>
            <p
              className={`ml-2 ${
                index <= activeStep ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>

      {activeStep === 1 && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h6 className="text-lg font-semibold mb-8">ENVIO DEL PRODUCTO</h6>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 ">
            <div>
              <label htmlFor="direccion" className="block text-gray-700">
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                className="block w-96 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="ciudad" className="block text-gray-700">
                Ciudad
              </label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                className="block w-96 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="pais" className="block text-gray-700">
                País
              </label>
              <input
                type="text"
                id="pais"
                name="pais"
                className="block w-96 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              onClick={continuarProceso}
            >
              CONTINUAR
            </button>
          </form>
        </div>
      )}

      {activeStep === 2 && (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="md:col-span-1">
            <h6 className="font-semibold">METODO DE PAGO</h6>
            <div className="mt-4">
              <div className="mb-4">
                <label className="block mb-2">Seleccione Método</label>
                <div>
                  <input type="radio" className="mr-2" /> PayPal o Tarjeta
                </div>
              </div>
              <div className="flex justify-around">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={retrocederProceso}
                >
                  ANTERIOR
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={continuarProceso}
                >
                  CONTINUAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeStep === 3 && (
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 md:pl-4">
              <div className="mb-4">
                <p className="text-lg font-semibold">ENVÍO</p>
                <p>Dirección: Calle 2, Cali, Colombia</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold">MÉTODO DE PAGO</p>
                <p>Método: Paypal</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold">PRODUCTOS</p>
                <div className="flex">
                  <img
                    className="w-16 h-16 object-cover mr-4"
                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1702458113-800_800_F5C3D514CF31D1386743BC5AB8319D35mp.png?crop=1xw:1xh;center,top&resize=980:*"
                    alt="proceso_compra"
                  />
                  <div>
                    <p className="text-lg font-semibold">
                      Abrigo vaxi moda 2020
                    </p>
                    <p>2 x $25.00 = $50.00</p>
                  </div>
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                onClick={retrocederProceso}
              >
                ANTERIOR
              </button>
            </div>

            <div>
              <div className="bg-white shadow-md rounded-md p-4">
                <p className="text-lg font-semibold mb-4">RESUMEN DEL PEDIDO</p>
                <div className="flex justify-between mb-2">
                  <p>Productos:</p>
                  <p>$50.00</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Envío:</p>
                  <p>$2.00</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Impuesto:</p>
                  <p>$8.00</p>
                </div>
                <div className="flex justify-between mb-4">
                  <p>Total:</p>
                  <p>$60.00</p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
                  onClick={realizarPedido}
                >
                  REALIZAR PEDIDO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
