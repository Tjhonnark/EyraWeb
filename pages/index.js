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
  //console.log(size.width)

  return (
    <div className={styles.body}>
      <Navbar />
      <section id="primeralinea" className={styles.section1}>
        <h3>Primera línea</h3>
        <div className={styles.container}>
          <Image
            className={styles.imageS1}
            src="/Imagen1.jpg"
            alt=""
            width={450}
            height={700}
          />
          <h1>Eyra Harbar</h1>
        </div>
      </section>
      <section id="aconfesiondeparte" className={styles.section2}>
        <h3>A confesión de parte</h3>
        <div className={styles.containerS2}>
          <div className={styles.imageS3}>
            <Image
              className={styles.imageS2}
              src="/mi.jpg"
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
      <section id="lapizypapel" className={styles.section4}>
        <h3>Lápiz y papel</h3>
        <Image
          className={styles.imageS4}
          src="/FotoInicio.jpg"
          alt=""
          width={1400}
          height={550}
          objectFit="cover"
        />
        <div className={styles.text1_a1_s1}>
          <h1>Eyra Harbar</h1>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.s3_item}>
          <a href="#poesia">Poesía</a>
        </div>
        <div className={styles.s3_item}>
          <a href="#cuentos">Cuentos</a>
        </div>
        <div className={styles.s3_item}>
          <a href="#infantil">Infantil</a>
        </div>
      </section>
      <section id="poesia" className={styles.section5}>
        <div className={styles.poemas}>
          <h2>Poesía</h2>
          <div className={styles.column1}>
            <div className={styles.poema}>
              <h3>Poema 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
            <div className={styles.poema}>
              <h3>Poema 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
          </div>
          <div className={styles.column2}>
            <Image
              className={styles.imageS5A}
              src="/poema.jpg"
              alt=""
              width={325}
              height={500}
            />
          </div>
          <div className={styles.column3}>
            <div className={styles.poema}>
              <h3>Poema 3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
          </div>
        </div>
        <div id="cuentos" className={styles.cuentos}>
          <h2>Cuentos</h2>
          <div className={styles.column1}>
            <div className={styles.poema}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
          </div>
          <div className={styles.column2}>
            <Image
              className={styles.imageS5A}
              src="/poema.jpg"
              alt=""
              width={325}
              height={500}
            />
          </div>
          <div className={styles.column3}>
            <div className={styles.poema}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
            <div className={styles.poema}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
          </div>
        </div>
        <div id="infantil" className={styles.infantil}>
          <h2>Literatura infantil y juvenil</h2>
          <div className={styles.column1}>
            <div className={styles.poema}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
            <div className={styles.poema}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
          </div>
          <div className={styles.column2}>
            <Image
              className={styles.imageS5C}
              src="/poema.jpg"
              alt=""
              width={325}
              height={500}
            />
          </div>
          <div className={styles.column3}>
            <div className={styles.poema}>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente qui provident dolore nostrum ipsam, numquam enim
                debitis, inventore sed accusamus eveniet accusantium adipisci
                sit in nesciunt repellendus! Ad, praesentium nam?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="lavitrina" className={styles.section6}>
        <h2>La vitrina</h2>
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
      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      <Burger styleBurger={styleBurger} />
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
