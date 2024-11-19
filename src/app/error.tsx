'use client'

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <main className='container px-3 m-auto h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-5 text-center md:mb-32 w-full md:w-2/3 lg:w-1/2'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'> 
                        <h2 className='px-3 py-2 text-3xl mb-3'>Something went wrong!</h2>
                        <p>{error.message}</p>
                    </div>

                    <div className='flex flex-col items-start gap-2'>
                        <h3 className='px-3 py-2 text-2xl text-gray-500'>Things You Can Do</h3>

                        <ul className='flex flex-col gap-2 items-start list-disc pl-5'>
                            <li>Check Your internet Connection</li>
                            <li>Refresh The Page</li>
                            <li>Try Again Later</li>
                        </ul>
                    </div>
                </div>

                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }

                    className='bg-blue-400 py-2 px-3 text-white rounded-md w-full md:w-1/2 mx-auto'
                >
                    Try again
                </button>
            </div>
        </main>
    )
}