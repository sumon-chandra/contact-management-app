import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);
const client = new QueryClient();

root.render(
     <React.StrictMode>
          <Provider store={store}>
               <QueryClientProvider client={client}>
                    <App />
               </QueryClientProvider>
          </Provider>
     </React.StrictMode>
);
