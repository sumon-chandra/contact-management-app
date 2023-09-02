import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Pages
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import CreateContact from "./pages/CreateContact";
import UpdateContact from "./pages/UpdateContact";

function App() {
     const router = createBrowserRouter(
          createRoutesFromElements(
               <Route element={<Sidebar />}>
                    <Route path="/" element={<Contacts />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/create-contact" element={<CreateContact />} />
                    <Route path="/update-contact/:id" element={<UpdateContact />} />
               </Route>
          )
     );
     return <RouterProvider router={router} />;
}

export default App;
