import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductMenu from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="menu/:id" element={<ProductMenu />} />
  </Routes>
)

export default Rotas
