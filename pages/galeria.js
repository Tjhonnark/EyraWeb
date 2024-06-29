import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import Burger2 from "../components/Burger2";
import UseWindowSize from "../components/UseWindowSize";
/* STYLES */
import styles from "../styles/Galeria.module.css";

function Galeria({ scrollUpFunction, styleScrollUp, styleBurger }) {
  const size = UseWindowSize();
  //console.log(size.width)

  // Burger2
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.body}>
      <Navbar />
      <Burger2 menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="lavitrina" className={styles.section6}>
        <h2>Galería</h2>
        <div className={styles.line}></div>
        <Image
          className={styles.imageS2}
          src="/galeria/Eyra IPEL.jpg"
          alt=""
          width={600}
          height={500}
        />
        <div className={styles.uno}>
          <div className={styles.cuadro1}>
            <Image
              className={styles.image}
              src="/galeria/Eyra Harbar Autobiografia.jpg"
              alt=""
              width={600}
              height={500}
            />
          </div>
          <div className={styles.cuadro2}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              accusantium sint eaque animi corporis blanditiis asperiores,
              laudantium sit deleniti assumenda minus aliquid sunt voluptate
              maxime in quo distinctio! Cum, vitae?
            </p>
          </div>
          <div className={styles.cuadro3}>
            <Image
              className={styles.image}
              src="/galeria/Eyra Taboga.jpg"
              alt=""
              width={600}
              height={500}
            />
          </div>
        </div>
        <div className={styles.dos}>
          <div className={styles.cuadro1}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              accusantium sint eaque animi corporis blanditiis asperiores,
              laudantium sit deleniti assumenda minus aliquid sunt voluptate
              maxime in quo distinctio! Cum, vitae?
            </p>
          </div>
          <div className={styles.cuadro2}>
            <Image
              className={styles.image}
              src="/galeria/Festival de la Montaña.jpg"
              alt=""
              width={600}
              height={500}
            />
          </div>
          <div className={styles.cuadro3}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis accusantium officia provident maxime eligendi minima non aut quam, accusamus error amet, dolorum ab iste architecto? Et veniam laudantium vero provident.</p>
          </div>
        </div>
        <div className={styles.tres}>
          <div className={styles.cuadro1}></div>
          <div className={styles.cuadro2}></div>
          <div className={styles.cuadro3}></div>
        </div>
      </section>
      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      {/*<Burger styleBurger={styleBurger} />*/}
      <Footer
        page="/"
        section1="Primera línea"
        section2="A confesión de parte"
        section3="Lápiz y papel"
        section4="La vitrina"
        section5="Escriba aquí"
      />
    </div>
  );
}
export default Galeria;
