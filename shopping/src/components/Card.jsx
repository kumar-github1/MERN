import { React } from 'react';
import Ratings from './Ratings';
import { useCart } from './CartProvider';

function Card({ data }) {
    const { cartItems, removeFromCart, addCart } = useCart();
    const cartItem = cartItems.find(item => item.id === data.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    // console.log(quantity);
    const renderBuyNowButton = () => {
        return (
            <button
                onClick={() => addCart(data)}
                className="btn btn-info text-white w-full max-w-xs mx-auto block font-medium"
            >
                Buy Now
            </button>
        );
    };


    const renderQuantityControls = () => {
        return (
            <div className="flex justify-center gap-2 w-full">
                <button
                    onClick={() => removeFromCart(data)}
                    className="btn btn-info btn-outline text-lg font-semibold w-12"
                >
                    -
                </button>
                <div className="btn btn-primary text-lg font-bold w-12">
                    {quantity}
                </div>
                <button
                    onClick={() => addCart(data)}
                    className="btn btn-info btn-outline text-lg font-bold w-12"
                >
                    +
                </button>
            </div>
        );
    };

    return (
        <div className="p-4">
            <div className="bg-[#1a385a] rounded-lg flex flex-col h-[400px] overflow-hidden">

                <div className="bg-[#f4f4f4] rounded-t-lg p-4 h-48 flex items-center justify-center">
                    <img
                        src={data.image}
                        className="max-h-full max-w-full object-contain"
                        alt={data.title}
                    />
                </div>


                <div className="flex flex-col flex-grow p-4 justify-between">

                    <div>
                        <h1 className="text-xl text-white font-bold mb-1 text-center">
                            {data.title.split(" ")[0] + " " + data.title.split(" ")[1]}
                        </h1>
                        <h2 className="text-xl text-white mb-2 text-center">
                            ${data.price}
                        </h2>
                    </div>


                    <div className="flex justify-center mb-4">
                        <Ratings />
                    </div>


                    <div className="mt-auto">
                        {quantity === 0 ? renderBuyNowButton() : renderQuantityControls()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;