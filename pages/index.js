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
import styles from "../styles/Home.module.css";

function Home({ scrollUpFunction, styleScrollUp, styleBurger }) {
  const size = UseWindowSize();
  //console.log(size.width)

  // Burger2
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.body}>
      <Navbar />
      <Burger2 menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="primeralinea" className={styles.section1}>
        <Image
          className={styles.imageS1}
          src="/Imagen1.jpg"
          alt=""
          width={650}
          height={1100}
        />
        <div className={styles.container}>
          <h1>Eyra Harbar</h1>
          <h3>Escritora</h3>
          <h4>Poesía | Narrativa | Literatura infantil y juvenil</h4>
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
export default Home;
