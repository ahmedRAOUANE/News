"use client";

import { useSearchParams } from 'next/navigation';
import { IoMdSearch } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Header = () => {
    const searchParams = useSearchParams(); 
    const entries = Object.fromEntries(searchParams.entries()); 
    const filter = Object.keys(entries);
    const filterOption = Object.values(entries);

    return (
        <header className="col-span-4 border border-gray-300 row-span-1 shadow-lg flex justify-between items-center py-2">
            <h1 className="px-3 text-xl flex justify-start items-center gap-1">
                <span>
                    Top Headlines
                </span>

                <span className="text-3xl">
                    <MdKeyboardArrowRight />
                </span>

                <span className='font-bold text-blue-500'>{filterOption}</span>
                <span>{filter}</span>
            </h1>

            <div className="px-3 flex gap-3">
                <button title="Search" className="hover:bg-slate-200 shadow-sm rounded-full aspect-square w-10 flex items-center justify-center text-2xl">
                    <IoMdSearch />
                </button>

                <button title="Settings" className="hover:bg-slate-200 shadow-sm rounded-full aspect-square w-10 flex items-center justify-center text-xl">
                    <IoSettingsSharp />
                </button>
            </div>
        </header>
    )
}

export default Header

