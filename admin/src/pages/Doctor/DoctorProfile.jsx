import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData,backendUrl } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)

  const updateProfile = async()=>{
    try {
      const updateData ={
        fees:profileData.fees,
        available:profileData.available,
        address:profileData.address
      }
      const{data} = await axios.post(backendUrl + '/api/doctor/update-profile',updateData,{headers:{dToken}})
      if(data.success){
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const[isEdit,setIsEdit] = useState(false)
  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])
  return profileData && (
    <div>
      <div className='flex flex-col m-5 gap-4'>
        <div>
          <img className='bg-primary/80 w-full sm:max-w-64 rounded-lg' src={profileData.image} alt="" />
        </div>
        <div className=' border border-stone-100 flex-1 p-8 py-7 rounded-lg bg-white'>
          <p className='flex items-center text-gray-700 text-3xl font-medium gap-2'>{profileData.name}</p>
          <div className='flex items-center mt-1 text-gray-600 gap-2'>
            <p>{profileData.degree} - {profileData.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full '>{profileData.experience}</button>
          </div>

          <div>
            <p  className='flex items-center text-neutral-800 text-sm font-medium gap-1  mt-3'>About:</p>
            <p className='text-sm mt-1 max-w-[700px] text-gray-600'>{profileData.about}</p>
          </div>
          <p className='text-gray-600 font-medium mt-4'>Appointment Fee : <span className='text-gray-800 '>{currency}{isEdit?<input type="Number" onChange={(e)=>setProfileData(prev=>({...prev,fees:e.target.value}))} value={profileData.fees}/>:profileData.fees}</span></p>
          <div className='flex gap-2 py-2'>
            <p>Address:</p>
            <p  className='text-sm'>{isEdit? <input type="text" onChange={(e)=>setProfileData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} value={profileData.address.line1} />:profileData.address.line1}
              <br />
              {isEdit? <input type="text" onChange={(e)=>setProfileData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} value={profileData.address.line2}   />:profileData.address.line2}
            </p>


          </div>

          <div className='flex gap-1 pt-2'>
            <input onChange={()=>isEdit && setProfileData(prev=>({...prev,available:!prev.available}))} checked={profileData.available} type="checkbox" />
            <label htmlFor="">Available</label>
          </div>
          {isEdit ? <button onClick={updateProfile} className='px-4 py-1 border border-primary mt-5 text-sm rounded-full hover:bg-primary hover:text-white transition-all'>Save</button>:<button onClick={()=>setIsEdit(true)} className='px-4 py-1 border border-primary mt-5 text-sm rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>}
          
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
