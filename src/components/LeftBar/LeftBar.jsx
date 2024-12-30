import React from 'react'
import './LeftBar.scss'


import Categories from '../Categories/Categories';
import Filter from '../Filter/Filter';
const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className="wrapper">
        <div className="categories">
          <Categories/>
        </div>

        <Filter />
        
        <div className="sorts"></div>
      </div>
    </div>
  )
};

export default LeftBar