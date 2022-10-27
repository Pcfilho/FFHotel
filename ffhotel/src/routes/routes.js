import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cadastro } from "../pages/Cadastro";
import { Detalhes } from "../pages/Detalhes";

const AppRoutes = () => {
    return (
            <Routes>
                <Route element={<Home />} path="/" index exact  />
                <Route element={<Cadastro />} path="/cadastro"  />
                <Route element={<Detalhes />} path="/detalhes"  />
            </Routes>
    )
}

export default AppRoutes;