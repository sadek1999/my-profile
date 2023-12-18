import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links=<>
     
    
    
   
   <li>  <NavLink to={"#"}>Home</NavLink>                              </li>
   <li> <NavLink to={"#"}>About</NavLink>                               </li>
   <li>  <NavLink to={"#"}>Skills</NavLink>                              </li>
   <li>                                </li>
   <li>  <NavLink to={"#"}>Contact</NavLink>                               </li>
   <li>                                </li>
    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <p className="text-2xl font-bold">Sadek</p>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                 {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;