export interface Project {
  id: string;
  title: string;
  title2?: string;
  title3?: string;
  category: string;
  description?: string;
  description2?: string;
  image?: string;
  imageMajor?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  bannerVideo?: string;
  video?: string;
  model3D?: boolean;
  destacted?: boolean;
  link?: string;
}

interface category {
  id: string;
  name: string;
}

export const Category: category[] = [
  {
    id: "1",
    name: "Todos",
  },
  {
    id: "2",
    name: "Desarrollo Web",
  },
  {
    id: "3",
    name: "Motion Graphics",
  },
  {
    id: "4",
    name: "Modelo 3D",
  },
  {
    id: "5",
    name: "Diseño gráfico",
  },
];

export const Features: Project[] = [
  {
    id: "50",
    title: "FUM 3D - MOTION",
    category: "Motion Graphics",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741737730/fum_hcb2em.webp",
  },
  {
    id: "40",
    title: "Robotito 3D",
    category: "VFX",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741646110/fun_motion_fiwgch.webp",
    video:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1735415236/AurisLogitechCompleto_dlhlf7.mp4",
  },
  {
    id: "340",
    title: "Logitech G435",
    category: "Motion Graphics",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741738165/logitech_w3xgpn.webp",
    bannerVideo:
      "https://madebyanalogue.co.uk/wp-content/uploads/analogue_showreel_website_edit.mp4",
    video:
      "https://madebyanalogue.co.uk/wp-content/uploads/analogue-coke-reel.mp4",
  },
  {
    id: "203",
    title: "Start - Samsung S21",
    category: "VFX",
    video:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1735415236/AurisLogitechCompleto_dlhlf7.mp4",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1737063569/startimg_xnfvtr.png",
  },
  {
    id: "303",
    title: "Daniel Bakery",
    category: "VFX",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741738058/bakery_jwaglc.webp",
  },
];

