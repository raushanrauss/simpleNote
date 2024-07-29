import React from 'react';
import Button from '@material-ui/core/Button';
import {  useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate=useNavigate()

    const handleLogout = () => {
       
        localStorage.removeItem('token'); 
        navigate('/login') 
    };

    return (
        <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default LogoutButton;
