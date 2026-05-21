import React from 'react'

function EducationCard({educationDetails}) {
  return (
    <div className='flex gap-5 justify-start items-stretch'>
        <div className="line w-1 bg-orange-600/50" />
        <div className='flex flex-col justify-between gap-1'>
            <h3 className="text-xl font-semibold text-white">{educationDetails.name}</h3>
            <p className="text-orange-400">{educationDetails.institution}</p>
            <p className="text-sm text-slate-500">{educationDetails.status}</p>
        </div>
    </div>
  )
}

export default EducationCard
