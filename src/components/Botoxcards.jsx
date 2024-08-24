import React from 'react'
import { BotoxCard } from '../Data/AllI imp data'
function Botoxcards() {
  return (
    

    <div>
        <h2><span className='text-xl text-black ' >Features</span> <span className='text-xl text-theme1' >Services</span> </h2>

        <div className='flex items-center justify-center' >

        <div className='grid grid-cols-3 max-w-[1200px] justify-items-center gap-3 ' >

        {BotoxCard.map((curr ,i , all)=> {
            return <div className='relative  ' > <img src={curr.img} alt={curr.txt} className='rounded-xl' />  
            <div className='absolute z-[2] text-white text-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 '  >{curr.txt.toUpperCase()}</div>
            
            </div>
        })}

        </div>
       
        </div>
    </div>
  )
}

export default Botoxcards