import { Home, SingIn, SingUp,PerfilUserPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/index";

function App() {
  return (
    <>
      <Header />
      {/* Aqui puedes aplicar el header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<SingUp />} />
        <Route path="/auth/login" element={<SingIn />} />
        <Route path="/perfil/:id" element={<PerfilUserPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
