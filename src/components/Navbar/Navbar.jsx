import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <NavLink className={({isActive}) => isActive ? 'underline mr-4' : 'mr-4'} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'underline mr-4' : 'mr-4'} to='/profile'>Profile</NavLink>
        <NavLink className={({isActive}) => isActive ? 'underline mr-4' : 'mr-4'} to='/anything'>Anything</NavLink>
       
    </>
    return (
        <div>
            <div className="navbar fixed top-0 w-full right-0 left-0 z-20 bg-black text-white lg:px-9 lg:py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-black text-white font-roboto rounded-box w-52">
                            { navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-pt_sans lg:text-4xl">Home Dreams</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-xl menu menu-horizontal px-1 bg-black text-white font-roboto">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2 lg:gap-10">
                    <div className="avatar">
                        <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <a className="btn w-14 lg:w-20 bg-black text-white border-none font-roboto text-xl">Login</a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;