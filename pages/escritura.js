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
import styles from "../styles/Escritura.module.css";

function Escritura({ scrollUpFunction, styleScrollUp, styleBurger }) {
  const size = UseWindowSize();
  //console.log(size.width)

  // Burger2
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.body}>
      <Navbar />
      <Burger2 menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="aconfesiondeparte" className={styles.section2}>
        <div className={styles.container}>
          <div className={styles.description}>
            <h3>Escritura</h3>
            <div className={styles.line}></div>
            <h4>Libros publicados</h4>
            <p>
              Autobús esperanza, Editorial Mariano Arosemena, MiCultura, Panamá:
              2023. <br />
              La canción de la lluvia, Editorial UDELAS, Panamá: 2023. <br />
              Cuentos para el planeta, Editorial UDELAS, Panamá: 2020. <br />
              No está de más, Foro/taller Sagitario Ediciones, Panamá: 2018.{" "}
              <br />
              Paraíso quemado, Fundación Taller Cultura/Short Cut Post, Panamá:
              2014. <br />
              Espejos, Editorial Mariano Arosemena, INAC, Panamá: 2003. <br />
              Donde habita el escarabajo, Universidad Tecnológica de Panamá,
              Panamá: 2002.
              <br />
              <br />
            </p>
          </div>
          <Image
            className={styles.imageS2}
            src="/lamaquinadeescribir (2).jpeg"
            alt=""
            width={600}
            height={500}
          />
          <h4>Méritos literarios</h4>
          <h5>Género poesía</h5>
          <p>
            2015: Desertores de alborada. Primer Premio. Sección Esther María
            Osses, Instituto Panameño de Estudios Laborales, 2015. Jurado:
            Manuel Orestes Nieto, Rogelio René Sánchez y Gorka Lasa Tribaldos.{" "}
            <br />
            2013: Paraíso quemado. Primer premio. Concurso León A. Soto,
            Municipio de Panamá, 2013. Jurado: Arysteides Turpana, Lil María
            Herrera y Juan Antonio Gómez. <br />
            2002: Espejos. Primer premio. Concurso Nacional de Poesía “Gustavo
            Batista Cedeño” (2002) organizado por el Instituto Nacional de
            Cultura, Panamá. Jurado: Roberto Luzcando, Aby Martínez y Moisés
            Pascual. <br />
            1996: Donde habita el escarabajo. Primer premio. V Concurso
            Literario Nacional Demetrio Herrera Sevillano de la Universidad de
            Panamá (1996). Género Poesía. Jurado: Delia Cortés, Jarl Babot y
            Maida Díaz. <br />
            1995: Acopio de piezas. Primer premio Esther María Osses, XV
            Concurso Literario Nacional del Instituto Panameño de Estudios
            Laborales (IPEL) del Ministerio de Trabajo y Bienestar Social
            (1995). Género Poesía. Jurado: Aristides Turpana, Manuel Orestes
            Nieto y Giovanna Benedetti.
          </p>
          <h5>Literatura infantil y juvenil</h5>
          <p>
            2022: Autobús esperanza, poemario. Primer Premio Concurso Nacional
            de Literatura Infantil y Juvenil Carlos Francisco Changmarín,
            Ministerio de Cultura. Jurado: Ela Urriola, Gorka Lasa, Irene de
            Delgado. <br />
            2020: La canción de la lluvia, poemario. Primer Premio
            Concurso Nacional de Literatura Infantil y Juvenil, auspiciado por
            la Universidad Especializada de las Américas (UDELAS), el Consejo
            Nacional de Escritoras y Escritores de Panamá y la Academia Panameña
            de Literatura Infantil y Juvenil. <br />
            2017: Cuentos para el planeta.
            Primer Premio. Concurso Nacional de Literatura Infantil y Juvenil
            auspiciado por la Universidad Especializada de las Américas
            (UDELAS), el Consejo Nacional de Escritoras y Escritores de Panamá y
            la Academia Panameña de Literatura Infantil y Juvenil. Jurado: Lia
            Chang, Roberto Luzcando y Genaro Villalaz.
          </p>
        </div>
        <div></div>
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
export default Escritura;
