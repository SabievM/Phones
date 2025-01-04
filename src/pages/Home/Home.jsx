import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import MessageAdd from '../../components/MessageAdd/MessageAdd';
import { useSelector } from 'react-redux';
import AddToCart from '../../addToCart';

const Home = React.memo(() => {
  const filterData = useSelector((state) => state.dataSlice.filterData)

  const {namePhone, display, handleAdd} = AddToCart();
  const mediaUrl = "http://127.0.0.1:8000/api/media/products/"
  
  return (
    <>
      <div className='home'>
        {filterData && filterData.map((item) => (
          
            <div  className='itemPhone' key={item.id}>
              <div className='image'>
                <img src={`${mediaUrl}${item.image.substring(37)}`} alt="" className='firstImage' />
                <img src={`${mediaUrl}${item.image2.substring(37)}`} alt="" className='secondImage' />
              </div>
              <Link to={`/product/${item.id}`} >
                <span>Модель {item.name}</span>
              </Link>
              <span>{item.description.substring(0, 70)}</span>
              <span>Оперативная память {item.ram}</span>
              <span>Основная память {item.storage}</span>
              <span>Цена {item.price}</span>
              <button onClick={() => handleAdd(item)} className='addCart'>Добавить в корзину</button>
            </div>
        ))}
      </div> 
      <MessageAdd namePhone={namePhone} display={display}/>
    </> 
  );
})

export default Home