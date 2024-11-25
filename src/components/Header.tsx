import { getKindeServerSession, LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { IoMdSearch } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'
import HeaderTitle from './UI/HeaderTitle';

const Header = async () => {
    const {isAuthenticated} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated() || false;

    return (
        <header className="col-span-4 border border-gray-300 row-span-1 shadow-lg flex justify-between items-center py-2">
            <HeaderTitle />

            {
                isUserAuthenticated ? (
                    <div className="px-3 flex gap-3">
                        <button title="Search" className="hover:bg-slate-200 shadow-sm rounded-full aspect-square w-10 flex items-center justify-center text-2xl">
                            <IoMdSearch />
                        </button>

                        <button title="Settings" className="hover:bg-slate-200 shadow-sm rounded-full aspect-square w-10 flex items-center justify-center text-xl">
                            <IoSettingsSharp />
                        </button>
                    </div>
                ) : (
                        <div className="px-3 flex gap-3">
                            <LoginLink title="Search" className="bg-blue-500 hover:bg-blue-400 text-white px-4 shadow-sm rounded-lg flex items-center justify-center text-lg">
                                login
                            </LoginLink>

                            <RegisterLink title="Settings" className=" hover:bg-slate-200 px-4 shadow-sm rounded-lg flex items-center justify-center text-lg">
                                Signup
                            </RegisterLink>
                        </div>
                )
            }
        </header>
    )
}

export default Header

