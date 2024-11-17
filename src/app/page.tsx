import { getTopHeadlines } from "@/actions/actions";
import { ArticleType } from "@/utils/types";

export default async function Home() {
  const topHeadlines = await getTopHeadlines();

  return (
    <main className="container px-5 m-auto">
      <h1>Hello there!</h1>

      <div>
        {topHeadlines.articles.map((article: ArticleType) => (
          <div key={article.url} className="mb-5 border border-gray-200 rounded-lg p-3 bg-slate-300">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
