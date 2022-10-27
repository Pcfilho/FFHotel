import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cadastro } from "../pages/Cadastro";
import { Detalhes } from "../pages/Detalhes";
import { Grupos } from "../pages/Grupos";
import { Favoritos } from "../pages/Favoritos";
import { Login } from "../pages/Login";
import { Editarperfil } from "../pages/Editarperfil";
import { GroupChat } from "../pages/GroupChat";

const AppRoutes = () => {
    return (
            <Routes>
                <Route element={<Home />} path="/" index exact  />
                <Route element={<Cadastro />} path="/cadastro"  />
                <Route element={<Detalhes />} path="/detalhes"  />
                <Route element={<Grupos />} path="/grupos"  />
                <Route element={<Favoritos />} path="/favoritos"  />
                <Route element={<Login />} path="/login"  />
                <Route element={<Editarperfil />} path="/perfil"  />
                <Route element={<GroupChat />} path="/grupo"  />
            </Routes>
    )
}

export default AppRoutes;