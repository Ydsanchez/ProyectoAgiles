import {
  Home,
  SingIn,
  SingUp,
  PerfilUserPage,
  ProductPage,
  Productos,
  CarritoCompra,
  ProcesoCompra,
  OrdenCompra,
  AgregarProducto,
  EditarProducto,
  EditarUsuario,
  ListadoPedido,
  VerDetalle,
} from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/index";
import { RouterPrivateUser } from "./routers/index";
import { useAuth } from "./context";

function App() {
  const { user, isAuthenticated } = useAuth();
  console.log(user);
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
        <Route
          element={
            <RouterPrivateUser rol={"USER"} isAuthenticated={isAuthenticated} />
          }
        >
          <Route path="/perfil" element={<PerfilUserPage />} />
          <Route path="/product-add" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
