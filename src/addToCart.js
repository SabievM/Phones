import { useDispatch, useSelector } from "react-redux";


import { addItem, increment } from "./redux/slices";
import { useState } from "react";


const AddToCart = () => {
    const [namePhone, setNamePhone] = useState('')
    const [display, setDisplay] = useState('none')
    const dispatch = useDispatch()
    const cartList = useSelector((state) => state.addPhone.arr);

    const handleAdd = (item) => {
        if (cartList.includes(item)){
        dispatch(increment(item.id))
        }else{
        dispatch(addItem(item));
        }
        
        setNamePhone(item.name);
        closeMessage()
    }
    

    const closeMessage = () => {
        setDisplay("block")
        setTimeout(() => {
            setDisplay("none")
        }, 3000);
    }
    return {namePhone, display, handleAdd}
};

export default AddToCart;

