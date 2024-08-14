
import React from 'react';
import Logo from '../assits/Logo.jpg';
import { useState } from 'react';
function Navbar() {
   const [showMenu , setShowMenu] = useState(false)
   const linksCss = `flex  flex-col lg:flex-row lg:absolute lg:right-10 filter  ${
    showMenu
      ? '   bg-green-500/5 z-20 '
      : ' sm:hidden max-sm:hidden md:hidden lg:flex max-lg:flex NAV-ANI'
  }`
  const h1 = 'text-gray-900 text-2xl font-semibold mx-3 hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85] transition duration-500 cursor-pointer focus:text-[#007E85] focus:border-b-2';

  return (
    <nav className='mt-5 p-6 flex flex-col lg:flex-row rounded-md z-20  mx-5'>
      <div className='flex flex-row mb-4 md:mb-0 lg:mr-16'>
        <img className='-bottom-5' src={Logo} alt="daf" />
        <div className='text-[#007E85] text-3xl font-bold'>Health</div>
        <div className='text-green-600  text-3xl font-bold'>care</div>
      </div>

      <div className={ linksCss }>
        <h1 className={`${h1} mb-2 md:mb-0`
      }>Home</h1>
        <h1 className={h1}>Orthotist</h1>
        <h1 className={h1}>Botox</h1>
        <h1 className={h1}>Equipments</h1>
        <h1 className={h1}>Locations</h1>
        <h1 className={h1}>HomeServices</h1> 
      </div>
        <span onClick={()=>setShowMenu((showMenu)=>!showMenu)} className=' lg:hidden  md:z-30 sm:top-12 sm:right-4  max-sm:absolute max-sm:right-4 max-sm:top-12 sm:absolute md:absolute'>Menu</span>
    </nav>
  );
}

export default Navbar;
