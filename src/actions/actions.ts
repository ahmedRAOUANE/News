export const getTopHeadlines = async () => {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

    if (!apiKey) {
        throw new Error("Missing API key");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEWS_API_URL}/top-headlines?sources=techcrunch`
        , {
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": apiKey,
            }
        })

    return await res.json();
}