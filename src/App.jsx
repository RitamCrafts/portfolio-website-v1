import { useState } from 'react'
import DefaultCard from './Components/DefaultCard'
import data from './data'

function App() {


  return (
    <> 
      <div className="Portfolio bg-[#0f1419] text-slate-400 min-h-screen w-full pt-20">
        <DefaultCard type={"introCard"} data={data}/>
        <DefaultCard type={"aboutMe"} data={data}/>
        <DefaultCard type={"skills"} data={data}/>
      </div>
    </>
  )
}

export default App
