import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        setCartTotal(cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0));
    }, [cartItems])
    const addCart = (product) => {
        setCartItems(prev => {
            return prev.some(item => item.id === product.id) ?
                prev.map(item => (
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ))
                : [...prev, { ...product, quantity: 1 }]

        })
    }

    const removeFromCart = (product) => {
        setCartItems(prev => {
            return prev.map(item => (
                item.id === product.id
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity }
                    : item
            )).filter(item => item.quantity > 0);
        })
    }
    const deleteFromCart = (product) => {
        setCartItems(prev => {
            return prev.filter(item => product.id !== item.id);
        })
    }


    return (
        <CartContext.Provider value={{ cartTotal, removeFromCart, deleteFromCart, cartItems, addCart }}>
            {children}
        </CartContext.Provider>
    );

};

export const useCart = () => useContext(CartContext);