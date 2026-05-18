import { useState } from 'react'
import DefaultCard from './Components/DefaultCard'
import data from './data'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {


  return (
    <> 
      <div className="Portfolio bg-[#0f1419] text-slate-400 min-h-screen w-full pt-20 overflow-hidden">
        <DefaultCard type={"introCard"} data={data}/>
        <br/>
        <DefaultCard type={"aboutMe"} data={data}/>
        <DefaultCard type={"skills"} data={data}/>
        <Projects projects={data.projects}/>
        <DefaultCard type={"education"} data={data}/>
        <div className='mb-13'/>
        <Footer/>
      </div>
    </>
  )
}

export default App
