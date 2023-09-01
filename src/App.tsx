import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// Pages
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";

function App() {
     const router = createBrowserRouter(
          createRoutesFromElements(
               <Route>
                    <Route path="/" element={<Contacts />} />
                    <Route path="/dashboard" element={<Dashboard />} />
               </Route>
          )
     );
     return <RouterProvider router={router} />;
}

export default App;
