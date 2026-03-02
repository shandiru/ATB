import React from 'react'
import ChainHeader from '../components/Chain/ChainHeader'
import ChainAbout from '../components/Chain/ChainAbout'
import ChainStatsSection from '../components/Chain/ChainService'
import Cta from "../components/common/cta"

const Chain = () => {
  return (
    <div>
      <ChainHeader />
      <ChainAbout />
      <ChainStatsSection />
      <Cta />
    </div>
  )
}

export default Chain
