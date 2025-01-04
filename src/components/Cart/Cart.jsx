import React, { useEffect, useState } from 'react';
import './Cart.scss';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, deleteItem } from '../../redux/slices';

const Cart = () => {
    const cartList = useSelector((state) => state.addPhone.arr);
    const counts = useSelector((state) => state.addPhone.counts);
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(0); // Состояние для общей суммы

    useEffect(() => {
        const calculateTotalAmount = () => {
            return cartList.reduce((total, item) => {
                const quantity = counts[item.id] || 0; // Получаем количество товара
                const price = parseFloat(item.price) || 0; // Преобразуем цену в число
                return total + price * quantity; // Суммируем цену * количество
            }, 0);
        };

        setTotalAmount(calculateTotalAmount()); // Обновляем общую сумму
    }, [cartList, counts]); // Зависимости для обновления

    const mediaUrl = "http://127.0.0.1:8000/api/media/products/";

    return (
        <div className='cart'>
            <div className="wrapper">
                {cartList.length === 0 ? 'Корзина пуста' : (
                    cartList.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={`${mediaUrl}${item.image.substring(37)}`} alt="" />
                            <span className='title'>{item.name}</span>
                            <button onClick={() => dispatch(decrement(item.id))}>-</button>
                            <span>{counts[item.id] > 0 ? counts[item.id] : 1}</span>
                            <button onClick={() => dispatch(increment(item.id))}>+</button>
                            <span className='price'>{(counts[item.id] || 1) * parseFloat(item.price)} ₽</span>
                            <div onClick={() => dispatch(deleteItem({ id: item.id }))} style={{ cursor: "pointer" }}>
                                <DeleteOutlineOutlinedIcon />
                            </div>
                            <button>Купить</button>
                        </div>
                    ))
                )}
            </div>
            <div className='total'>
                <span>Товар на общую сумму - {totalAmount} ₽</span>
            </div>
        </div>
    );
}

export default Cart;
