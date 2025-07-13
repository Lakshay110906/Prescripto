import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';

const Sidebar = () => {
    
    const { aToken } = useContext(AdminContext);
    const{dToken} = useContext(DoctorContext)
    return (
        <div className='min-h-screen bg-white border-r'> 
            {aToken && <ul className='mt-5 text-[#515151]'>
                <NavLink className={({isActive}) => ` flex items-center px-3 py-3.5 gap-3 cursor-pointer md:px-9 md:min-w-72 ${isActive? 'border-r-4 bg-[#F2F3FF] border-primary':" "}`} to={'/admin-dashboard'}>
                    <img src={assets.home_icon} alt="" />
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>
                <NavLink className={({isActive}) => ` flex items-center px-3 py-3.5 gap-3 cursor-pointer md:px-9 md:min-w-72 ${isActive? 'border-r-4 bg-[#F2F3FF] border-primary':" "}`} to={'/all-appointment'}>
                    <img src={assets.appointment_icon} alt="" />
                    <p className='hidden md:block'> Appointments</p>
                </NavLink>
                <NavLink className={({isActive}) => ` flex items-center px-3 py-3.5 gap-3 cursor-pointer md:px-9 md:min-w-72 ${isActive? 'border-r-4 bg-[#F2F3FF] border-primary':" "}`} to={'/add-doctor'}>
                    <img src={assets.add_icon} alt="" />
                    <p className='hidden md:block'> Add Doctors</p>
                </NavLink>
                <NavLink className={({isActive}) => ` flex items-center px-3 py-3.5 gap-3 cursor-pointer md:px-9 md:min-w-72 ${isActive? 'border-r-4 bg-[#F2F3FF] border-primary':" "}`} to={'/doctor-list'}>
                    <img src={assets.people_icon} alt="" />
                    <p className='hidden md:block'>Doctors List</p>
                </NavLink>
            </ul>
            }

            {dToken && <ul className='mt-5 text-[#515151]'>
                <NavLink className={({isActive}) => ` flex items-center px-3 py-3.5 gap-3 cursor-pointer md:px-9 md:min-w-72 ${isActive? 'border-r-4 bg-[#F2F3FF] border-primary':" "}`} to={'/doctor-dashboard'}>
                    <img src={assets.home_icon} alt="" />
                    <p className='hidden md:block'>Dashboard</p>
                </NavLink>
                <NavLink className={({isActive}) => ` flex items-center px-3 py-3.5 gap-3 cursor-pointer md:px-9 md:min-w-72 ${isActive? 'border-r-4 bg-[#F2F3FF] border-primary':" "}`} to={'/doctor-appointments'}>
                    <img src={assets.appointment_icon} alt="" />
                    <p className='hidden md:block'> Appointments</p>
                </NavLink>
                <NavLink className={({isActive}) => ` flex items-center px-3 py-3.5 gap-3 cursor-pointer md:px-9 md:min-w-72 ${isActive? 'border-r-4 bg-[#F2F3FF] border-primary':" "}`} to={'/doctor-profile'}>
                    <img src={assets.people_icon} alt="" />
                    <p className='hidden md:block'>Profile</p>
                </NavLink>
                
            </ul>}
        </div>
    )
}

export default Sidebar
