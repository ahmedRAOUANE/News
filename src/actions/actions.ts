"use server";

import { FilterParams, FiltersType } from "@/utils/types";
import { redirect } from "next/navigation";

const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const getFilteredHeadlines = async (filter: FilterParams) => {
    if (!apiKey) {
        throw new Error("Missing API key");
    }

    // check the filter is not empty
    if (Object.keys(filter).length === 0) {
        
        console.log("Filter", filter);
        return redirect("/?category=general");
    }

    if (filter.category) {
        return await getTopHeadlines("category", filter.category);
    } else if (filter.country) {
        return await getTopHeadlines("country", filter.country);
    } else if (filter.language) {
        return await getTopHeadlines("language", filter.language);
    } else if (filter.sources) {
        return await getTopHeadlines("sources", filter.sources);
    } else {
        return await getTopHeadlines("sources", filter.sources as string);
    }
}

const getTopHeadlines = async (filter: FiltersType, option: string) => {
    if (!apiKey) {
        throw new Error("Missing API key");
    }

    if (filter && option) {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_NEWS_API_URL}/top-headlines?${filter}=${option}`
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
    } else {
        throw new Error("Missing filter or option");
    }
}

