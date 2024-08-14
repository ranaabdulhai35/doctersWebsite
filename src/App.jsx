import React from 'react'
import Navbar from './components/Navbar'
import HomeCoponent from './components/HomeCoponent'
import Stats from './components/Stats'
import Card1 from './components/Card1'
import Hero from './components/Hero'
function App() {
  return (
    <div  className='max-h-screen'>
      <Navbar/>
      <HomeCoponent/>
      <Stats/>
      <Hero/>
      <Card1/>
    </div>
  )
}

export default App