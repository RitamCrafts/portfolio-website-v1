import React from 'react'

function AdditionalSkillCard({text}) {
  return (
    <div className='px-6 py-3 cursor-pointer inline-block bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 rounded-2xl hover:scale-105 hover:shadow-lg transition-all'>
      {text}
    </div>
  )
}

export default AdditionalSkillCard
