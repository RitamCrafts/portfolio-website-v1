import React from 'react'

function AboutMe({data}) {
  return (
    <div>
      <div className="heading flex flex-row justify-left items-center gap-2 mb-2">
        <div className="about-me-icon bg-orange-500/10 h-12 w-12 rounded-lg flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user text-orange-500" data-fg-d3bl141="0.8:43.2159:/src/app/App.tsx:464:15:20704:46:e:User::::::wpV" data-fgid-d3bl141=":r1n:"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </div>
        <h1 className='text-4xl text-white font-bold '>About Me</h1>
      </div>
      <p className="about-me-text text-[15px] mr-12">
        {data.more.aboutMe}
      </p>
    </div>
  )
}

export default AboutMe
