// import React from 'react'
// import Logo from '../assits/Logo.png';
// function Footer() {
//   return (
//     <div><div classNameName="bg-gray-100">
//     <div className=" pt-20 px-4 sm:px-6 bg-[#007E85] text-white flex flex-wrap justify-center flex justify-between">
       
//     <div className='flex flex-row mb-4 md:mb-0 lg:mr-16'>
//         <img className='-bottom-5 aspect-square h-14 w-14'  src={Logo} alt="daf" />
//         <div className=' text-3xl mt-2 font-bold'>Health</div>
//         <div className='  text-3xl mt-2 font-bold'>care</div>
//       </div>

//         <div className="p-5">
//             <div className="text-xs uppercase text-white font-medium">Home</div>
//             <a className="my-3 block" href="/#">Services <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">Products <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">About Us <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">Pricing <span className="text-teal-600 text-xs p-1"></span>
//             </a>
           
//         </div>
//         <div className="p-5">
//             <div className="text-xs uppercase  font-medium">Resources</div>

//             <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span>
//             </a>
            
//         </div>
//         <div className="p-5">
//             <div className="text-xs uppercase  font-medium">Support</div>

//             <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//             <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span>
//             </a>
//         </div>
      
//     </div>
// </div></div>
//   )
// }

// export default Footer
import React from 'react';
import Logo from '../assits/Logo.png';

function Footer() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="pt-20 px-4 sm:px-6 bg-[#007E85] text-white flex flex-wrap justify-center flex justify-between">
          <div className="flex flex-row mb-4 md:mb-0 lg:mr-16">
            <img className="-bottom-5 aspect-square h-14 w-14" src={Logo} alt="daf" />
            <div className="text-3xl mt-2 font-bold">Health</div>
            <div className="text-3xl mt-2 font-bold">care</div>
          </div>

          <div className="p-5">
            <div className="text-xs uppercase text-white font-medium">Home</div>
            <a className="my-3 block" href="/#">Services <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Products <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">About Us <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Pricing <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase font-medium">Resources</div>
            <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase font-medium">Support</div>
            <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5">
            <div className="text-xs uppercase font-medium">Social Media</div>
            {/* Replace with your actual social media icons and links */}
            <a className="my-3 block" href="/#"><i className="fab fa-facebook"></i> Facebook</a>
            <a className="my-3 block" href="/#"><i className="fab fa-twitter"></i> Twitter</a>
            <a className="my-3 block" href="/#"><i className="fab fa-instagram"></i> Instagram</a>
            <a className="my-3 block" href="/#"><i className="fab fa-linkedin"></i> LinkedIn</a>
            <a className="my-3 block" href="/#"><i className="fab fa-youtube"></i> YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;