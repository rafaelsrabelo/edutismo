import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import App from './App'
import './index.css'
import Cadastro from './pages/Cadastro'

// PAGES
import Contato from './pages/Contato'
import Contra from './pages/Contra'
import Entrar from './pages/Entrar'
import Home from './pages/Home'
import Memorizacao from './pages/Memorizacao'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/memorizacao' element={<Memorizacao />} />
        <Route path='/contra' element={<Contra />} />
        <Route path='/login' element={<Entrar />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
