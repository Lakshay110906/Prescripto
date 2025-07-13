import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DoctorContext } from '../context/DoctorContext';

const Login = () => {
    const [state, setState] = useState('Admin');
    const[email,setEmail]=useState('')
    const [password,setPassword] =useState('')
    const {setAToken,backendUrl} =useContext(AdminContext)
    const{setDToken} = useContext(DoctorContext)

    const onSumbitHandler = async(event)=>{
        event.preventDefault()

        try {
            if(state ==='Admin'){
                 const {data} = await axios.post(backendUrl + '/api/admin/login',{email,password})
                 if(data.success){
                    localStorage.setItem('aToken',data.token)
                    setAToken(data.token)
                 }   
                 else{
                    toast.error(data.message)
                 }

            }
            else{
                const{data} = await axios.post(backendUrl +'/api/doctor/login',{email,password})
                if(data.success){
                    localStorage.setItem('dToken',data.token)
                    setDToken(data.token)
                    console.log(data.token)
                }
                else{
                    toast.error(data.message)
                }
            }

            
        } catch (error) {
           toast.error(error.message)
        }

    }

    return (
        
            <form onSubmit={onSumbitHandler} className="min-h-[80vh] flex items-center">
                <div className='flex flex-col items-start m-auto min-w-[340px] sm:min-w-96  gap-3 p-8 border rounded-xl shadow-lg text-sm text-[#5E5E5E]'>
                    <p className='text-2xl font-semibold m-auto '><span className='text-primary'>{state}</span> Login</p>
                    <div className='w-full'>
                        <p>Email</p>
                        <input onChange={(e)=> setEmail(e.target.value)} value={email} className='p-2 mt-1 border border-[#DADADA] w-full  rounded' type="email" required />
                    </div>
                    <div className='w-full'>
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='p-2 mt-1 border border-[#DADADA] w-full rounded' type="password" required />
                    </div>
                    <button className='bg-primary text-base w-full rounded-md py-2 text-white'>Login</button>
                    {
                        state==='Admin' ?
                        <p>Doctor login?  <span onClick={()=> setState('Doctor')}  className='cursor-pointer underline text-primary'>Click here</span></p> : <p>Admin login? <span onClick={()=> setState('Admin')} className='cursor-pointer underline text-primary'>Click here</span></p>
                    }
                </div>
            </form>
        
    )
}

export default Login
