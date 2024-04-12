import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import men_banner from '/Assets/banner_mens.png'
import women_banner from '/Assets/banner_women.png'
import kid_banner from '/Assets/banner_kids.png'

import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <>
<BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={()=><Cart/>}/>
          <Route path='/loginsignup' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        
        </BrowserRouter>
    </>
  )
}

export default App;
