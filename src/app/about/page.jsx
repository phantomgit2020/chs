import React from 'react'
import Candidato from '../views/About/Candidato'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Candidato />
      <Footer />
    </div>
  )
}

export default page
