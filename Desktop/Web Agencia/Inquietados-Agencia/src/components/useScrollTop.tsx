// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Fuerza el scroll al inicio SIN animación
  }, [pathname]);

  return null; // No renderiza nada, solo ejecuta el efecto
}
