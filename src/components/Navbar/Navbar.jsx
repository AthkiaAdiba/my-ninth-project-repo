import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoIosHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'underline mr-4' : 'mr-4'} to='/'>Home</NavLink>
        {
            user && <>
                <NavLink className={({ isActive }) => isActive ? 'underline mr-4' : 'mr-4'} to='/updatedProfile'>Updated Profile</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'underline mr-4' : 'mr-4'} to='/agents'>Agents</NavLink>
            </>
        }

    </>

    // Log out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logged out successfully')
            })
            .catch()
    }
    return (
        <div>
            <div className="navbar fixed top-0 w-full right-0 left-0 z-20 bg-gray-900 text-white px-1 lg:px-9 lg:py-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-gray-900 text-white font-roboto rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="hidden md:block lg:block">
                        <div className="flex items-center">
                            <IoIosHome className="text-3xl lg:text-4xl"></IoIosHome>
                            <p><a className="btn btn-ghost text-lg font-pt_sans lg:text-4xl">DreamLoom Realty</a></p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl menu menu-horizontal px-1 bg-gray-900 text-white font-roboto">
                        {navLinks}
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end flex gap-0 lg:gap-3 items-center">
                            <details className="dropdown mr-[140%] md:mr-[45%] lg:mr-0">
                                <summary className="btn w-10 lg:w-12 h-10 lg:h-12 rounded-full">
                                    <div className="avatar tooltip tooltip-right md:tooltip-left lg:tooltip-left" data-tip={user.displayName}>
                                        <div className="w-12 lg:w-12 h-12 lg:h-12 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </summary>
                                <ul className="shadow menu dropdown-content z-[1] rounded-full w-52">
                                    <div className="h-full p-3 space-y-2 bg-gray-900 text-gray-100">
                                        <div className="items-center p-2 space-x-4">
                                            <h2 className="text-lg font-semibold text-center">{user.displayName}</h2>
                                            <p>{user.email}</p>
                                        </div>
                                        <div className="divide-y divide-gray-700">
                                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                                <li>
                                                    <Link className="space-x-3 flex items-center">
                                                        <CgProfile className="text-lg"></CgProfile>
                                                        <p>Profile</p>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/updatedProfile' className="space-x-3 flex items-center">
                                                        <IoSettingsOutline className="text-lg"></IoSettingsOutline>
                                                        <p>Updated Profile</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className="pt-4 pb-2 space-y-1 text-sm">
                                                <li>
                                                    <Link onClick={handleLogOut} className="space-x-3 flex items-center">
                                                        <MdLogout className="text-lg"></MdLogout>
                                                        <p>Log out</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </details>
                            <div className="block md:hidden lg:hidden -ml-40">
                                <div className="flex items-center">
                                    <IoIosHome className="text-3xl lg:text-4xl"></IoIosHome>
                                    <p><a className="btn btn-ghost text-lg font-pt_sans lg:text-4xl">DreamLoom Realty</a></p>
                                </div>
                            </div>
                            {/* <div className="avatar tooltip tooltip-left" data-tip={user.displayName}>
                                <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div> */}
                            <Link onClick={handleLogOut} className="hidden lg:block btn w-14 lg:w-28 bg-gray-900 text-white border-none font-roboto text-base lg:text-xl text-center">Log out</Link>
                        </div> :
                        <div className="navbar-end flex gap-2 lg:gap-4">
                            <div className="block md:hidden lg:hidden">
                                <div className="flex items-center">
                                    <IoIosHome className="text-3xl lg:text-4xl"></IoIosHome>
                                    <p><a className="btn btn-ghost text-lg font-pt_sans lg:text-4xl">DreamLoom Realty</a></p>
                                </div>
                            </div>
                            <Link to='/login' className="btn w-14 lg:w-20 bg-gray-900 text-white border-none font-roboto text-xl">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;