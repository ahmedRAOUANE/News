import SidebarSection from "./UI/SidebarSection"

const Sidebar = async () => { 
    return (
        <aside className="col-span-1 row-span-12 border border-gray-300 shadow-lg hidden md:flex flex-col gap-5 max-h-screen overflow-hidden">
            <h1 className="px-3 py-2 text-3xl">News</h1>

            <div className="flex flex-col gap-5 overflow-y-auto">
                <SidebarSection />
            </div>
        </aside>
    )
}

export default Sidebar

