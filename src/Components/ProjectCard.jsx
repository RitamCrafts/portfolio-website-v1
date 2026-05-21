import React from 'react'

function ProjectCard({project}) {
  return (
    <div className="h-full">
        <div className="rounded-2xl p-6 h-full flex flex-col transition-all hover:scale-105 group bg-slate-900/50 border border-slate-800 hover:border-slate-700">
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml text-white"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-4 text-slate-400">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                
                {
                    project.techStack.map((tech)=>(
                        <span key={tech} className="px-3 py-1 cursor-default rounded-md text-xs bg-slate-800 text-slate-300">{tech}</span>
                    ))
                }
            </div>
            <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-orange-400 hover:text-orange-300">View Project<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
        </div>
    </div>
  )
}

export default ProjectCard
