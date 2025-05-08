import React from 'react'

function Ratings() {
    return (
        <div>
            <div className="rating rating-lg rating-half">
                <input type="radio" name="rating-11" className="rating-hidden" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-blue-500" aria-label="0.5 star" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-blue-500" aria-label="1 star" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-blue-500" aria-label="1.5 star" defaultChecked />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-blue-500" aria-label="2 star" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-blue-500" aria-label="2.5 star" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-blue-500" aria-label="3 star" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-blue-500" aria-label="3.5 star" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-blue-500" aria-label="4 star" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-blue-500" aria-label="4.5 star" />
                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-blue-500" aria-label="5 star" />
            </div>
        </div>
    )
}

export default Ratings