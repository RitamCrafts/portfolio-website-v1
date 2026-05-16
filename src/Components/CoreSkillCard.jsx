import React from 'react'

function CoreSkillCard({text}) {
  return (
    <div className='px-6 py-3 text-orange-500 bg-linear-to-r from-orange-500/20 to-red-500/20 cursor-pointer inline-block border-orange-500/50 border-2 hover:border-orange-500/80 rounded-2xl hover:scale-105 hover:shadow-lg transition-all'>
      {text}
    </div>
  )
}

export default CoreSkillCard
