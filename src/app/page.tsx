import { getFilteredHeadlines } from "@/actions/actions";
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";
import { ArticleType, FilterParams } from "@/utils/types";

export default async function Home({ searchParams }: { searchParams: Promise<FilterParams> }) {
  const filter = (await searchParams);

  const topHeadlines: { articles: ArticleType[] } = await getFilteredHeadlines(filter);

  console.log("Top Headlines", topHeadlines);
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-12 h-screen">
      <Sidebar />

      <Header />

      <div className="col-span-4 row-span-11 overflow-y-scroll h-full p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {topHeadlines?.articles.length > 0 ? topHeadlines?.articles.map((article: ArticleType) => {
          return article.title !== "[Removed]" && (<NewsCard key={article.title} article={article} />)
        }
        ) : (
          <div className="flex flex-col items-center justify-start h-full">
            <h2 className="text-2xl">No results found</h2>
          </div>
        )}
      </div>
    </main>
  );
}

