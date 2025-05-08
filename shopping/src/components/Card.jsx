import { React, useReducer } from 'react';
import Ratings from './Ratings';

// Initial state for the reducer
const initialState = { count: 0 };

// Reducer function to manage the state
function reducer(state, action) {
    switch (action.type) {
        case "+":
            return { count: state.count + 1 };
        case "-":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

// Card Component
function Card({ data }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Render Buy Now Button
    const renderBuyNowButton = () => {
        return (
            <button
                onClick={() => dispatch({ type: "+" })}
                className="btn btn-info text-white w-full max-w-xs mx-auto block font-medium"
            >
                Buy Now
            </button>
        );
    };

    // Render Quantity Controls
    const renderQuantityControls = () => {
        return (
            <div className="flex justify-center gap-2 w-full">
                <button
                    onClick={() => dispatch({ type: "-" })}
                    className="btn btn-info btn-outline text-lg font-semibold w-12"
                >
                    -
                </button>
                <div className="btn btn-primary text-lg font-bold w-12">
                    {state.count}
                </div>
                <button
                    onClick={() => dispatch({ type: "+" })}
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
                {/* Image Section */}
                <div className="bg-[#f4f4f4] rounded-t-lg p-4 h-48 flex items-center justify-center">
                    <img
                        src={data.image}
                        className="max-h-full max-w-full object-contain"
                        alt={data.title}
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-4 justify-between">
                    {/* Product Title and Price */}
                    <div>
                        <h1 className="text-xl text-white font-bold mb-1 text-center">
                            {data.title.split(" ")[0] + " " + data.title.split(" ")[1]}
                        </h1>
                        <h2 className="text-xl text-white mb-2 text-center">
                            ${data.price}
                        </h2>
                    </div>

                    {/* Ratings Section */}
                    <div className="flex justify-center mb-4">
                        <Ratings />
                    </div>

                    {/* Buy Now Button or Quantity Controls */}
                    <div className="mt-auto">
                        {state.count === 0 ? renderBuyNowButton() : renderQuantityControls()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;