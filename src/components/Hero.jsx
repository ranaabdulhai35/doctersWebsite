import React from 'react'
import heroimg from '../assits/image placeholder.png'
function hero() {
  return (
    <div><div class="relative flex flex-col items-center md:min-w-[1200px] md:max-w-[1400px] max-lg:px-4 mx-12  md:flex-row sm:px-6 p-8">
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
            <h2
                class="text-4xl font-extrabold leading-10 tracking-tight text-[#007E85] sm:text-5xl sm:leading-none md:text-5xl">
                You have lots of reasons to choose us
                
               
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>
            <div class="mt-5 sm:flex md:mt-8">
                <div class="rounded-full shadow"><a href=""
                        class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-[#007E85] transition duration-150 ease-in-out  border-transparent rounded-full  hover:bg-[#007E85] hover:text-white focus:outline-none  md:py-4 md:text-lg md:px-10">
                        Getting started
                    </a></div>
                    <div class="rounded-full shadow"><a href=""
                        class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-[#007E85] transition duration-150 ease-in-out  border-transparent rounded-full  hover:bg-[#007E85] hover:text-white focus:outline-none  md:py-4 md:text-lg md:px-10">
                        Talk to sales
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
            <div class="rounded-lg bg-white text-black w-full">
                <img src={heroimg} />
            </div>
        </div>
    </div>
</div></div>
  )
}

export default hero