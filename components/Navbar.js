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
            <Link href="/">Primera línea
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="#aconfesiondeparte">A confesión de parte</Link>
          </div>
          <div className={styles.item}>
            <Link href="#lapizypapel">Lápiz y papel</Link>
          </div>
          <div className={styles.item}>
            <Link href="#lavitrina">La vitrina</Link>
          </div>
          <div className={styles.item}>
            <Link href="#escribaaqui">Escriba aquí</Link>
          </div>
        </div>
        <Burger />
      </div>
    </nav>
  );
}
