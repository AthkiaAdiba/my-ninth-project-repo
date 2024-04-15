import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoIosHome } from "react-icons/io";


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
                    <div className="flex items-center">
                        <IoIosHome className="text-3xl lg:text-4xl"></IoIosHome>
                        <p><a className="btn btn-ghost text-lg font-pt_sans lg:text-4xl">DreamLoom Realty</a></p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl menu menu-horizontal px-1 bg-gray-900 text-white font-roboto">
                        {navLinks}
                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end flex gap-0 lg:gap-4">
                            <div className="avatar tooltip tooltip-left" data-tip={user.displayName}>
                                <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <Link onClick={handleLogOut} className="btn w-14 lg:w-28 bg-gray-900 text-white border-none font-roboto text-base lg:text-xl">Log out</Link>
                        </div> :
                        <div className="navbar-end flex gap-2 lg:gap-4">
                            <Link to='/login' className="btn w-14 lg:w-20 bg-gray-900 text-white border-none font-roboto text-xl">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;