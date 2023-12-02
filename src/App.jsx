import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'
import TeaCard from './TeaCard'

function App() {
  
  const loadedteas=useLoaderData()
  const [teas,setTeas]=useState(loadedteas)

  return (
    <div className='m-20'>
    
      <h1 className='text-7xl text-center'>Hot Tea {teas.length}</h1>
     <div className='grid md:grid-cols-2 gap-4'>
     {
        teas.map(tea => <TeaCard key={tea._id} tea={tea} teas={teas}setTeas={setTeas}></TeaCard>)
      }
     </div>
   
  
    </div>
  )
}

export default App
