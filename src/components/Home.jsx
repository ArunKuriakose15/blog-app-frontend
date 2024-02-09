import React from 'react'
import NavBar from './NavBar'

const Home = () => {
    const backgroundStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
  return (
    
    <div className='home-background'>
        <NavBar/>
    </div>
  )
}

export default Home