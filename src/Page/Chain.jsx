import React from 'react'
import ChainHeader from '../components/Chain/ChainHeader'
import ChainAbout from '../components/Chain/ChainAbout'
import ChainStatsSection from '../components/Chain/ChainService'
import ChainEnd from '../components/Chain/ChainEnd'

const Chain = () => {
  return (
    <div>
      <ChainHeader />
      <ChainAbout />
      <ChainStatsSection />
      <ChainEnd />
    </div>
  )
}

export default Chain
