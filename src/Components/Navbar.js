import React from 'react'
import {  useNavigate } from 'react-router-dom'
import '../Navbar.css'



const Navbar = ({logout}) => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        navigate('/')
    }
  return (
    <header>
        <nav>
            <ul>
                <button onClick={handleLogout} className={`${logout?'logout':'login'}`}>Logout</button>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar