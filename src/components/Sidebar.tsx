import { getSources } from '@/actions/actions';
import { sourceType } from '@/utils/types';
import Section from './UI/Section';
import Link from 'next/link';

const Sidebar = async () => {
    const sources: sourceType[] = await getSources();

    const categories = [
        {
            id: "business",
            name: "business",
        },
        {
            id: "entertainment",
            name: "entertainment",
        },
        {
            id: "general",
            name: "general",
        },
        {
            id: "health",
            name: "health",
        },
        // {
        //     id: "science",
        //     name: "science",
        // },
        // {
        //     id: "sports",
        //     name: "sports",
        // },
        // {
        //     id: "technology",
        //     name: "technology",
        // }
    ]

    return (
        <aside className="col-span-1 row-span-2 border border-gray-300 shadow-lg flex flex-col gap-5 max-h-screen overflow-hidden">
            <h1 className="px-3 py-2 text-3xl">News</h1>

            <div className="flex flex-col gap-5 overflow-y-auto">
                <Section title="Sources">
                    <ul className={`flex flex-col gap-2`}>
                        {sources.map((source) => (
                            <li key={source.id}>
                                <Link href={`/?sources=${source.id}`} className="p-3 bg-slate-100 hover:bg-slate-200 shadow-sm rounded-lg w-full">{source.name}</Link>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Categories">
                    <ul className={`flex flex-col gap-2`}>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <Link href={`?category=${category.id}`} className="p-3 bg-slate-100 hover:bg-slate-200 shadow-sm rounded-lg w-full">{category.name}</Link>
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
        </aside>
    )
}

export default Sidebar

