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
            <a href="/">Primera línea
            </a>
          </div>
          <div className={styles.item}>
            <a href="#aconfesiondeparte">A confesión de parte</a>
          </div>
          <div className={styles.item}>
            <a href="#lapizypapel">Lápiz y papel</a>
          </div>
          <div className={styles.item}>
            <a href="#lavitrina">La vitrina</a>
          </div>
          <div className={styles.item}>
            <a href="#escribaaqui">Escriba aquí</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
