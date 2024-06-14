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
import styles from "../styles/PoesiayCuentos.module.css";

function PoesiayCuentos({ scrollUpFunction, styleScrollUp, styleBurger }) {
  const size = UseWindowSize();
  //console.log(size.width)

  // Burger2
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.body}>
      <Navbar />
      <Burger2 menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="poesia" className={styles.section5}>
        <div className={styles.poemas}>
          <h2>Poesía</h2>
          <div className={styles.column1}>
            <div className={styles.poema}>
              <h3>Soplo</h3>
              <p>
                Entiendo al aire cuando lo impulso, desde mi boca lo llevo al
                caracol de tu oído y se estanca como el mar para ser escuchado.
              </p>
            </div>
            <div className={styles.poema}>
              <h3>Pan</h3>
              <p>
                Tu piel de pan suavemente mordida queda entre mis dientes.
                Morder tu piel, cosecha de trigales. Mi boca te busca ansiosa.
                Cuerpo que desgajo, hambre de mis venas. Paladar, plaza de
                fuego, aguarda el beso, el oficio sagrado del hornero en mi
                boca.
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
              <h3>Pronóstico</h3>
              <p>
                Como gitana le dije que estaría conmigo una noche de lluvia,
                cuando el relámpago estallara su candela entre los bosques y una
                carcajada de nube rompiera su fuente sobre el mundo. Y estuvo a
                tiempo la fecha y el cuerpo para el amor.
              </p>
            </div>
          </div>
        </div>
        <div id="cuentos" className={styles.cuentos}>
          <h2>Cuentos</h2>
          <div className={styles.column1}>
            <div className={styles.poema}>
              <h3>Tierra rota</h3>
              <p>
                Queda en los mapas la tierra rota por peregrinos sin retorno.
                Aquello que se aleja no regresa, su historia al olvido
                concierne. Todos aprenden a conjugar hostilidad, a cruzar
                fronteras, a despedazar recuerdos. Pero ¿dónde quedan país y
                cuerpo? ¿En qué lugar atacará la muerte?
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
              <h3>Alta mar</h3>
              <p>
                Esclavo y amo son parte de la historia, de la propiedad, del
                fisco, de la ideología, de las plantaciones, de la captura y la
                trata, de las castas, del rey, de los civiles y su libertad, de
                la útil venta, del cimarronaje y del imperio, del pelo cuscú,
                pelo malo, pelo duro, pelo apretado, pelo negro, pelo vudú, pelo
                afro en el barco negrero, guineamen, doscientos esclavos
                inmóviles por viaje, horizontalmente cautivos, sin alma, pobre
                alma, vencida alma, sólo cadáveres en alta mar.
              </p>
            </div>
            <div className={styles.poema}>
              <h3>Varados</h3>
              <p>
                Sala la mar adentro inmigrantes sin rescate. Aguas
                internacionales, tierra de nadie, cuando a la patria matan la
                mar y el desaliento adentro.
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
export default PoesiayCuentos;
