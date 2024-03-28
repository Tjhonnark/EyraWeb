import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Burger from "./Burger";
/* STYLES */
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const link = () => {
    var sound = new Audio("sounds/close.wav");
    sound.play();
  };

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.line}></div>
        <div className={styles.navbar}>
          <div className={styles.item}>
            <a href="/">Inicio
            </a>
          </div>
          <div className={styles.item}>
            <a href="#demi">
              De mí
            </a>
          </div>
          <div className={styles.item}>
            <a href="#publicaciones">
              Publicaciones
            </a>
          </div>
          <div className={styles.item}>
            <a href="#fotos">
              Fotos
            </a>
          </div>
          <div className={styles.item}>
            <a href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
