import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality,docId}) => {

    const {doctors}=useContext(AppContext)
    const [relDoc,setRelDocs]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        if(doctors.length> 0 && speciality){
            const doctorsData=doctors.filter((doc)=> doc.speciality === speciality && doc._id !=docId)
            setRelDocs(doctorsData)

        }
        
    },[doctors,speciality,docId])

    console.log(relDoc)
  return (
    <div className='flex flex-col gap-4 items-center my-16 md:mx-10 text-gray-900'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='grid grid-cols-auto w-full gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relDoc.slice(0,5).map((item,index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`),scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500ms' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex gap-2 items-center text-center text-sm '>
                            <p className={`w-2 h-2 ${item.available? 'rounded-full bg-green-500' : "rounded-full bg-gray-500"}`}></p><p className={`${item.available?"text-green-500":"text-gray-500"}`}>{item.available? "Available":"Not available"}</p>
                        </div>
                        <p className='text-lg text-gray-900 font-medium'>{item.name}</p>
                        <p className='text-sm text-gray-600'>{item.speciality}</p>
                    </div>
                </div>

            ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className=' bg-blue-50 px-12 py-3 rounded-full mt-10 text-gray-600'>more</button>
      
    </div>
  )
}

export default RelatedDoctors
