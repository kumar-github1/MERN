import React, { useEffect, useReducer, useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { CartProvider, useCart } from './CartProvider'


function Cart() {
    const { removeFromCart, deleteFromCart, cartTotal, cartItems, addCart } = useCart();
    const renderQuantityControls = (item) => {
        const cartItem = cartItems.find(data => data.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        return (
            <div className="flex justify-center gap-2">
                <button
                    onClick={() => removeFromCart(item)}
                    className="btn btn-info btn-outline text-lg font-semibold w-12"
                >
                    -
                </button>
                <div className="btn btn-primary text-lg font-bold w-12">
                    {quantity}
                </div>
                <button
                    onClick={() => addCart(item)}
                    className="btn btn-info btn-outline text-lg font-bold w-12"
                >
                    +
                </button>
                {/* <button onClick={() => deleteFromCart(item)}>
                    <img src="/trash.png" className='h-7 w-7' />
                </button> */}
            </div>
        );
    };

    return (
        <>
            <NavBar />
            {/* <div>
                <h1>Your Cart</h1>
                <Link>Continue Shopping</Link>
            </div>
            <div>
                <table className='w-full'>
                    <tr >
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr className='bg-white'>
                        <td className='h-36 p-4 bg-white flex items-center justify-center'>
                            <img src={data.image} className='max-h-full max-w-full object-contain ' />
                        </td>
                        <td>
                            <div className='flex items-center justify-center gap-4'>
                                {renderQuantityControls()}
                            </div>
                        </td>
                        <td>
                            <h4 className='font-semibold text-black text-lg text-center'>${(data.price * data.quantitiy).toFixed(2)}</h4>
                        </td>
                    </tr>

                </table>
            </div> */}

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="">
                            <th className="text-left p-4">Product</th>
                            <th className="p-4">Quantity</th>
                            <th className="p-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="">
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <div className="h-24 w-24 mr-4 bg-white flex items-center justify-center">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{item.title}</h3>
                                            <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center justify-center gap-4">
                                        {renderQuantityControls(item)}
                                        <button
                                            onClick={() => deleteFromCart(item)}
                                            className="ml-4"
                                        >
                                            <img src="/trash.png" className="h-6 w-6" alt="Delete" />
                                        </button>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <h4 className="font-semibold text-lg text-center">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </h4>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8 flex justify-end">
                <div className="w-full max-w-md  p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-semibold">Subtotal:</h3>
                        <span className="text-lg">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-semibold">Shipping:</h3>
                        <span className="text-lg">Free</span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between">
                            <h3 className="text-xl font-bold">Total:</h3>
                            <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <button className="btn btn-primary w-full mt-6">
                        Proceed to Checkout
                    </button>
                </div>
            </div>

        </>
    )
}

export default Cart