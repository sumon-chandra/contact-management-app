import { BiMenu } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
     return (
          <div className="drawer lg:drawer-open">
               <input id="sidebar" type="checkbox" className="drawer-toggle" />
               <div className="bg-slate-200 drawer-content">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="sidebar" className="absolute drawer-button top-4 left-4 lg:hidden">
                         <BiMenu className="text-4xl" />
                    </label>
               </div>
               <div className="drawer-side">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <ul className="w-1/2 min-h-full p-4 space-y-4 font-semibold bg-white menu lg:w-60 text-base-content lg:text-xl">
                         {/* Sidebar content here */}
                         <li>
                              <NavLink to="/">Contacts</NavLink>
                         </li>
                         <li>
                              <NavLink to="/dashboard">Dashboard</NavLink>
                         </li>
                    </ul>
               </div>
          </div>
     );
};

export default Sidebar;
