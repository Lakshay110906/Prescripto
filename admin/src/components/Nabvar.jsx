import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Nabvar = () => {

    const{aToken,setAToken} =useContext(AdminContext)
    const{dToken,setDToken} = useContext(DoctorContext)
    const navigate = useNavigate();

    const logout = ()=>{
        navigate('/')
        aToken&& setAToken("")
        aToken && localStorage.removeItem('aToken')

        navigate('/')
        dToken&& setDToken("")
        dToken && localStorage.removeItem('dToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
        <div className='flex items-center gap-2 text-xs' >
            <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
            <p className='border border-gray-500 text-gray-500 py-0.5 px-2.5 rounded-full '>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
        
        <button onClick={logout} className='rounded-full px-8 py-2 text-sm  bg-primary text-white'>Logout</button>
      
    </div>
  )
}

export default Nabvar

