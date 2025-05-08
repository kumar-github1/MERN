import React, { useState } from 'react'
import Register from './components/Register';
import PerDetails from './components/PerDetails';
import { useNavigate } from 'react-router-dom';
function Shopping() {
    const [page, setPage] = useState(0);
    const [mail, setMail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const navigate = useNavigate();
    function isValid(mail) {
        const regex = /^[a-zA-Z0-9._%+-]+@gct\.ac\.in$/;
        if (regex.test(mail)) {
            return true;
        }
        else {
            return false;
        }
    }
    function isDetailsValid() {
        const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        const phoneRegex = /^[0-9]{10}$/;
        if (usernameRegex.test(username) && phoneRegex.test(phone)) {
            return true;
        }
        else {
            alert("Enter the Valid Details")
            return false;
        }
    }

    function handlePageChange() {
        if (isValid(mail)) {
            setPage(1);
        }
        else {
            alert("Enter a valid Email")
        }
    }
    function handleSubmit() {
        if (isDetailsValid()) {
            navigate("/products")
        }
    }
    return (
        <>
            {page == 0 && <Register setMail={setMail} handle={handlePageChange} /> || page == 1 && <PerDetails setAddress={setAddress} setLandmark={setLandmark} setPhone={setPhone} setUsername={setUsername} handleSubmit={handleSubmit} />}
        </>
    )
}

export default Shopping