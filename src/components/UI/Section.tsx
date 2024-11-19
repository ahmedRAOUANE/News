"use client";

import { useState } from 'react';
import { LuSettings2 } from 'react-icons/lu'

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };
    
    return (
        <section className="px-3 flex flex-col gap-3 max-h-full">
            <div className='flex justify-between items-center'>
                <h2 className="text-xl text-gray-500 cursor-pointer" onClick={handleToggle}>{title}</h2>

                <button title="sources list" className="hover:bg-slate-200 shadow-sm rounded-full aspect-square w-10 flex items-center justify-center text-xl">
                    <LuSettings2 />
                </button>
            </div>

            {isCollapsed ? children : null}
        </section>
    )
}

export default Section