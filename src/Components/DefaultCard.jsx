import React from 'react'
import IntroCard from './IntroCard'

function DefaultCard({type}) {
    const uses=["introCard","aboutMe","skills","education"];
    return (
        <div>
            <div className='bg-slate-900 mt-6 p-6 rounded-3xl border border-gray-600 lg:mx-auto max-w-250 mx-6'>
                {type === uses[0] ? <IntroCard /> : null}
                {type === uses[1] ? null : null}
                {type === uses[2] ? null : null}
                {type === uses[3] ? null : null}
            </div>
        </div>
    )
}

export default DefaultCard
