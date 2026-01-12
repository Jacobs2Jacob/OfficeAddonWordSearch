import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App/App";
import { Providers } from "../App/Providers";

const rootElement: HTMLElement | null = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

/* Render application after Office initializes */
Office.onReady(() => {
  root?.render(
    <React.StrictMode>
      <Providers>
        <App />
      </Providers>
    </React.StrictMode>
  );
});
