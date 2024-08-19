// import React from 'react';
// import Twitter from '../assits/Twitter.png'
// import Facebook from '../assits/Facebook.png'
// import Instagram from '../assits/Instagram.png'
// import Linkedin from '../assits/Linkedin.png'
// import { AllImpinfo2 } from '../Data/AllI imp data';
// function Card2() {
//   return (
//     <div className="max-w-sm  bg-white border pt-4 border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700 ">
//       {/* Profile Image */}
//       <img
//         className="w-32 h-32 rounded-full mx-auto"
//         src="https://loremflickr.com/320/320/girl"
//         alt="Profile Picture"
//       />

//       {/* Profile Details */}
//       <div className="text-sm text-center mt-5">
//         <a href="#" className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
//           Jane Doe
//         </a>
//         <p>Blogger &amp; Youtuber</p>
//       </div>

//       {/* Description */}
//       <p className="mt-2 text-sm text-center text-gray-900">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia
//         Maiores et perferendis eaque.
//       </p>

//       {/* Social Links */}
//       <div className="flex mt-4  justify-evenly ">
       
//         {/* ... other social icons */}
//         <span className='w-9 h-9'><a href="#0"><img src={Facebook} alt="" /></a></span>
//         <span className='w-9 h-9'><a href="#0"><img src={Twitter} alt="" /></a></span>
//         <span className='w-9 h-9'><a href="#0"><img src={Instagram} alt="" /></a></span>
//         <span className='w-9 h-9'><a href="#0"><img src={Linkedin} alt="" /></a></span>
//       </div>
//     </div>
//   );
// }
// export default Card2
import React from 'react';
import Twitter from '../assits/Twitter.png';
import Facebook from '../assits/Facebook.png';
import Instagram from '../assits/Instagram.png';
import Linkedin from '../assits/Linkedin.png';
import { AllImpinfo2 } from '../Data/AllI imp data';

function Card2() {
  return (
    <div className="grid grid-cols-1  justify-items-center mt-5  md:grid-cols-2 lg:grid-cols-3 gap-4">
      {AllImpinfo2.map((info) => (
        <div key={info.id} className="max-w-sm p-8  relative bg-white border pt-4 w-card h-card border-gray-200 rounded-lg shadow ">
          {/* Profile Image */}
          <img
            className="w-40 mb-7 h-40 rounded-full mx-auto"
            src={info.img}
            alt="Profile Picture"
          />

          {/* Profile Details */}
          <div className="text-sm text-center mb-16 mt-5">
            <a href="#" className="   text-xl font-bold hover:text-indigo-600 text-theme1 leading-relaxed mb-6  transition duration-500 ease-in-out">
              {info.profileName}
            </a>
            
          </div>

          {/* Description */}
          <p className="mt-2 text-md text-center   text-gray-900">
            {info.description}
          </p>

          {/* Social Links */}
          <div className="flex mt-4 pb-4 absolute left-1/2 -translate-x-1/2 bottom-7 justify-center ">
            <span className="w-9 m-1 h-9">
              <a href="#0">
                <img src={Facebook} alt="" />
              </a>
            </span>
            <span className="w-9 h-9 m-1">
              <a href="#0">
                <img src={Twitter} alt="" />
              </a>
            </span>
            <span className="w-9 h-9 m-1">
              <a href="#0">
                <img src={Instagram} alt="" />
              </a>
            </span>
            <span className="w-9 h-9 m-1">
              <a href="#0">
                <img src={Linkedin} alt="" />
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card2;