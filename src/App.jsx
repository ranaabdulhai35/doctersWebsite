import React from 'react'
import Navbar from './components/Navbar'
import HomeCoponent from './components/HomeCoponent'
import Stats from './components/Stats'
import Card1 from './components/Card1'
import Hero from './components/Hero'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import SearchBar from './components/SearchBar'
import Footer from './components/footer'
function App() {
  return (
    <div  className='max-h-screen'>
      <Navbar/>
      <HomeCoponent/>
      <Stats/>
      <Hero/>
      <div className='text-center' > <h2 className='text-2xl text-[#007E85] font-bold' >Services we provide </h2>
      <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid at rem quibusdam! Quis distinctio iure corporis iste voluptates, voluptas nemo ex eaque? </p>
      </div>
      <Card1/>
      <div className='text-center my-20' > <h2 className='text-2xl text-[#007E85] font-bold' >meet our previous clints </h2>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid at rem quibusdam! Quis distinctio iure corporis iste voluptates, voluptas nemo ex eaque? </p>
      </div>
      <Card2/>
      <div className='text-center my-20' > <h2 className='text-2xl text-[#007E85] font-bold' >Testimonial </h2>
      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid at rem quibusdam! Quis distinctio iure corporis iste voluptates, voluptas nemo ex eaque? </p>
      </div>
      <Card3/>
      <SearchBar/>
      <Footer/>
    </div>
  )
}

export default App