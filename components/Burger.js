import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
/* STYLES */
import styles from "../styles/Burger.module.css";

export default function Burger({ styleBurger }) {
  const [menuOpen, setMenuOpen] = useState(false); // Agrega estado para controlar si el menú está abierto

  const handleToggleMenu = (e) => {
    e.preventDefault(); // Prevenir la acción predeterminada del evento de clic
    setMenuOpen(!menuOpen); // Cambiar el estado del menú cada vez que se hace clic en el botón
  };

  return (
    <div>
      <div className={styles.menu}>
        <input
          id="menu__toggle"
          className={styles.menu__toggle}
          type="checkbox"
          checked={menuOpen} // Usa el estado para determinar si el menú está abierto
          onChange={handleToggleMenu} // Usa una función para cambiar el estado del menú
        />
        <label
          className={styleBurger ? styles.menu__btn : styles.menu__btn2}
          htmlFor="menu__toggle"
        >
          <span></span>
        </label>

        <ul className={styleBurger ? styles.menu__box2 : styles.menu__box}>
          <Image
            src="/logo.png"
            className={styles.logo}
            alt=""
            width={100}
            height={100}
          />
          <li>
            <Link className={styles.menu__item} href="#primeralinea">
              <i className="bi bi-house-fill"></i>
              Primera línea
            </Link>
          </li>
          <li>
            <Link className={styles.menu__item} href="#aconfesiondeparte">
              <i className="bi bi-people-fill"></i>A confesión de parte
            </Link>
          </li>
          <li>
            <Link className={styles.menu__item} href="#lapizypapel">
              <i className="bi bi-box-seam"></i>
              Lápiz y papel
            </Link>
          </li>
          <li>
            <Link className={styles.menu__item} href="#lavitrina">
              <i className="bi bi-envelope-paper-fill"></i>
              La vitrina
            </Link>
          </li>
          <li>
            <Link className={styles.menu__item} href="#escribaaqui">
              <i className="bi bi-envelope-paper-fill"></i>
              Escriba aquí
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
