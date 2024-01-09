import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from './Components/Layout'


const Login = () => {
    const users=JSON.parse(localStorage.getItem('Register'))
    const [mail,setMail]=useState('')
    const [pass,SetPass]=useState('')
    const [user,setUser]=useState()
    const [name,setName]=useState("user")
    const [noUser,setNoUser]=useState(false)
        const logout=true
    const navigate=useNavigate()
    const handleEmail=(e)=>{
        setMail(e.target.value)
    }
    const handlePassword=(e)=>{
        SetPass(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
           let i;
        for(i=0;i<users.length;i++){
            if(users[i].email===mail && users[i].password===pass){
                    setUser(true)
                    setName(users[i].name)
                    setTimeout(()=>{navigate('/home')},1500)
                    setNoUser(false)
                    break;
                }
                else{
                    setNoUser(true)
                    continue
                }
            }
        
            }
    return (
        <>
        <Layout logout={logout}>
        <div className='login-form'>
            <h1 className='heading'>Login</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter your email'onChange={handleEmail} required/>
            <input type='password' placeholder='Enter your Password'onChange={handlePassword}required/>
            <button className='signup-btn'>Login</button>
            {user&&<p className='alert' style={{color:'green'}}>Welcome {name}!!!</p>}
            {noUser&&<p className='alert' style={{color:'red'}}>Invalid user or password</p>}
        </form>
        </div>
        </Layout>
        </>
        )
        }

export default Login