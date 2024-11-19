import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Header = ({ source }: { source?: string }) => {
    return (
        <header className="col-span-4 border border-gray-300 row-auto shadow-lg flex justify-between items-center py-2">
            <h1 className="px-3 text-xl flex justify-start items-center gap-1">
                <span>
                    Top Headlines
                </span>

                <span className="text-3xl">
                    <MdKeyboardArrowRight />
                </span>

                <span>{source}</span>
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