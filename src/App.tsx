import React from 'react'
import CinematicBloom from './components/CinematicBloom'
import DailyVitrineGallery from './components/DailyVitrineGallery'
import { items } from './data/vitrineItems'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <CinematicBloom />
      <DailyVitrineGallery items={items} />
    </div>
  )
}

export default App
