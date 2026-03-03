import React from 'react'
import MotHeader from '../components/Mot/MotHeader'
import Cta from "../components/Mot/MotEnd"
import MotStatsSection from '../components/Mot/MotService'
import MotAbout from '../components/Mot/MotAbout'

const Mot = () => {
  return (
    <div>
      <MotHeader />
      <MotAbout />
      <MotStatsSection />
      <Cta />
    </div>
  )
}

export default Mot
