import React from 'react'

function UserName({ setPage }) {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='border  p-8 rounded flex flex-col justify-center gap-4'>
                <input placeholder="UserName" className='input input-secondary' type="text" />
                <button className='btn btn-primary'>Next</button>
            </div>
        </div >
    )
}

export default UserName