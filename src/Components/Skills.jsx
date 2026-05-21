import React from 'react'
import CoreSkillCard from './CoreSkillCard'
import AdditionalSkillCard from './AdditionalSkillCard'

function Skills({data}) {
  return (
    <div id="Skills" className='scroll-mt-28'>
        <div className="heading flex flex-row justify-left items-center gap-3 mb-7">
            <div className="about-me-icon bg-blue-500/10 h-12 w-12 rounded-lg flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml text-blue-500" data-fg-d3bl150="0.8:43.2159:/src/app/App.tsx:483:15:21464:45:e:Code2::::::Oap" data-fgid-d3bl150=":r1t:"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
            </div>
            <h1 className='text-4xl text-white font-bold '>
                Skills
            </h1>
        </div>


        <div className="core flex flex-col mb-6">
            <div className='core-heading flex gap-2 mb-4'>
                <div className="about-me-icon bg-orange-500/20 h-8 w-8 rounded-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles text-orange-500" data-fg-d3bl157="0.8:43.2159:/src/app/App.tsx:494:17:21908:50:e:Sparkles::::::DD2N" data-fgid-d3bl157=":r22:"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>            </div>
                <h3 className='text-xl font-semibold text-white/80'>
                    Core
                </h3>
            </div>

            <div className='flex gap-3 flex-wrap'>
                {data.skills.core.map((skill) => (
                    <CoreSkillCard key={skill} text={skill} />
                ))}

            </div>
        </div>

        <div className="additional flex flex-col">
            <div className='additional-heading flex gap-2 mb-4'>
                <div className="about-me-icon bg-slate-500/40 h-8 w-8 rounded-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-slate-400" data-fg-d3bl168="0.8:43.2159:/src/app/App.tsx:522:17:23098:80:e:Award::::::B1kh" data-fgid-d3bl168=":r2d:"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                </div>
                <h3 className='text-xl font-semibold text-white/80'>
                    Addititional
                </h3>
            </div>

            <div className='flex gap-3 flex-wrap'>
                {data.skills.additional.map((skill) => (
                    <AdditionalSkillCard key={skill} text={skill} />
                ))}

            </div>
        </div>


    </div>
  )
}

export default Skills
