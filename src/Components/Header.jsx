import React from 'react'
import { initials } from '../utils/initials';


function Header({data}) {
    const sections=["About","Skills","Projects","Education"];
    return (
        <div className='fixed z-100 top-0 left-0 right-0 h-16 backdrop-blur-3xl bg-[#0f1419]/90 border-b border-slate-800'>

            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{initials(data.general.name)}</span>
                    </div>
                    <span className="font-semibold hidden sm:inline-block">Portfolio</span>
                </div>
                <div className="flex items-center gap-4">
                    
                    {
                        sections.map((section)=>(
                            <a href={`#${section}`} className="text-sm hover:text-orange-500 transition-colors text-slate-300">
                                {section}
                            </a>
                        ))
                    }
                    
                </div>
            </div>

        </div>
  )
}

export default Header
