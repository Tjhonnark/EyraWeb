import { useState } from "react";
import Link from "next/link";
// STYLES
import styles from "../styles/Burger2.module.css";

export default function Burger2({ menuOpen, setMenuOpen }) {
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Cerrar el menú al hacer clic en un elemento del menú
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.burgerButton} onClick={handleToggleMenu}>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
      </button>
      <div className={styles.logo}>Eyra Harbar</div>
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/">
            <i className="bi bi-house-fill"></i>
            Primera línea
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/aconfesiondeparte">
            <i className="bi bi-people-fill"></i>A confesión de parte
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/escritura">
          <i class="bi bi-pencil-fill"></i>
            Escritura
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/poesiaycuentos">
          <i class="bi bi-images"></i>
            Poesía y Cuentos
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/galeria">
            <i className="bi bi-envelope-paper-fill"></i>
            Galería
          </Link>
        </li>
        {/* Resto de tus items del menú */}
      </ul>
    </nav>
  );
}
