// src/route.js ou App.tsx
import ScrollToTop from "./componentes/ScrollToTop";
import NaoEncontrada from "./paginas/NaoAchada";
import Post from "./paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import ApiPage from "./paginas/Api";
import { AuthProvider } from "./context/AuthContext";
import PaginaPadrao from "./componentes/PaginaPadrao";
import LoginPage from "./paginas/Login";
import LayoutLogin from "./componentes/LayoutLogin"; // Novo layout para login
import RegisterPage from "./paginas/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="api" element={<ApiPage />} />
            <Route path="posts/:id/*" element={<Post />} />
          </Route>

          <Route path="/login" element={<LayoutLogin />}>
            <Route index element={<LoginPage />} />
          </Route>


          <Route path="register" element={<RegisterPage />} />

          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
