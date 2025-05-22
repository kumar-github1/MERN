import React, { useEffect, useReducer, useState } from 'react'
import NavBar from './NavBar'
import Card from './Card'
import axios from 'axios'
import { useCart } from './CartProvider';

function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { cartItems, addCart } = useCart();
    async function getData() {
        setLoading(true);
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setData(response.data);
        }
        catch (error) {
            console.log("Error fetching data")
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();

    }, []);
    return (
        <div>
            <NavBar />
            {loading ? <div className='flex justify-center items-center h-screen'>
                <span className='loading loading-infinity loading-xl text-9xl'></span>
            </div> : <div className='grid grid-cols-3 gap-4 place-items-stretch'>
                {data.slice(0, 15).map((value, index) => (
                    <Card data={value} key={index} />
                ))}
            </div>}
        </div>
    )
}

export default Products