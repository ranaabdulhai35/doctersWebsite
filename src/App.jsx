import React from 'react'
import Navbar from './components/Navbar'
import HomeCoponent from './components/HomeCoponent'
import Stats from './components/Stats'
import Card1 from './components/Card1'
import Hero from './components/Hero'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import SearchBar from './components/SearchBar'
function App() {
  return (
    <div  className='max-h-screen'>
      <Navbar/>
      <HomeCoponent/>
      <Stats/>
      <Hero/>
      <Card1/>
      <Card2/>
      <Card3/>
      <SearchBar/>
    </div>
  )
}

export default App