import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { store } from "./store";
import { Provider } from "react-redux";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  // 08 react-query
  // <QueryClientProvider client={queryClient}>
  //   <App></App>
  // </QueryClientProvider>

  // 09 rtk
  <Provider store={store}>
    <App></App>
  </Provider>
);
