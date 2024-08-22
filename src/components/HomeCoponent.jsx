import React from 'react'

import doctor from '../assits/doctor.png'
import Aftar from './Aftar'
function HomeCoponent() {
  return (
    <div className='flex flex-col mt-12 justify-center font-latoN items-center'>
    <div className='flex lg:flex-row flex-col-reverse min-w-[1200px] max-w-[1400px] items-center justify-between  main-box gap-[2rem]' >
    <div  className=' max-w-[457px] top-64   left-20'><h3 className='text-2xl font-semibold'>Providing Quality <span className='text-[#007E85] text-2xl font-semibold'>Healthcare</span> for A <br /> <span className='text-green-600 text-2xl  font-semibold' >Brighter</span> and <span  className='text-green-600 text-2xl  font-semibold'>Healthy </span> future</h3>
    <div className=' w-[500] text-sm '>
    At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
    </div>
    <button className='bg-[#007E85]  text-white rounded-sm p-1 mt-6 px-10'>Appointment</button>
    </div>
    <div className='right-5  w-[40%] vector h-[40%] flex justify-center flex-row  bg-no-repeat  '>
    <div className='z-[11] translate-y-[70%]   left-1   ' >
      <Aftar />
    </div>
   
    <img className='relative -top-10'  src={doctor} alt="" />

    <div  className='text-[#007E85] text-xl absolute translate-x-[100%]  p-2 hover:scale-105 z-[12] translate-y-[100%] bg-white rounded-sm' > <span  > 24/7</span> services </div>
</div>

   
    </div>
    {/* 2nd compo */}
    <div className='flex lg:flex-row-reverse mt-12 min-w-[1200px] max-w-[1240px] flex-col-reverse items-center justify-between gap-[2rem]' >
    <div  className=' max-w-[457px] top-64   left-20'><h3 className='text-2xl font-semibold'>Providing Quality <span className='text-[#007E85] text-2xl font-semibold'>Healthcare</span> for A <br /> <span className='text-green-600 text-2xl  font-semibold' >Brighter</span> and <span  className='text-green-600 text-2xl  font-semibold'>Healthy </span> future</h3>
    <div className=' w-[500] text-sm '>
    At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry
    </div>
    <button className='bg-[#007E85]  text-white rounded-sm p-1 mt-6 px-10'>Appointment</button>
    </div>
    <div className='right-5  w-[40%]  vector h-[40%] flex justify-center flex-row  bg-no-repeat  '>
    <div className='z-[11] translate-y-[70%]   left-1   ' >
      <Aftar />
    </div>
   
    <img className='relative -top-10'  src={doctor} alt="" />

    <div  className='text-[#007E85] text-xl absolute translate-x-[100%]  p-2 hover:scale-105 z-[12] translate-y-[100%] bg-white rounded-sm' > <span  > 24/7</span> services </div>
</div>

   
    </div>
    </div>
  )
}

export default HomeCoponent