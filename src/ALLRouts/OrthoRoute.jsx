import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
function OrthoRoute() {
  return (
    <div className="h-screen w-full">
        <Navbar />
    <div className="h-[733px] ortho1 flex items-center md:h-1/2">
      <div className='ml-7'><h2 className='text-5xl text-white font-bold' >
      Bringing individualized  <br /><span className='text-[#007E85] ' >Healthcare</span>  
        </h2> 
        <br />
        <button className='bg-[#007E85] p-2 px-4 text-xl text-white rounded-lg border-2 border-[#007E85] ' >Appointments</button> 
        <button className='bg-transparent text-white text-xl border-2 ml-3 p-2 px-7 rounded-lg' >Learn More</button>
        </div>
    </div>
    <Footer/> 
  </div>
  )
}

export default OrthoRoute