import React, { useState } from 'react'
import Email from './Email'
import UserName from './UserName';

function Register() {
    const [page, setPage] = useState(0);
    return (
        <>
            {page == 0 && <Email setPage={setPage} /> || page == 1 && <UserName setPage={setPage} />
            }
        </>
    )
}

export default Register