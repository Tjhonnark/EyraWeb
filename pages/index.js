import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import UseWindowSize from "../components/UseWindowSize";
/* STYLES */
import styles from "../styles/Home.module.css";

function Home({ scrollUpFunction, styleScrollUp, styleBurger }) {
  const size = UseWindowSize();
  /* console.log(size.width) */

  return (
    <div className={styles.body}>
      <Navbar />
      <section id="inicio" className={styles.section1}>
        <Image
          className={styles.imageS1}
          src="/FotoInicio.jpg"
          alt=""
          width={1400}
          height={550}
        />
        <div className={styles.text1_a1_s1}>
          <h1>Eyra Harbar</h1>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.s2_item}>
          <a href="#poesia">Poesía</a>
        </div>
        <div className={styles.s2_item}>
          <a href="#poesia">Cuentos</a>
        </div>
        <div className={styles.s2_item}>
          <a href="#poesia">Infantil</a>
        </div>
      </section>
      <section id="demi" className={styles.section3}>
        <div className={styles.title}>
          <h3>De mí</h3>
        </div>
        <div className={styles.imageS3}>
          <Image
            className={styles.imageS1}
            src="/mi.jpg"
            alt=""
            width={600}
            height={500}
          />
        </div>
        <div className={styles.description}>
          <p>
            Eyra Harbar (Bocas del Toro, Mar Caribe panameño, 1972). He
            publicado poesía y narrativa desde los años 90, con un trabajo
            literario incluido en antologías de Panamá y a nivel internacional.
            Creo que la literatura nos hace libres para ir a todo lugar en
            cualquier momento, es la alquimia perfecta capaz de transformar la
            vida de quien lee. Cuando tenía 17 años gané un concurso estudiantil
            de ensayo y a partir de allí la escritura se convirtió en tierra
            para hacer germinar más palabras. He alcanzado otros premios en
            poesía en Panamá, incluyendo el de Poesía Joven del Instituto
            Nacional de Cultura (hoy Ministerio de Cultura) en 2002. En los
            últimos años me he dedicado a escribir literatura infantil y juvenil
            como un vehículo para generar narrativas en las que habiten todas
            las voces de distintas generaciones y encontrar los hilos que nos
            unen al entorno natural. Elijo una buena plática con pocos amigos a
            grandes grupos. Prefiero mis gatos y mi perra sobre lo apremiante.
            Tomo café muy temprano y toco guitarra por la noche. Por lo demás,
            siempre que dudé escribí.
          </p>
        </div>
      </section>
      <section id="publicaciones" className={styles.section4}>
        <h2>Publicaciones</h2>
        <div className={styles.uno}>
          <div className={styles.cuadro1}></div>
          <div className={styles.cuadro2}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              accusantium sint eaque animi corporis blanditiis asperiores,
              laudantium sit deleniti assumenda minus aliquid sunt voluptate
              maxime in quo distinctio! Cum, vitae?
            </p>
          </div>
          <div className={styles.cuadro3}></div>
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
          <div className={styles.cuadro2}></div>
          <div className={styles.cuadro3}></div>
        </div>
        <div className={styles.tres}>
          <div className={styles.cuadro1}></div>
          <div className={styles.cuadro2}></div>
          <div className={styles.cuadro3}></div>
        </div>
      </section>
      <section id="poesia" className={styles.section5}>
        <h2>Bullets abajo</h2>
        <div className={styles.column1}>
          <div className={styles.poema}>
            <h3>Poema 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              qui provident dolore nostrum ipsam, numquam enim debitis,
              inventore sed accusamus eveniet accusantium adipisci sit in
              nesciunt repellendus! Ad, praesentium nam?
            </p>
          </div>
          <div className={styles.poema}>
            <h3>Poema 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              qui provident dolore nostrum ipsam, numquam enim debitis,
              inventore sed accusamus eveniet accusantium adipisci sit in
              nesciunt repellendus! Ad, praesentium nam?
            </p>
          </div>
        </div>
        <div className={styles.column2}>
          <Image
            className={styles.imageS1}
            src="/poema.jpg"
            alt=""
            width={350}
            height={500}
          />
        </div>
        <div className={styles.column3}>
          <div className={styles.poema}>
            <h3>Poema 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              qui provident dolore nostrum ipsam, numquam enim debitis,
              inventore sed accusamus eveniet accusantium adipisci sit in
              nesciunt repellendus! Ad, praesentium nam?
            </p>
          </div>
        </div>
      </section>
      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      <Burger styleBurger={styleBurger} />
      <Footer
        page="/"
        section1="Inicio"
        section2="De mi"
        section3="Publicaciones"
        section4="Poesía"
        section5="Contacto"
      />
    </div>
  );
}
export default Home;
