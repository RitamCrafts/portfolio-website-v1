import React from 'react'
import IntroCard from './IntroCard'
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';

function DefaultCard({type,data}) {
    const uses=["introCard","aboutMe","skills","education"];
    return (
        <div>
            <div className='bg-slate-900 mt-6 p-5 sm:p-7 rounded-3xl border border-gray-600 lg:mx-auto max-w-250 mx-6'>
                {type === uses[0] ? <IntroCard data={data}/> : null}
                {type === uses[1] ? <AboutMe data={data}/> : null}
                {type === uses[2] ? <Skills data={data}/> : null}
                {type === uses[3] ? <Education data={data} education={data.education}/> : null}
            </div>
        </div>
    )
}

export default DefaultCard
