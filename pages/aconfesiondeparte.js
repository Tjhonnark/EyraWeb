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
        <Image
          className={styles.imageS2}
          src="/FotoInicio.jpg"
          alt=""
          width={600}
          height={500}
        />
        <div className={styles.container}>
          <h3>A confesión de parte</h3>
        </div>
        <div className={styles.containerS2}>
          <div className={styles.description}>
            <p>
              Eyra Harbar nació en Bocas del Toro, Mar Caribe panameño, en 1972.
              Es autora de poemarios, minificción y cuento corto. También cuenta
              con obra en literatura infantil y juvenil. Su trabajo está
              recogido en antologías nacionales e internacionales. Como parte de
              su historia, a los 23 años se convierte en la tercera mujer en
              ganar el Premio Esther María Osses del Instituto Panameño de
              Estudios Laborales (IPEL) con el poemario <q>Acopio de piezas</q>
              (1995), suceso que merecerá la entrega del galardón por parte de
              la histórica líder sindical Marta Matamoros. En los años 90 logra
              el primer lugar en los concursos Demetrio Herrera Sevillano con
              <q>Donde habita el escarabajo</q> y Gustavo Batista Cedeño del INAC
              (hoy Ministerio de Cultura) con <q>Espejos</q>. <q>Paraíso quemado</q> fue
              el Primer Premio de Poesía León A. Soto en 2013 y el poemario
              <q>Desertores de alborada</q> gana el Primer Premio Esther María Osses
              (IPEL) en 2015. <q>No está de más</q> es su libro de minificción
              literaria en género cuento, publicado por Foro/taller Sagitario
              Ediciones del escritor Enrique Jaramillo Levi. En literatura
              infantil y juvenil ha escrito <q>Cuentos para el planeta</q> y <q>La
              canción de la lluvia</q>, ganadores del Concurso Nacional Esther
              María Osses de Literatura Infantil de UDELAS. <q>Autobús esperanza</q>
              obtuvo el Concurso Nacional de Literatura Infantil y Juvenil
              Carlos Francisco Changmarín” del Ministerio de Cultura de Panamá
              en 2022. Recientemente, fue incluida en Desde el centro de
              América. Miradas alternativas de nuevas cuentistas coordinada por
              Gloria Herníquez (Penguin Random, México) y en poesía en
              Nuestramérica es un verso, antología poética 1968-1989 coord.
              Zyanya Mariana Mejía (FCE, Perú). También en la Trilogía poética
              de las mujeres en Hispanoamérica: Pícaras, místicas y rebeldes
              coordinada por Leticia Luna, Maricruz Patiño y Aurora Saavedra
              (UNAM, México), así como la antología de mujeres poetas panameñas
              La nueva canción de Afrodita, coordinada por Rafael Ruiloba, y
              Minificcionario, antología de microcuento en Panamá Panamá
              realizada por Enrique Jaramillo Levi, entre otras. Es abogada y se
              ha dedicado a las áreas del derecho administrativo, cooperación y
              asuntos internacionales, así como al género y desarrollo.
            </p>
            <a href="EHarbar_Literatura 2024.pdf" target="blank">
              Reseña completa
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
