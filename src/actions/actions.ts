const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const getTopHeadlines = async (source?: string) => {
    if (!apiKey) {
        throw new Error("Missing API key");
    }

    try {
    // console.log("srource", source)
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_NEWS_API_URL}/top-headlines?sources=${source}`
            , {
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": apiKey,
                }
            })

        return await res.json();
    } catch (error) {
        console.log("Error getting top headlines", error);
        throw new Error("Error getting top headlines");
    }
}

export const getSources = async () => {
    if (!apiKey) {
        throw new Error("Missing API key");
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_NEWS_API_URL}/sources`
            , {
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": apiKey,
                }
            }
        );

        const data = await res.json();

        // limit to 4 sources
        const sources = data.sources.slice(0, 4);

        return sources;
    } catch (error) {
        console.log("Error getting sources", error);
        throw new Error("Error getting sources");
    }
}