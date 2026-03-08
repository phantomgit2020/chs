import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Noticias from '../views/Present/Noticias'

const page = () => {
  return (
    <div>
      <Navbar />
      <Noticias />
      <Footer />
    </div>
  )
}

export default page
