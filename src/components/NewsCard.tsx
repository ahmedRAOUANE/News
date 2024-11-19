import { ArticleType } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const NewsCard = ({article}: {article: ArticleType}) => {
    return (
        <div title={article.description} key={article.title} className="border border-gray-500 shadow-sm rounded-lg bg-slate-100 mb-2 grid grid-rows-auto">
            <Link href={article.url} className="overflow-hidden max-w-full rounded-t-lg aspect-video">
                <Image src={article.urlToImage} alt={article.title} width={500} height={500} className="w-full object-fill" />
            </Link>

            <div className="px-3 py-2">
                <h3 className="text-lg">{article.title}</h3>
                {/* <p>{article.description}</p> */}
            </div>

            <div className="flex gap-2 flex-wrap px-2">
                <span className="px-2 py-1 bg-gray-300 text-sm rounded-md flex items-center">{article.source.name}</span>
                <span className="px-2 py-1 bg-gray-300 text-sm rounded-md flex items-center">{article.author}</span>
                <span className="px-2 py-1 bg-gray-300 text-sm rounded-md flex items-center">{article.publishedAt}</span>
            </div>

            <div className="flex justify-start items-center p-2">
                <Link href={`articles/${article.title.replace(/\s+/g, '-').toLowerCase()}`} className="bg-blue-400 py-2 px-3 text-white rounded-md flex items-center gap-2">
                    <span>Read More</span>
                    <FaArrowRightLong />
                </Link>
            </div>
        </div>
    )
}

export default NewsCard