import React, { useState } from 'react'

import './Credit.scss'

const Credit = () => {

    const [sum, setSum] = useState(null);
    const [mounth, setMounth] = useState(null);
    const [result, setResult] = useState(null);

    console.log("Рендер компонента - Credit")
    const getResult = () => {
        setResult((sum * 135 / (100)) / mounth)
    }

    return (
        <div className='credit'>
            <div className="wrapper">
                <div className="item">
                    <label htmlFor='mounth'>Введите количество месяцев</label>
                    <input onChange={(e) => setMounth(e.target.value)} value={mounth} id='mounth' type='text' placeholder='Кол-во месяцев'/>
                </div>
                <div className="item">
                    <label htmlFor='sum'>Введите сумму товара</label>
                    <input onChange={(e) => setSum(e.target.value)} value={sum} id='sum' type='text' placeholder='Сумма товара'/>
                </div>
                <button onClick={getResult} className='button'>Расчитать</button>
                <div className="result">
                    
                    <span>На сумму {sum} при рассрочки на {mounth} месяцев, ежемесячный платеж составит - {Math.ceil(result)} рублей</span>
 
                </div>
            </div>
        </div>
    )
}

export default Credit