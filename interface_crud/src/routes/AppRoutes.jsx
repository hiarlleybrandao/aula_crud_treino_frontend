import LoginPage from "../pages/LoginPage";
import UsuariosPage from "../pages/UsuariosPage";
import ProdutosPage from "../pages/ProdutosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route path="/usuarios" element={<UsuariosPage />} />
                <Route path="/produtos" element={<ProdutosPage />} />
                <Route path="*" element={<h1>Página não encontrada!</h1>} />
            </Routes>
        </BrowserRouter>
    );
}