import React from 'react'
import EducationCard from './EducationCard'

function Education({education,data}) {
  return (
    <div>
        <div className="heading flex flex-row justify-left items-center gap-3 mb-7 scroll-mt-30" id="Education">
            <div className="about-me-icon bg-green-500/10 h-12 w-12 rounded-lg flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap text-green-500"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
            </div>
            <h1 className='text-4xl text-white font-bold '>
                Education
            </h1>
        </div>
        <div className='flex flex-col gap-5'>
        {
            education.map((x,index)=>(
                <EducationCard educationDetails={education[index]}/>
            ))
        }
        </div>
        
    </div>
  )
}

export default Education
