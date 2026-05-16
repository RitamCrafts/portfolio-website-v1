import React from 'react'

function IntroCard({data}) {

  
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row gap-x-14 gap-y-7 justify-between items-center">

        <div className="text-section max-w-150 flex flex-col items-center lg:items-start">


          <div className='text-orange-400 mt-3 mb-4 p-1 pr-3 pl-2 rounded-full text-sm bg-orange-500/20 w-fit'>&#128075; Hello, I'm</div>
          <div className='Name block text-center md:text-left mb-1'><h1 className='text-5xl text-center md:text-left font-stretch-semi-condensed font-bold bg-linear-to-br from-orange-400 to-orange-600 bg-clip-text text-transparent inline-block'>{data.general.name}</h1></div>
          <h2 className='text-3xl mb-3 text-center md:text-left text-orange-500 '>{data.general.profession}</h2>
          <p className='text-slate-400 text-center lg:text-left'>
            {data.general.work}
          </p>

          <div className="email-loc flex flex-row gap-x-8 gap-y-3 mt-7 mb-6 flex-wrap justify-center">
            <a href={`mailto:${data.contact.email}`} target="_blank" className="email cursor-pointer flex flex-row items-center gap-1 hover:text-orange-500">
              <svg className="pt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <div>{data.contact.email}</div>
            </a>
            <a href={`https://www.google.com/maps/place/${data.contact.location.replaceAll(" ", "+")}/`} target="_blank" className="location cursor-pointer flex flex-row items-center gap-1 hover:text-orange-500">
              <svg className="pt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div>{data.contact.location}</div>
            </a>
          </div>

          <div className='connect-links-container flex gap-3'>
            <a className='github w-fit h-fit' href={data.contact.github[0]} target='_blank'>
              <button className="cursor-pointer hover:opacity-80 active:opacity-50 h-10 w-10 flex justify-center items-center text-white rounded-xl bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </button>
            </a>
            <a className='linkedIn w-fit h-fit' href={data.contact.linkedIn[0]} target='_blank'>
              <button className="cursor-pointer hover:opacity-80 active:opacity-50 h-10 w-10 flex justify-center items-center text-white rounded-xl bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </button>
            </a>

          </div>



        </div>

        <div className="photo-section shrink-0">
          <img src={data.general.photo} className='h-[340px] w-[275px] overflow-hidden object-cover shrink-0 rounded-xl border border-gray-500 shadow-amber-600 shadow-3xl mx-auto md:mx-0'/>
        </div>

      </div>
    </div>
  )
}

export default IntroCard
