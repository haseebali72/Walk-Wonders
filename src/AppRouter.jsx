import { Route, Routes } from 'react-router-dom'
import Main from './Components/Main/Main'
import Cart from './Components/Cart/Cart'
import Login from './Pages/General Pages/Login'
import Mens from './Pages/Category PAges/Mens'
import Women from './Pages/Category PAges/Women'
import Kids from './Pages/Category PAges/Kids'
import ProductPage from './Pages/General Pages/ProductPage'


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/your-cart' element={<Cart />} ></Route>
        <Route path='/log-In' element={<Login />}></Route>
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/men' element={<Mens />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/kids' element={<Kids />}></Route>
      </Routes>
    </>
  )
}

export default AppRouter