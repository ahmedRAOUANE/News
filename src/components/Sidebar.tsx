import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
import SidebarSection from "./UI/SidebarSection"
import CurrentPage from "./UI/CurrentPage"

const Sidebar = async () => { 

    return (
        <aside className="col-span-1 row-span-12 border border-gray-300 shadow-lg hidden md:flex flex-col justify-between overflow-hidden">
            <div>
                <h1 className="px-3 py-2 text-3xl mb-3">News</h1>

                <div className="flex flex-col gap-1 overflow-y-auto">
                    <CurrentPage />

                    <SidebarSection />
                </div>
            </div>

            <div className="p-3">
                <LogoutLink className="px-3 py-2 bg-slate-400 w-full text-white text-xl text-center rounded-lg">Logout</LogoutLink>

                <footer className="mt-3 text-sm text-center text-gray-500">
                    <p>News v1.0 by ahmed</p>
                    <p>all right reserved &copy;</p>
                </footer>
            </div>
        </aside>
    )
}

export default Sidebar

