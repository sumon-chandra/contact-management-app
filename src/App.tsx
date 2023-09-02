import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Pages
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
     const router = createBrowserRouter(
          createRoutesFromElements(
               <Route element={<Sidebar />}>
                    <Route path="/" element={<Contacts />} />
                    <Route path="/dashboard" element={<Dashboard />} />
               </Route>
          )
     );
     return <RouterProvider router={router} />;
}

export default App;
