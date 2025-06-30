import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Home, Projects, Contact } from "./Routes/index.ts";
import AboutUs from "./Routes/AboutUs.tsx";
import PageDetail from "./Routes/PageDetail.tsx";
import "@mui/material/styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/:id" element={<PageDetail />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
