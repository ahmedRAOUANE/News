import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const ArticlePage = async ({ params }: { params: { articleTitle: string } }) => {
    const { articleTitle } = await params;

    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

    if (!apiKey) {
        throw new Error("Missing API key");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API_URL}/top-headlines?q="${articleTitle}"`, {
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey,
        }
    });

    const data = await res.json();

    console.log(articleTitle);
    console.log(data);

    return (
        <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-auto h-screen">
            <Sidebar />

            <Header />

            <div className="col-span-4 row-auto overflow-y-scroll h-full p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {/* {data.articles.map((article: any) => (
                ))} */}
            </div>
        </main>
    )
}

export default ArticlePage