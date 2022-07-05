import React from "react";
import ReactDOM from "react-dom/client";

import { GifsProvider } from "./context/actions/GifsProvider";
import App from "./components/App";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GifsProvider>
      <App />
    </GifsProvider>
  </>
);
