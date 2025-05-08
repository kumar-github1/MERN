import React, { useEffect, useState } from 'react'
import './styles/card.css';
function Card() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setData(json);
            }
            )
            .catch(err => console.log(err))
    }, []
    )
    console.log(data);
    return (
        <div className='wrapper'>{
            data.map((res) => (<div className='container'>
                <img src={res.image} alt={res.title} />
                <div>
                    <h2>{res.title}</h2>
                    <button className='addtocart'>+ Add to Cart</button>
                </div>
            </div>))}
        </div>
    )
}

export default Card