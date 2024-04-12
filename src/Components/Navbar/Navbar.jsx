import React, { useState } from 'react'
import './Navbar.css'
import logo from '/Assets/logo.png';
import cart_icon from '/Assets/cart_icon.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menu,setMenu]=useState('shop');
  return (
    <>
      <div className="navbar">
        <div className="nav_logo">
            <img src={logo} alt="logo" />
            <p>KIN<span className='mel'>MEL</span></p>
        </div>
        <ul className="nav_menu">
            <li onClick={()=>setMenu('shop')}><NavLink to='/' style={{textDecoration:'none'}}>Shop</NavLink>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('men')}> <NavLink to='/men' style={{textDecoration:'none'}}>Men</NavLink>{menu==='men'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('women')}><NavLink to='/women' style={{textDecoration:'none'}}>Women</NavLink>{menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>setMenu('kids')}><NavLink to='/kids' style={{textDecoration:'none'}}>Kids</NavLink>{menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav_login_cart">
            <NavLink to='/loginsignup'><button>Login</button></NavLink>
            <NavLink to='./cart'><img src={cart_icon} alt="carticon" /></NavLink>
          <div className="nav_cart_count">0</div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
