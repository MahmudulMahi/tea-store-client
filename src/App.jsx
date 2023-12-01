import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'
import TeaCard from './TeaCard'

function App() {
  
  const teas=useLoaderData()

  return (
    <>
    
      <h1 className='text-7xl'>Hot Tea {teas.length}</h1>
      {
        teas.map(tea => <TeaCard key={tea._id} tea={tea}></TeaCard>)
      }
   
  
    </>
  )
}

export default App
