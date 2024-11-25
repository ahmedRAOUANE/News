"use client";

import { RootState } from '@/store';
import { setFilter } from '@/store/filtersSlice';
import { FiltersType } from '@/utils/types'
import { useDispatch, useSelector } from 'react-redux';
// import { IoIosArrowDown } from 'react-icons/io'

const filterOptions: FiltersType[] = ["category", "country", "language", "sources"];

const FiltersModal = () => {
    const filter = useSelector((state: RootState) => state.filters.filter);

    const dispatch = useDispatch()

    return (
        <div className='flex flex-col gap-3 h-full'>
            <h3 className='px-3 text-2xl'>Filters</h3>

            <div className='flex flex-col gap-2 px-3'>
                <div className='flex justify-between gap-1 p-2 bg-slate-100 rounded-md border border-gray-300'>
                    <label htmlFor='filters'>Filter by</label>

                    <div className='flex items-center justify-between gap-1 shadow'>
                        <select
                            id='filters'
                            defaultValue={filter}
                            onChange={(e) => dispatch(setFilter(e.target.value as FiltersType))}
                            className='appearance-none row-start-1 col-start-1 bg-slate-100 outline-none shadow-none '
                        >
                            {filterOptions.map((filter, index) => <option key={index} value={filter}>{filter}</option>)}
                        </select>

                        {/* <IoIosArrowDown className='text-2xl pointer-events-none row-start-1 col-start-1' /> */}
                    </div>
                </div>
            </div>

            {/* <div className='px-3 max-h-64 overflow-auto'>
                <div className='flex flex-col gap-2'>
                    {filters(filterOption).map((filter, index) => (
                        <Link href={`/?${filterOption}=${filter}`} key={index} className='px-3 py-2 bg-slate-100 rounded-md border border-gray-300'>
                            {filter}
                        </Link>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default FiltersModal