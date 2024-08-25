import React from 'react'
import heroBotox from '../assits/BotoxHero.png'
function BotoxHero() {
  return (
    <div>         
         <div className='w-[100%] flex items-center justify-evenly max-lg:flex-col-reverse flex-row max-lg:h-auto h-[528px] bg-[#016A70]  ' >
    <div className='text-3xl text-white '> Where can i find a <span className='font-bold' >specialist?</span> 
    <p className='w-[40ch] text-sm ' > BOTOX® Specialists are doctors 
        who are experienced in treating Chronic Migraine with BOTOX® to prevent headaches and migraine attacks
         before they even start.*</p>

         <div className='mt-6' >

         <button className='bg-theme1 p-1 text-white w-[210px] h-[51px] rounded-lg ' >appointment</button>
         <button className='bg-transparent text-white border-2 p-1 border-white    rounded-md sm:ml-2 w-[210px] h-[51px]' >Learn More </button>

         </div>
    </div>
    <div>
        <img className='w-[595px] h-[350px] ' src={ heroBotox} alt="HeroBotox" />
    </div>

</div></div>
  )
}

export default BotoxHero