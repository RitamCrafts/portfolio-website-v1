import React from 'react'
import ProjectCard from './ProjectCard'
import { useState } from 'react'

function FeaturedProjects({projects}) {
  const [showAll,setShowAll]=useState(false);
  let projectsShown= (!showAll)?projects.featured:[...projects.featured,...projects.other];
  return (
    <div id="Projects" className='scroll-mt-20'>
      <div className='mt-7 lg:mx-auto max-w-250 mx-6'>
        <div className="heading flex flex-row justify-left items-center gap-3 mb-6">
              <div className="about-me-icon bg-orange-500/10 h-12 w-12 rounded-lg flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles text-orange-500"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
              </div>
              <h1 className='text-4xl text-white font-bold '>
                  Featured Projects
              </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            
            {projectsShown.map((projectData)=>{
              return <ProjectCard project={projectData}/>
            })}
          </div>
      </div>

      <button onClick={()=>setShowAll((prev)=>!prev)} class="px-6 py-3 cursor-pointer mx-auto rounded-lg font-medium transition-all flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white mb-8">
        {(!showAll)?"View All Projects":"Show Less"}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`lucide lucide-chevron-down ${showAll ? "-rotate-z-180" : ""} transition-transform`}><path d="m6 9 6 6 6-6"></path></svg>
      </button>
    </div>
  )
}

export default FeaturedProjects
