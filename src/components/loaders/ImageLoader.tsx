import React from 'react'

const ImageLoader = ({ className }: { className?: string }) => {
    return (
        <div className={`animate-pulse w-full bg-slate-200 aspect-video ${className}`}></div>
    )
}

export default ImageLoader