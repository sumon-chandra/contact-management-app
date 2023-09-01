import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
     return (
          <div className="drawer lg:drawer-open w-10">
               <input id="sidebar" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="sidebar" className="drawer-button lg:hidden">
                         <BiMenu className="text-2xl" />
                    </label>
               </div>
               <div className="drawer-side">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-60 space-y-4 w-1/2 min-h-full bg-white text-base-content font-semibold lg:text-xl">
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
