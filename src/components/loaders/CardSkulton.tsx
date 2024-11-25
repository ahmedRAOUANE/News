import React from 'react'
import ImageLoader from './ImageLoader'

const CardSkuliton = () => {
    return (
        <div className="animate-pulse flex flex-col gap-3">
            <ImageLoader className='rounded-t-lg' />

            <div className="h-2 bg-slate-200 rounded col-span-2 w-2/3"></div>

            <div className="h-2 bg-slate-200 rounded"></div>

            <div className="grid grid-cols-3 gap-3">
                <div className="h-3 bg-slate-200 rounded mt-3"></div>
                <div className="h-3 bg-slate-200 rounded mt-3"></div>
                <div className="h-3 bg-slate-200 rounded mt-3"></div>
            </div>

            <button className="w-1/3 h-5 bg-slate-100 rounded mt-4"></button>
        </div>
    )
}

export default CardSkuliton