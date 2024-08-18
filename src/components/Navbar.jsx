
import React from 'react';
import Logo from '../assits/Logo.png';

import { useState } from 'react';
function Navbar() {
   const [showMenu , setShowMenu] = useState(false)
   const linksCss = `flex  flex-col  lg:flex-row lg:absolute lg:right-10 ${
    showMenu
      ? '       absolute z-40 max-lg:bg-gray-400/20 h-[100vh] text-center   max-lg:min-w-[100vw] m ax-lg:top-[15%]'
      : ' sm:hidden max-sm:hidden  md:hidden lg:flex max-lg:flex NAV-ANI'
  }`
  const h1 = 'text-gray-900 text-2xl mt-2 font-semibold mx-3 hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85] transition duration-500 cursor-pointer focus:text-[#007E85] focus:border-b-2';

  return (
    <nav className='mt-5 p-6  flex  flex-col justify-between lg:flex-row rounded-md z-20  mx-5'>
      <div className='flex flex-row mb-4 md:mb-0 ml-8 lg:mr-16'>
        <img className='-bottom-5' src={Logo} alt="daf" />
        <div className='text-[#007E85] mt-2 tracking-wider text-3xl font-bold'>Health</div>
        <div className='text-green-600  mt-2 tracking-wider text-3xl font-bold'>care</div>
      </div>

      <div className={ linksCss }>
        <h1 className={`${h1} mb-2 md:mb-0`}>Home</h1>
        <h1 className={h1}>Orthotist</h1>
        <h1 className={h1}>Botox</h1>
        <h1 className={h1}>Equipments</h1>
        <h1 className={h1}>Locations</h1>
        <h1 className={h1}>HomeServices</h1> 
      </div>
        <span onClick={()=>setShowMenu((showMenu)=>!showMenu)} className=' lg:hidden  md:z-30 sm:top-14 sm:right-4  max-sm:absolute max-sm:right-4 max-sm:top-11 sm:absolute md:absolute z-40 bg-gradient-to-r from-[#007E85] to-[#6EAB36] text-white cursor-pointer p-2 rounded-lg'>Menu</span>
    </nav>
  );
}

export default Navbar;





// import React from 'react'
// import Logo from '../assits/Logo.png';
// import { useState } from 'react';
// function Navbar() {

//   return (
//     <nav className='flex  h-12   flex-row justify-evenly max-w-[1200px] ' >
//      <div className='flex flex-row' >
//        <div className='' >
//       <img src={Logo} alt="logo" />
//       </div>  
//       <div className='flex flex-row'>
//       <div className='text-[#007E85] mt-2 tracking-wider text-3xl font-bold'>Health</div>
//                <div className='text-green-600  mt-2 tracking-wider text-3xl font-bold'>care</div>
//       </div>
//       </div>
//      <ul className='flex float-right gap-7' >
//       <li>Home</li>
//       <li>Orthotist</li>
//       <li>Botox</li>
//       <li>Equipments</li>
//       <li>Locations</li>
//       <li>HomeServices</li>

//      </ul>
//     </nav>
//   )
// }

// export default Navbar