import Navbar from './components/navbar/navbar.jsx'
import Home from './pages/home/home.jsx'
import React from "react";
import './app.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListagemProdutos from "./pages/listagem/listagemProdutos.jsx";
import Produto from "./pages/produto/produto.jsx";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={'/produtos/:categoria'} element={<ListagemProdutos/>}/>
            <Route  path={'/produtos/:categoria/:query'} element={<Produto/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