export const ProjectsAll: Project[] = [
  {
    id: "1",
    title: "Robotito 3D",
    title2: "Un bot inquieto",
    title3: "Proceso creativo",
    category: "4",
    description:
      "Este proyecto es una representación de nuestra capacidad creativa y técnica en la agencia Inquietados. Diseñado y animado en Blender, Robotito 3D cobra vida con una estética vibrante y futurista. Las texturas detalladas creadas en Substance Painter añaden realismo, mientras que los efectos de postproducción en After Effects refuerzan la personalidad única del diseño.",
    description2:
      "Desde los primeros bocetos hasta la animación final, el desarrollo del robotito pasó por diversas etapas de exploración. Trabajamos con modelado 3D, iluminación dinámica y texturización avanzada para lograr un resultado que sorprenda y emocione. Nuestro enfoque se centra en experimentar con formas, materiales y efectos visuales que potencien la narrativa del personaje.",
    bannerVideo: "/public/images/project/robotito3D.mp4",
    video: "/public/images/project/robotito3D.mp4",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741646110/fun_motion_fiwgch.webp",
    imageMajor:
      "https://madebyanalogue.co.uk/wp-content/uploads/analogue-coke-guide-03-1.jpg",
    image2: "/public/images/project/robotitoGif.gif",
    image3:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741646080/robotito-wireframe_r8qvy1.webp",
    image4:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741650266/robotitomid_yntw4s.webp",
    image5:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741650583/robotito-roug_ywodsr.webp",
    model3D: true,
    destacted: true,
  },
  {
    id: "2",
    title: "Hurdy Gurdy",
    title2: "Ritmo Medieval",
    title3: "Proceso creativo",
    category: "4",
    description:
      "Este proyecto 3D representa un hurdy gurdy, un instrumento de cuerda medieval con gran riqueza estética. El modelo fue desarrollado en Blender y texturizado con Substance Painter, cuidando cada detalle ornamental con un enfoque artesanal.",
    description2:
      "Comenzamos el desarrollo con referencias históricas para respetar la esencia del instrumento. Exploramos detalles barrocos en la ornamentación, buscando equilibrio entre realismo y estilización. Trabajamos modelado de alta precisión, acabados en madera, metal y dorado, logrando una pieza que transmite elegancia, tradición y sonido visual.",
    bannerVideo: "/public/images/project/hurdyGurdy.mp4",
    video: "/public/images/project/hurdyGurdy.mp4",
    image: "/public/images/project/hurdyGurdy.webp",
    imageMajor:
      "https://madebyanalogue.co.uk/wp-content/uploads/analogue-coke-guide-03-1.jpg",
    image2: "/public/images/project/hurdy-reel.gif",
    image3: "/public/images/project/gurdy1.webp",
    image4: "/public/images/project/gurdy2.webp",
    image5: "/public/images/project/gurdy3.webp",
    model3D: true,
    destacted: false,
  },
  {
    id: "3",
    title: "CAR 2.0 - Apex Legends",
    title2: "El arma definitiva",
    title3: "Proceso creativo",
    category: "4",
    description:
      "Inspirado en el universo de Apex Legends, este modelo 3D de la CAR 2.0 busca capturar la esencia sci-fi del juego con un enfoque en el detalle mecánico y la estética táctica. Modelado en 3Ds Max y texturizado en Substance Painter, el arma fue diseñada para rendir homenaje a la versión original con una mirada creativa y personal.",
    description2:
      "Desde el blocking inicial hasta los renders finales, el proyecto pasó por etapas de alta precisión en modelado hard surface, UV mapping y texturizado realista con mapas PBR. Se trabajó una presentación estilizada con entorno animado para contrastar lo técnico del arma con un fondo más lúdico. El resultado: una pieza que podría formar parte del loot legendario del juego.",
    bannerVideo: "/public/images/project/carApex.mp4",
    video: "/public/images/project/carApex.mp4",
    image: "/public/images/project/carApex.webp",
    imageMajor:
      "https://madebyanalogue.co.uk/wp-content/uploads/analogue-coke-guide-03-1.jpg",
    image2: "/public/images/project/carApex.gif",
    image3: "/public/images/project/car1.webp",
    image4: "/public/images/project/car2.webp",
    image5: "/public/images/project/car3.webp",
    model3D: true,
    destacted: false,
  },
  {
    id: "9",
    title: "FÜM - 3D Motion",
    title2: "Inhale la Esencia",
    category: "3",
    description:
      "Este proyecto es una representación visual del diseño elegante y funcional de FÜM. Modelado y animado completamente en Blender, cada detalle del dispositivo cobra vida. La iluminación sutil y las texturas realistas resaltan su naturaleza premium, invitando a una experiencia sensorial única.",
    bannerVideo:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1740516380/fum_kr00jq.mp4",
    video:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1740516380/fum_kr00jq.mp4",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741737730/fum_hcb2em.webp",
    destacted: false,
  },
  {
    id: "10",
    title: "Start - Samsung S22",
    title2: "El S22 Ultra en Detalle",
    category: "3",
    description:
      "Diseñada para resaltar la innovación del Samsung Galaxy S22 Ultra. Elementos 2D estratégicamente integrados en After Effects, presentando una narrativa visual dinámica y atractiva que celebra la sofisticación y potencia del S22 Ultra.",
    bannerVideo:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1737058720/hoverStart_mh0aoi.mp4",
    video:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1740515651/Start_Final_tuo2mj.mp4",
    image: "/public/images/project/project-1.webp",
    destacted: true,
  },
  {
    id: "11",
    title: "Logitech G435",
    title2: "Audifonos ultra ligeros",
    category: "3",
    description:
      "Logitech G435 es un audífono inalámbrico diseñado para gamers que buscan comodidad y rendimiento. Con un peso ligero de solo 165 gramos, ofrece una experiencia de juego prolongada sin fatiga. Su conectividad Bluetooth y LIGHTSPEED garantiza una conexión estable y rápida, mientras que los controladores de audio de alta calidad proporcionan un sonido envolvente y nítido.",
    bannerVideo:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1750336301/logitechBanner_trqwft.mp4",
    video:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1750337045/LogitechG435_a8lreo.mp4",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1741738165/logitech_w3xgpn.webp",
    destacted: false,
  },
  {
    id: "12",
    title: "Eucerin's EMERGENCY KIT",
    title2: "Cuidado de la Piel",
    category: "3",
    description:
      "Eucerin's EMERGENCY KIT es una solución integral para el cuidado de la piel, diseñada para abordar diversas necesidades dermatológicas. Con una gama de productos especializados, este kit ofrece hidratación, protección y reparación para mantener la piel saludable y radiante.",
    bannerVideo:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1750355185/Eucerin_srj72z.mp4",
    video:
      "https://res.cloudinary.com/dh5i1pozz/video/upload/v1750354729/Eucerin_dxvpir.mp4",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1750355112/eucerin_glcfcr.jpg",
    destacted: true,
  },

  {
    id: "13",
    title: "Tienda online ronshop",
    category: "2",
    description:
      "Diseño de tienda online moderna enfocada en moda urbana. Presenta un estilo visual atractivo, navegación clara, catálogo filtrable y enfoque en la identidad de marca.",
    image: "/public/images/project/site-ronshop.webp",
    link: "https://ronshop.vercel.app/",
    image2: "/public/images/project/ronshop-logo.webp",
    image3: "/public/images/project/site-ronshop.webp",
    destacted: false,
  },
  {
    id: "14",
    title: "BarberShop",
    category: "2",
    description:
      "Landing page para barbería con diseño moderno y elegante. Incluye productos destacados, servicios con reservas, mapa de ubicación y enfoque en la tradición del corte masculino.",
    image: "/public/images/project/site-barbershop.webp",
    link: "https://tp-integrador-one.vercel.app/",
    image2: "/public/images/project/barbershop-logo.webp",
    image3: "/public/images/project/site-barbershop.webp",
    destacted: false,
  },
  {
    id: "15",
    title: "Keto Gourmet",
    category: "2",
    description:
      "Sitio web diseñado para un emprendimiento de cocina saludable, con recetas keto, galería de platos, formulario de contacto y video destacado. Visual atractivo, ordenado y centrado en la experiencia del usuario.",
    image: "/public/images/project/site-keto.webp",
    link: "https://ketosalud.vercel.app/",
    image2: "/public/images/project/keto-logo.webp",
    image3: "/public/images/project/site-keto.webp",
    destacted: false,
  },
  {
    id: "151",
    title: "GoodAr - Tienda Online",
    category: "2",
    description:
      "Sitio web enfocada en calzado urbano. Presenta productos destacados, diseño atractivo y mensajes claros que refuerzan la calidad, el estilo y la identidad visual de la marca.",
    image: "/public/images/project/goodAr.webp",
    link: "https://good-ar.vercel.app/",
    image2: "/public/images/project/goodAr-logo.webp",
    image3: "/public/images/project/goodAr.webp",
    destacted: true,
  },
  {
    id: "16",
    title: "Ilustración Zyra",
    category: "5",
    description:
      "Esta ilustración retrata a Zyra, un poderoso campeón del universo de League of Legends. Zyra es la encarnación de la furia de la naturaleza, un ser híbrido entre planta y humana que domina la vida vegetal. Para capturar su esencia orgánica y mágica, se utilizó la herramienta de malla de degradado en Adobe Illustrator. Esta técnica nos permitió crear volúmenes complejos y transiciones de color suaves que dan vida a su figura, resaltando su poder y su peligrosa belleza. El resultado es un retrato detallado que rinde homenaje a un personaje icónico del mundo de los videojuegos.",
    image: "/public/images/project/zyraBanner.webp",
    image2: "/public/images/project/zyra.webp",
    destacted: false,
  },
  {
    id: "17",
    title: "25 de Mayo",
    category: "5",
    description:
      "Para conmemorar la fecha patria del 25 de Mayo, creamos esta ilustración que celebra la identidad argentina a través de sus símbolos más queridos. Mediante un diseño de viñetas moderno y minimalista, realizado en Adobe Illustrator, representamos elementos icónicos como el sol de nuestra bandera, las empanadas, el mate y los colores celeste y blanco. Es una composición que une tradición y diseño contemporáneo, reflejando el orgullo por nuestra cultura de una manera fresca y visualmente atractiva.",
    image: "/public/images/project/25mayoBanner.webp",
    image2: "/public/images/project/25mayo.webp",
    destacted: false,
  },
  {
    id: "18",
    title: "Ilustración Inquietados",
    category: "5",
    description:
      "Esta ilustración es el corazón de nuestra identidad como agencia. Inquietados representa nuestro proceso creativo: la fuerza y la disrupción (el pico) que rompe con la rutina y los bloqueos (la roca) para dar paso a la claridad, la estrategia y las ideas brillantes (el escritorio ordenado y la computadora sonriente). Somos la inquietud que moviliza, que transforma el caos en soluciones efectivas y creativas. Esta pieza visualiza nuestra filosofía: abordar cada desafío con la energía necesaria para descubrir la mejor solución para nuestros clientes.",
    image: "/public/images/project/illusInquietados.webp",
    image2: "/public/images/project/illusInquietados.webp",
    destacted: false,
  },
  {
    id: "19",
    title: "Before Sunrise",
    category: "5",
    description:
      "Esta pieza es un homenaje a la icónica película Before Sunrise. A través de una cuidada composición digital en Adobe Photoshop, hemos querido capturar la esencia de la conexión íntima y efímera entre Jesse y Céline. La atmósfera nostálgica y el juego de luces y sombras transportan al espectador a ese viaje en tren por Europa, evocando la magia de un encuentro que trasciende el tiempo. Es una celebración del cine, el amor y los momentos fugaces que perduran en la memoria.",
    image: "/public/images/project/beforeSunrise.webp",
    video: "/public/images/project/beforeSunrise.mp4",
    destacted: false,
  },
  {
    id: "20",
    title: "El cadáver de la novia",
    category: "5",
    description:
      "Inspirados en el universo gótico y melancólico de Tim Burton, creamos esta pieza que rinde tributo a El Cadáver de la Novia. La composición, realizada íntegramente en Adobe Photoshop, busca capturar la dualidad entre el mundo de los vivos y el de los muertos, utilizando una paleta de colores fríos y un punto de luz central que simboliza la esperanza y el amor trágico de la historia. Mencionar que se utilizó Photoshop no solo es válido, sino que demuestra la versatilidad de la herramienta más allá de la fotografía, aplicándola a la ilustración y animación con un resultado evocador y profesional.",
    image: "/public/images/project/cadaverNovia.webp",
    video: "/public/images/project/cadavernovia.mp4",
    destacted: false,
  },
  {
    id: "21",
    title: "Personajes Zbrush",
    title2: "Modelado de Personajes 3D con ZBrush",
    category: "4",
    description:
      "Este proyecto demuestra nuestra capacidad en el modelado y la escultura digital de personajes utilizando ZBrush. La selección incluye dos figuras distintas para mostrar nuestra versatilidad técnica y creativa",
    bannerVideo: "/public/images/project/personajesZbrush.mp4",
    video: "/public/images/project/personajesZbrush.mp4",
    image: "/public/images/project/personajesZbrush.webp",
    image2: "/public/images/project/robotitoGif.gif",
    image3: "/public/images/project/loba.webp",
    image4: "/public/images/project/spider.webp",
    image5: "/public/images/project/loba2.webp",
    destacted: true,
  },
  {
    id: "22",
    title: "WW2 Era Ship Cabin",
    title2: "Inspirado en una historia real",
    category: "4",
    description:
      "Basado en la historia de un soldado aliado llamado Pierre que fue capturado pero mantenido con vida debido a sus habilidades lingüísticas.",
    image: "/public/images/project/shipCabin.webp",
    image2: "/public/images/project/robotitoGif.gif",
    image3: "/public/images/project/shipCabinBanner.webp",
    image4: "/public/images/project/shipCabin2.webp",
    image5: "/public/images/project/shipCabin3.webp",
    destacted: false,
  },
  {
    id: "23",
    title: "Branbook Xpan",
    category: "5",
    description:
      "Creamos una identidad visual moderna y cohesiva para Xpan, una solución B2B que nace de la experiencia de Nomadas Experience para transformar el sector de las agencias educativas. El proyecto abarcó desde la conceptualización de la marca hasta la implementación de todos los elementos gráficos corporativos.",
    image: "/public/images/project/brandbook.webp",
    image2: "/public/images/project/brandbook.pdf",
    destacted: true,
  },
  {
    id: "24",
    title: "Campaña Swiss Medical",
    category: "5",
    description:
      "Creamos una identidad visual moderna y cohesiva para Xpan, una solución B2B que nace de la experiencia de Nomadas Experience para transformar el sector de las agencias educativas. El proyecto abarcó desde la conceptualización de la marca hasta la implementación de todos los elementos gráficos corporativos.",
    image: "/public/images/project/swissMedical.webp",
    image2: "/public/images/project/swissMedical.pdf",
    destacted: false,
  },
  {
    id: "25",
    title: "Seguros Caracas",
    title2: "lorem ipsum sit amet",
    category: "3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bannerVideo: "/public/images/project/segurosCaracas.mp4",
    video: "/public/images/project/segurosCaracas.mp4",
    image:
      "https://res.cloudinary.com/dh5i1pozz/image/upload/v1750355112/eucerin_glcfcr.jpg",
    destacted: false,
  },
];

export interface reelAgency {
  bannerVideo?: string;
  video?: string;
}
