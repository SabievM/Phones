import React from 'react'
import { Link } from 'react-router-dom';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


import './Navbar.scss'

const NavBar = () => {
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
          <Link className='link'>
            <div className="item">
              <PermIdentityOutlinedIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default NavBar