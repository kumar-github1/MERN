import React, { useState } from 'react'


function Register({ setMail, handle }) {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen gap-5 '>
                <h1 className='text-3xl font-extrabold'>Register</h1>
                <label htmlFor=""></label>
                <div className='border p-8  flex flex-col gap-6 rounded-md w-88'>
                    <input type="text" className='input input-accent' placeholder='Email' onChange={(e) => setMail(e.target.value)} />
                    <div className='w-full text-center'>
                        <button className='btn btn-accent w-auto' onClick={handle}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register