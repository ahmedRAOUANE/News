import { getTopHeadlines } from "@/actions/actions";
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";
import { ArticleType } from "@/utils/types";

export default async function Home({ searchParams }: { searchParams: Promise<{ sources?: string }> }) {
  const source = (await searchParams).sources || "abc-news";

  const topHeadlines = await getTopHeadlines(source);

  return (
    <main className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 grid-rows-auto h-screen">
      <Sidebar />

      <Header source={source} />

      {/* <Body /> */}
      <div className="col-span-4 row-auto overflow-y-scroll h-full p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {topHeadlines?.articles.map((article: ArticleType) => (
          <NewsCard key={article.title} article={article} />
        ))}
      </div>
    </main>
  );
}

