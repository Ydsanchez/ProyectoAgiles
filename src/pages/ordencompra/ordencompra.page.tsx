export const OrdenCompra = () => {
  const mensajeEnvio = "Entregado";
  const mensajePago = "Pagado";

  return (
    <div className="container mt-8">
      <h5 className="text-2xl font-semibold mb-4">ORDEN DE COMPRA:</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h6 className="text-xl font-semibold mb-2">ENVÍO</h6>
          <p className="text-sm mb-2">Nombres: Nestor Arcila</p>
          <p className="text-sm mb-2">Email: nestor@gmail.com</p>
          <p className="text-sm mb-2">Dirección: Calle 2, Cali, Colombia</p>
          <div className="border border-green-500 rounded-md p-2 mb-4">
            <p className="text-green-500">{mensajeEnvio}</p>
          </div>

          <h6 className="text-xl font-semibold mb-2">MÉTODO DE PAGO</h6>
          <p className="text-sm mb-4">Método: PayPal</p>
          <div className="border border-green-500 rounded-md p-2 mb-4">
            <p className="text-green-500">{mensajePago}</p>
          </div>

          <h6 className="text-xl font-semibold mb-2">PRODUCTOS</h6>
          <div className="flex items-center mb-2">
            <img
              className="w-12 h-12 object-cover rounded-full mr-4"
              src="https://tottope.vteximg.com.br/arquivos/ids/167188-1000-1000/PILIGRAM-H-1810-V07_A.png?v=636723781789170000"
              alt="Imagen en Carrito"
            />
            <div>
              <p className="font-semibold">Abrigo Vaxi Moda 2020</p>
              <p>2 x $25.00 = $50.00</p>
            </div>
          </div>
        </div>

        <div>
          <div className="border border-gray-300 rounded-md p-4 mb-4">
            <h6 className="text-xl font-semibold mb-4">RESUMEN DEL PEDIDO</h6>
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Productos</p>
              <p>$50.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Envío</p>
              <p>$2.00</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Impuesto</p>
              <p>$8.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="font-semibold">Total</p>
              <p>$60.00</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2 w-full">
              PayPal
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
              Tarjeta de Crédito o Débito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
