import React from 'react'
import HeroCarosal from '../components/HeroCarosal'
import Category from '../components/Category'
import MiddBanner from '../components/MiddBanner'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
      <HeroCarosal/>
      <Category/>
      <MiddBanner/>
      <Features/>
    </div>
  )
}

export default Home