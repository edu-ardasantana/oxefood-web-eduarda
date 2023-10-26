import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormCategoriaProduto from './views/produto/FormCategoriaProduto';
import ListCategoriaProduto from './views/produto/ListCategoriaProduto';
import FormLogin from './views/login/FormLogin';
import { ProtectedRoute } from './views/util/ProtectedRoute';

function Rotas() {
    return (
        <>
            <Routes>

                <Route path="/" element={<FormLogin />} />

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-cliente"
                    element={
                        <ProtectedRoute>
                            <ListCliente />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-cliente"
                    element={
                        <ProtectedRoute>
                            <FormCliente />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-produto"
                    element={
                        <ProtectedRoute>
                            <ListProduto />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-produto"
                    element={
                        <ProtectedRoute>
                            <FormProduto />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-categoriaProduto"
                    element={
                        <ProtectedRoute>
                            <ListCategoriaProduto />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-categoriaProduto"
                    element={
                        <ProtectedRoute>
                            <FormCategoriaProduto />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-entregador"
                    element={
                        <ProtectedRoute>
                            <ListEntregador />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-entregador"
                    element={
                        <ProtectedRoute>
                            <FormEntregador />
                        </ProtectedRoute>
                    }
                />



                {/* <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="list-categoriaProduto" element={ <ListCategoriaProduto/> } />
                <Route path="form-categoriaProduto" element={ <FormCategoriaProduto/> } />
                <Route path="list-cupom" element={ <ListCupom/> } />
                <Route path="form-cupom" element={ <FormCupom/> } /> */}

            </Routes>
        </>
    )
}

export default Rotas
