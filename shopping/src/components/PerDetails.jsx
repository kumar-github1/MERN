import React from 'react'

function PerDetails({ setUsername, setPhone, setLandmark, setAddress, handleSubmit }) {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen gap-5 '>
                <h1 className='text-3xl font-extrabold'>Details</h1>
                <label htmlFor=""></label>
                <div className='border p-8  flex flex-col gap-6 rounded-md w-88'>
                    <input type="text" className='input input-accent' placeholder='UserName' onChange={e => setUsername(e.target.value)} required />
                    <input type="text" className='input input-accent' placeholder='Phone Number' onChange={e => setPhone(e.target.value)} required />
                    <input type="text" className='input input-accent' placeholder='Address' onChange={e => setAddress(e.target.value)} required />
                    <input type="text" className='input input-accent' placeholder='LandMark' onChange={e => setLandmark(e.target.value)} required />
                    <div className='w-full text-center'>
                        <button className='btn btn-accent w-auto' onClick={handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerDetails