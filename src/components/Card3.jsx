// import React from 'react'

// function Card3() {
//   return (
//     <div class="max-w-screen-xl mx-auto p-16">

//     <div class="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
//         <div
//             class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
//             <div class="py-4 px-8">
//                 <img src="https://tailwindcss.com/img/jonathan.jpg" class="rounded-full h-12 w-12 mb-4"/>
//                 <a href="#">
//                     <h4 class="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
//                 </a>
//                 <p class="mb-2 text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting
//                     industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

             

                
//                 <span class="text-xs">ARTICLE</span>
//                 &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
//             </div>
//         </div>

//        </div>
//        </div>
//   )
// }

// export default Card3
import React from 'react';

const cardData = [
  {
    id: 1,
    img: 'https://tailwindcss.com/img/jonathan.jpg',
    title: 'How to be effective at working remotely?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    category: 'ARTICLE',
    subcategory: 'PROCESS',
  },
  {
    id: 2,
    img: 'https://tailwindcss.com/img/sarah.jpg',
    title: 'Top 5 Tips for Successful Content Marketing',
    description:
      'Content marketing is a powerful tool for businesses to attract and engage customers. Here are 5 tips to help you succeed.',
    category: 'MARKETING',
    subcategory: 'STRATEGY',
  },
  {
    id: 3,
    img: 'https://tailwindcss.com/img/william.jpg',
    title: 'The Importance of User Experience (UX) Design',
    description:
      'UX design focuses on creating a positive experience for users interacting with a product or service.',
    category: 'DESIGN',
    subcategory: 'FUNDAMENTALS',
  },
  {
    id: 4,
    img: 'https://tailwindcss.com/img/emily.jpg',
    title: 'Building a Strong Personal Brand Online',
    description:
      'In today\'s digital age, having a strong personal brand online can be essential for career success.',
    category: 'CAREER',
    subcategory: 'DEVELOPMENT',
  },
  {
    id: 5,
    img: 'https://tailwindcss.com/img/sophia.jpg',
    title: 'Mastering the Art of Social Media Engagement',
    description:
      'Social media engagement is key to building a following and achieving your marketing goals.',
    category: 'SOCIAL MEDIA',
    subcategory: 'ENGAGEMENT',
  },
  {
    id: 6,
    img: 'https://tailwindcss.com/img/william.jpg', // Duplicate image for demonstration
    title: 'The Power of Data-Driven Decision Making',
    description:
      'Data-driven decision making involves using data to inform your choices and strategies.',
    category: 'BUSINESS',
    subcategory: 'INSIGHTS',
  },
];

function Card3() {
  return (
   
      <div className="sm:grid lg:grid-cols-3  py-6 mt-4 pt-2 sm:grid-cols-2 gap-10 justify-items-center ">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="  transition duration-300 m-5 max-w-sm rounded-lg overflow-hidden bg-white  shadow-lg"
          >
            <div className="py-8 m-4 px-4">
              <img src={card.img} className="rounded-full h-12 w-12 mb-4" alt={card.title} />
              <a href="#">
                <h4 className="text-lg mb-3 font-semibold">{card.title}</h4>
              </a>
              <p className="mb-2 text-sm text-gray-600">{card.description}</p>

              <div className="flex mt-4 flex-col text-xs space-x-2">
                <span className="text-[#007E85] text-md  ">{card.category}</span>
                
                <span className="text-gray-500 m-0">{card.subcategory}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    
  );
}

export default Card3;