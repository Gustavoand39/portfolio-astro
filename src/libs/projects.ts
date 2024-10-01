import ReactIcon from "../components/icons/ReactIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import ExpressIcon from "../components/icons/ExpressIcon.astro";
import MysqlIcon from "../components/icons/MysqlIcon.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import BootstrapIcon from "../components/icons/BootstrapIcon.astro";
import SocketIcon from "../components/icons/SocketIcon.astro";
import NextjsIcon from "../components/icons/NextjsIcon.astro";

export const projects = [
  {
    key: "SysChat",
    title: "SysChat",
    details:
      "Desempeñando un rol de Desarrollador Web Frontend, mi proyecto de Residencias Profesionales consistió en optimizar y rediseñar el sistema SysChat. SysChat es una aplicación para gestionar el personal de la empresa y facilitar la comunicación en tiempo real entre empleados y clientes.\n\n Además de trabajar en el frontend, también colaboré con el responsable del backend para implementar nuevas funcionalidades y corregir errores. Se adoptó el marco de trabajo Scrum para organizar las tareas y mejorar la comunicación entre los miembros del equipo.",
    image: "/assets/images/sys-chat/sys-login.webp",
    techs: [
      { name: "React", icon: ReactIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
      { name: "Socket.io", icon: SocketIcon },
    ],
  },
  {
    key: "InventoryApp",
    title: "Inventory App",
    details:
      "Inventory App es una aplicación básica para gestionar inventarios de productos, desarrollada con React, TailwindCSS, Express y MySQL. La aplicación permite registrar, editar y eliminar productos, además de mostrar un resumen de los productos registrados.\n\n La aplicación cuenta con un sistema de autenticación simple, donde el usuario puede iniciar y cerrar sesión. La información de los productos se almacena en una base de datos MySQL y se accede a través de una API REST creada con Express.",
    image: "/assets/images/inventory/inventory-login.webp",
    repo: "https://github.com/Gustavoand39/inventory-frontend",
    techs: [
      { name: "React", icon: ReactIcon },
      { name: "TailwindCSS", icon: TailwindIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "MySQL", icon: MysqlIcon },
    ],
  },
  {
    key: "SpotifyClone",
    title: "Spotify Clone",
    details:
      "Spotify Clone es una réplica de la página de inicio de Spotify, desarrollada con Astro y TailwindCSS. La aplicación es completamente estática y no cuenta con funcionalidades de reproducción de música avanzadas, solo permite reproducir algunas canciones de ejemplo que se encuentran dentro de algunas playlists.\n\n La aplicación es una demostración usada para comprender mejor el framework Astro.",
    image: "/assets/images/spotify-clone/spotify-clone.webp",
    repo: "https://github.com/Gustavoand39/spotify-clone",
    techs: [
      { name: "Astro", icon: AstroIcon },
      { name: "TailwindCSS", icon: TailwindIcon },
    ],
  },

  {
    key: "TesloShop",
    title: "Teslo Shop",
    details:
      "Teslo Shop es un proyecto de una tienda en línea desarrollada con NextJs y TailwindCSS. La página es completamente estática y no cuenta con funcionalidades de compra, solo muestra los productos y detalles de cada uno.\n\n La aplicación es una demostración usada para comprender mejor el framework NextJs.",
    image: "/assets/images/teslo-shop/teslo-home.webp",
    repo: "https://github.com/Gustavoand39/teslo-shop",
    techs: [
      { name: "NextJS", icon: NextjsIcon },
      { name: "TailwindCSS", icon: TailwindIcon },
    ],
  },
];
