import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import "./Product.scss"
import axios from 'axios';
import AddToCart from '../../addToCart';
import MessageAdd from '../../components/MessageAdd/MessageAdd';

const Product = () => {

  const [data, setData] = useState([])
  const { id } = useParams();
  const [mainImage, setMainImage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try{
        const resp = await axios.get(`http://127.0.0.1:8000/api/product/${id}`)
        setData(resp.data)
      } catch(err) {
        console.log("error", err);
      }
    }
    fetchData();
  }, [id])


  const {namePhone, display, handleAdd} = AddToCart();
  const mediaUrl = "http://127.0.0.1:8000/api/media/products/"

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={`${mediaUrl}${data.image?.substring(37)}`} alt="" className='img1' onClick={(e) => setMainImage(e.target.src)}/>
          <img src={`${mediaUrl}${data.image2?.substring(37)}`} alt="" className='img2' onClick={(e) => setMainImage(e.target.src)}/>
        </div>
        <div className="mainImg">
          <img src={mainImage ? mainImage :
            `${mediaUrl}${data.image?.substring(37)}`
          } alt="" />
         
        </div>
      </div>
      <div className="right">
        <h1></h1>
        <span className="price">$95</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquam maxime facere suscipit dolorum, accusamus numquam sit alias nesciunt sed quo iure ad? Repellendus unde perspiciatis atque, illum nobis veritatis.</p>
        
        <button className="add" onClick={() => handleAdd(data)}>
            <ShoppingCartCheckoutOutlinedIcon /> ADD TO CART
        </button>
        <div className="links">
            <div className="item">
                <FavoriteBorderOutlinedIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
                <BalanceOutlinedIcon /> ADD TO COMPARE
            </div>
        </div>
        <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
        </div>
      </div>
      <MessageAdd namePhone={namePhone} display={display}/>
    </div>
  )
}

export default Product