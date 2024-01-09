import React, { createContext,useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import Layout from './Components/Layout'
uuidv4()

const getItemsFromStorage=()=>{
  const user=localStorage.getItem('Register')
  if(user){
    return JSON.parse(user)
  }
  else{
    return []
  }
}
export const userContext=createContext()


const RegisterForm = () => {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [text,setText]=useState(false)
  const logout=true
  const [data, setData]=useState(getItemsFromStorage())
  const navigate=useNavigate()

  const handleUser=(e)=>{
        setEmail(e.target.value)
  }

  const handlePassword=(e)=>{
        setPassword(e.target.value)
  }
  const handleName=(e)=>{
        setName(e.target.value)
  }
  const handleAge=(e)=>{
        setAge(e.target.value)
  }
  const handleSubmit=(e)=>{
        e.preventDefault()
        setData([...data,{id:uuidv4(),name,age,email,password}])
        setText(true)
        setName('')
        setAge('')
        setEmail('')
        setPassword('')
        
  }
  useEffect(()=>{
      localStorage.setItem('Register',JSON.stringify(data))
  },[data])
const hanldeLogin=(e)=>{
    navigate('/login')
}
  return (
    <>
    <Layout logout={logout}>
    <div className='login-form'>
        <h1 className='heading'>Register</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter your name'value={name} onChange={handleName} required/>
            <input type='text' placeholder='Enter your age'value={age} onChange={handleAge} required/>
            <input type='email' placeholder='Enter your email'value={email} onChange={handleUser} required/>
            <input type='password' placeholder='Enter your Password'value={password} onChange={handlePassword} required/>
            <button className='signup-btn'>Sign Up</button><p style={{textAlign:'center',marginBottom:'10px',marginTop:'-5px',fontSize:'16px',color:'blue',fontWeight:'600'}}>OR</p><button className='signup-btn' onClick={hanldeLogin}>Login</button>
        </form>
        {text&&<p className='alert'>Thank you for registering!...Please Login</p>}
    </div>
    </Layout>

    </>
  )
}
export default RegisterForm
