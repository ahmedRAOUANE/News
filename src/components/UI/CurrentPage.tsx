"use client";

import useModal from "@/hooks/useModal";
import { LuSettings2 } from "react-icons/lu";

const CurrentPage = () => {
    const { openModal } = useModal();

    return (
        <section className="px-3 flex flex-col gap-3 max-h-full">
            <div className='flex justify-between items-center'>
                <h2 className="text-xl text-gray-500 cursor-pointer">Top Headlines</h2>

                <button onClick={() => openModal("filters")} title="manage filters" className="hover:bg-slate-200 shadow-sm rounded-full aspect-square w-10 flex items-center justify-center text-xl">
                    <LuSettings2 />
                </button>
            </div>

            {/* <ul className={`flex flex-col gap-2 ${isCollapsed ? "" : "hidden"}`}>
                            {filterOptions.map((option) => (
                                <li key={option}>
                                    <Link href={`/?${filter}=${option.toLowerCase().replace(" ", "-")}`} className="p-3 bg-slate-100 hover:bg-slate-200 shadow-sm rounded-lg w-full">{option}</Link>
                                </li>
                            ))}
                        </ul> */}
        </section>
    )
}

export default CurrentPage