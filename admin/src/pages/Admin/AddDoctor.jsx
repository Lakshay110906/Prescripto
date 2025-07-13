import React, { useContext, useState } from 'react'
import { Form } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import {toast} from "react-toastify"
import axios from "axios"
const AddDoctor = () => {
  const[docImg,setDocImg]=useState(false)
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[experience,setExpreience]=useState('1 Year')
  const[fees,setFees]=useState('')
  const[about,setAbout]=useState('')
  const[speciality,setSpeciality]=useState('General physician')
  const[degree,setDegree]=useState('')
  const[address1,setAddress1]=useState('')
  const[address2,setAddress2]=useState('')

  const{backendUrl,aToken} =useContext(AdminContext)

  const onSumbitHandler =async(event)=>{
    event.preventDefault();

    try {

      if(!docImg){
        return toast.error("Image not selected")
      }
      const formData= new FormData()   
      formData.append('image',docImg) 
      formData.append('name',name) 
      formData.append('email',email) 
      formData.append('password',password) 
      formData.append('experience',experience) 
      formData.append('fees',Number(fees)) 
      formData.append('about',about) 
      formData.append('degree',degree) 
      formData.append('speciality',speciality) 
      formData.append('address',JSON.stringify({line1:address1,line2:address2})) 

      //console log formdata
      formData.forEach((value,key)=>{
        console.log(`${key}:${value}`);
      })

      const {data} = await axios.post(backendUrl+'/api/admin/add-doctor',formData,{headers:{aToken}})

      if(data.success){
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setDegree('')
        setAbout('')
        setFees('')
        setAddress1('')
        setAddress2('')
      }
      else{
        toast.error(data.message)
      }

      
    } catch (error) {
      toast.error(error.message)
      console.log(error)
      
    }
  }

  return (
    <form onSubmit={onSumbitHandler} className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>
      <div className='bg-white px-8 py-8  border rounded  w-full  max-w-4xl max-h-[84vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg): assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p>Upload doctor <br />picture</p>
        </div>
        <div className='flex flex-col gap-10 lg:flex-row items-start text-gray-600'>
          <div className='flex flex-col gap-4 lg:flex-1 w-full'>
            <div className='flex flex-col gap-1 flex-1'>
              <p>Doctor name</p>
              <input onChange={(e)=>setName(e.target.value)} value={name} className='border rounded px-3 py-2' type="text" placeholder='Name' required />
            </div>
            <div className='flex flex-col gap-1 flex-1'>
              <p>Doctor email</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border rounded px-3 py-2' type="email" placeholder='Email' required />
            </div>
            <div className='flex flex-col gap-1 flex-1'>
              <p>Doctor password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border rounded px-3 py-2' type="password" placeholder='Password' required />
            </div>
            <div className='flex flex-col gap-1 flex-1'>
              <p>Experience</p>
              <select onChange={(e)=>setExpreience(e.target.value)} value={experience} className='border rounded px-3 py-2' name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>
            <div className='flex flex-col gap-1 flex-1'>
              <p>Fees</p>
              <input onChange={(e)=>setFees(e.target.value)} value={fees} className='border rounded px-3 py-2' type="number" placeholder='fees' name="" id="" />
            </div>
          </div>
          <div className='flex flex-col gap-4 lg:flex-1 w-full'>
            <div className='flex flex-col gap-1 flex-1'>
              <p>Speciality</p>
              <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2' name="" id="">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex flex-col gap-1 flex-1'>
              <p>Education</p>
              <input onChange={(e)=>setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2' type="text" placeholder='Education' name="" id="" />
            </div>
            <div className='flex flex-col gap-1 flex-1'>
              <p>Address</p>
              <input onChange={(e)=>setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2' type="text" placeholder='address 1' name="" id="" />
              <input onChange={(e)=>setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2' type="text" placeholder='address 2' name="" id="" />
            </div>

          </div>
        </div>

        <div>
          <p className='mt-4 mb-2 '>About Doctor</p>
          <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='rounded w-full px-4 pt-2 border ' rows={5} placeholder='write about doctor'></textarea>
        </div>
        <button type='submit' className='bg-primary mt-4 px-10 py-3 rounded-full text-white '>Add Doctor</button>
      </div>

    </form>
  )
}

export default AddDoctor
