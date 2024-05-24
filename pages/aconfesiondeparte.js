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
import styles from "../styles/Aconfesiondeparte.module.css";

function Aconfesiondeparte({ scrollUpFunction, styleScrollUp, styleBurger }) {
  const size = UseWindowSize();
  //console.log(size.width)

  // Burger2
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.body}>
      <Navbar />
      <Burger2 menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="aconfesiondeparte" className={styles.section2}>
        <h3>A confesión de parte</h3>
        <div className={styles.containerS2}>
          <div className={styles.imageS3}>
            <Image
              className={styles.imageS2}
              src="/FotoInicio.jpg"
              alt=""
              width={600}
              height={500}
            />
          </div>
          <div className={styles.description}>
            <p>
              Nací en Bocas del Toro, Mar Caribe panameño, en el año 1972. De mí
              diré que guardo las palabras antes del primer café de la mañana.
              Acróbata, tragafuegos y funámbula del abecedario después de él.
              Dama festiva conmigo misma y contralto en los escenarios, así como
              Whitman se canta y celebra. A tiempo completo y en aguas abiertas:
              poeta, dos brazadas después: narradora. Leer da la libertad para
              moverse de lugar en cualquier momento y escribir convoca hallar la
              alquimia perfecta para transformar la vida de quien lee, habitando
              todas las voces y todas las generaciones, colgados de hilos y
              tramas unidos en lo escrito. Por acá me quedo, cuaderno en mano.
            </p>
            <a href="EHarbar_Literatura 2024.pdf" target="blank">
              Reseña en literatura
            </a>
          </div>
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
export default Aconfesiondeparte;
