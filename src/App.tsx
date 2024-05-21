import { Home, SingIn, SingUp, PerfilUserPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/index";
import { Productos } from "./pages/index";
import { VerDetalle } from "./pages/index";
import { CarritoCompra } from "./pages/index";
import { ProcesoCompra } from "./pages/index";
import { OrdenCompra } from "./pages/index";
import { AgregarProducto } from "./pages/index";
import { EditarProducto } from "./pages/index";
import { EditarUsuario } from "./pages/index";
import { ListadoPedido } from "./pages/index";

function App() {
  return (
    <>
      <Header />
      {/* Aqui puedes aplicar el header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<SingUp />} />
        <Route path="/auth/login" element={<SingIn />} />
        <Route path="/producto" element={<Productos />} />
        <Route path="/carritocompra" element={<CarritoCompra />} />
        <Route path="/procesocompra" element={<ProcesoCompra />} />
        <Route path="/ordencompra" element={<OrdenCompra />} />
        <Route path="/agregarproducto" element={<AgregarProducto />} />
        <Route path="/editarproducto" element={<EditarProducto />} />
        <Route path="/editarusuario" element={<EditarUsuario />} />
        <Route path="/listadopedido" element={<ListadoPedido />} />
        <Route
          path="/componentes/pantallas/productos/:id"
          element={<VerDetalle />}
        />
        <Route path="/perfil/:id" element={<PerfilUserPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
