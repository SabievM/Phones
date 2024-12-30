import React, { useContext, useEffect, useState } from 'react';
import './Filter.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { DataContext } from '../../App';

const Filter = () => {
    const [phonePrice, setPhonePrice] = useState(null);
    const [selectedRam, setSelectedRam] = useState([]);
    const [selectedStorage, setSelectedStorage] = useState([]);
    
    const {setDataFilter} = useContext(DataContext)

    const { slug } = useParams();

    
    useEffect(() => {
        const fetchFilter = async () => {
            try {
                if (slug){
                    const url = `http://127.0.0.1:8000/api/products/${slug}/filter/?price=${phonePrice !== null ? phonePrice : ''}&ram=${selectedRam.join(',')}&storage=${selectedStorage.join(',')}`;
                    const resp = await axios.get(url);
                    setDataFilter(resp.data)
                } else{
                    const url = `http://127.0.0.1:8000/api/products/filter/?price=${phonePrice !== null ? phonePrice : ''}&ram=${selectedRam.join(',')}&storage=${selectedStorage.join(',')}`;
                    const resp = await axios.get(url);
                    setDataFilter(resp.data)
                }
                    
                
            } catch (err) {
                console.error("Error", err.response ? err.response.data : err.message);
            }
        };
        fetchFilter();
    }, [phonePrice, selectedRam, selectedStorage, slug, setDataFilter]);

    const handleRamChange = (value) => {
        setSelectedRam(prev => 
            prev.includes(value) ? prev.filter(r => r !== value) : [...prev, value]
        );
    };

    const handleStorageChange = (value) => {
        setSelectedStorage(prev => 
            prev.includes(value) ? prev.filter(s => s !== value) : [...prev, value]
        );
    };

    return (
        <div className="filters">
            <h4>Фильтровать по цене</h4>
            <div className="inputWrapper">
                <div className='inputItem'>
                    <span>0</span>
                    <input onChange={(e) => setPhonePrice(e.target.value)} value={phonePrice} type="range" min={0} max={250000} step={100} className='inputRange'/>
                    <span>{phonePrice === null ? 250000 : phonePrice}</span>
                </div>
            </div>
            <h4>Фильтровать по памяти</h4>
            <h5>Оперативная память</h5>
            <div className='inputWrapper'>
                {[4, 8, 12, 16].map((ramValue) => (
                    <div className='inputItem' key={ramValue}>
                        <input type='checkbox' value={ramValue} onChange={() => handleRamChange(ramValue)} />
                        <span>{ramValue}</span>
                    </div>
                ))}
            </div>
            <h5>Внутренняя память</h5>
            <div className='inputWrapper'>
                {[64, 128, 256, 512, 1024].map((storageValue) => (
                    <div className="inputItem" key={storageValue}>
                        <input type='checkbox' value={storageValue} onChange={() => handleStorageChange(storageValue)} />
                        <span>{storageValue} ГБ</span>
                    </div>
                ))}
            </div> 
        </div>
    );
};

export default Filter;
