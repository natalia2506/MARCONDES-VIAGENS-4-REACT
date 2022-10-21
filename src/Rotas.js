import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './views/Home/index';
import HomeCliente from './views/HomeCliente';
import CadastrarCliente from './views/CadastrarCliente';
import AtualizarCliente from './views/AtualizarCliente';
import VisualizarCliente from './views/VisualizarCliente';

import Destinos from './views/Destinos/index';
import Promocoes from './views/Promocoes/index';
import Contato from './views/Contato/index';
import Login from './views/Login/Login';


export default function Rotas() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}/>

            <Route path="/cadastrarCliente" element={<CadastrarCliente/>}/>

            <Route path="/homeCliente" element={<HomeCliente/>}/>
            <Route path="/visualizarCliente/:id" element={<VisualizarCliente/>}/>
            <Route path="/atualiazarCliente/:id" element={<AtualizarCliente/>}/>

            <Route path="/destinos" element={<Destinos/>}/>
            <Route path="/promocoes" element={<Promocoes/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/login" element={<Login/>}/>


            <Route path="*" element={<h1>Página não encontrada.</h1>}/>
        </Routes>
    </Router>
  )
}
