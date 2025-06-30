export interface NavigationItem {
  id: string;
  title: string;
  url: string;
}

export const navigation: NavigationItem[] = [
  {
    id: "1",
    title: "Inicio",
    url: "/",
  },
  {
    id: "2",
    title: "Nosotros",
    url: "/nosotros",
  },
  {
    id: "3",
    title: "Proyectos",
    url: "/proyectos",
  },
  {
    id: "4",
    title: "Contacto",
    url: "/contacto",
  },
];
