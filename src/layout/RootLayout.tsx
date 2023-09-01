import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
     return (
          <>
               <Sidebar />
               <Outlet />
          </>
     );
};

export default RootLayout;
