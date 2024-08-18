// import React from 'react'
// import AllImpinfo from '../Data/AllI imp data'
// function Card1() {
//   return (
//     <div>
// <div>
    

// <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img ckassName="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
//     </a>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//             Read more
//              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>
//     </div>
// </div>

// </div>
//     </div>
//   )
// }

// export default Card1
import React from 'react';
import AllImpinfo from '../Data/AllI imp data'; // Assuming correct import path

function Card1({ data }) {
  return (
    <div className="max-w-sm  p-3 bg-white border relative w-96 h-[500px] border-gray-200 rounded-lg shadow items-center ">
      <a className='flex justify-center' href="#">
        <img className="rounded-t-lg  " src={data.image} alt={data.name} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#007E85] ">{data.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description || 'Brief description'}</p>
        {/* Add a button or link here if needed */}
        <a href="#" className="inline-flex items-center px-3 py-2 te text-xl text-center text-[#007E85]  hfocus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 absolute left-[5rem] font-bold -translate-x-1/2 bottom-8 dark:focus:ring-blue-800">
             Read more    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    

    <div className="grid xl:grid-cols-3 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  justify-items-center gap-y-4">
      {AllImpinfo.map((item) => (
        <Card1 key={item.id} data={item} />
      ))}
    </div>
  );
}

export default CardGrid;
