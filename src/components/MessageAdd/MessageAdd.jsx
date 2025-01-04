import React from 'react'

import './MessageAdd.scss'

const MessageAdd = ({namePhone, display}) => {
    return (
        <div className='MessageAdd' style={{display: display}}>
            <span>Товар {namePhone} добавлен в корзину</span>
        </div>
    )
}

export default MessageAdd