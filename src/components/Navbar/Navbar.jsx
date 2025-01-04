import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Cart from '../Cart/Cart';

import './Navbar.scss'

const NavBar = () => {

  const [open, setOpen] = useState(false)
  console.log("Рендер компонента - Navbar")



  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className='link'>
            <div className="item">
              <h1>PhoneSabiev</h1>
            </div>
          </Link>
          
          <Link to="/credit" className='link'>
            <div className="item">
              <CurrencyExchangeOutlinedIcon />
              <span>Посмотреть условия рассрочки</span>
            </div>
          </Link>


        </div>

        <div className="center">
          <form action="">
            <div className="searchIcon">
              <SearchOutlinedIcon/>
            </div>
            <input type="text" placeholder='Поиск...'/>
          </form>
        </div>

        <div className="right">
          <Link className='link'>
            <div className="item">
              <span>О нас</span>
            </div>
          </Link>
          <Link className='link'>
            <div className="item">
              <span>Контакты</span>
            </div>
          </Link>

          <div className="item" onClick={() => 
            (
              setOpen(!open)
            )}>
            <ShoppingCartOutlinedIcon />
          </div>

        </div>
      </div>
      {open && <div className='Cart'>
        <Cart/>
      </div>}
      
    </div>
  )
};

export default NavBar