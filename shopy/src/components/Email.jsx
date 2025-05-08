import React from 'react'

function Email({ setPage }) {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='border p-8 rounded  flex flex-col justify-center items-center gap-4 w-2/3'>
                <input placeholder="Email" className='input input-secondary' type="text" />
                <button onClick={() => setPage(1)} className='btn btn-primary  '>Next</button>
            </div>
        </div >
    )
}

export default Email