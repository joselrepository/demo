import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes.tsx";
import AuthProvider from "./provider/AuthProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./react-query/queryClient.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

async function main() {
  const { worker } = await import("./mocks/browser");

  await worker.start();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

main();
