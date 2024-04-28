import Link from "next/link";
import Image from "next/image.js";
import { useState } from "react";
/* COMPONENTS */
import Forms from "../components/Forms.js";
import FormSend from "../components/modals/FormSend.js";
/* DATA */

/* STYLES */
import styles from "../styles/Footer.module.css";

export default function Footer(props) {
  const [modalFormSend, setModalFormSend] = useState(false);

  return (
    <footer id="escribaaqui" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linkSection}>
          <h4>Secciones</h4>
          <div className={styles.itemSection}>
            <a href={props.page + "#primeralinea"} aria-current="page">
              <i className="bi bi-house-fill"></i>
              {props.section1}
            </a>
          </div>
          <div className={styles.itemSection}>
            <a href={props.page + "#aconfesiondeparte"} aria-current="page">
              <i className="bi bi-people-fill"></i>
              {props.section2}
            </a>
          </div>
          <div className={styles.itemSection}>
            <a href={props.page + "#lapizypapel"} aria-current="page">
              <i class="bi bi-pencil-fill"></i>
              {props.section3}
            </a>
          </div>
          <div className={styles.itemSection}>
            <a href={props.page + "#lavitrina"} aria-current="page">
              <i class="bi bi-images"></i>
              {props.section4}
            </a>
          </div>
          <div className={styles.itemSection}>
            <a href={props.page + "#escribaaqui"} aria-current="page">
              <i className="bi bi-envelope-paper-fill"></i>
              {props.section5}
            </a>
          </div>
        </div>
        <div className={styles.contact_form}>
          <Forms
            modalFormSend={modalFormSend}
            setModalFormSend={setModalFormSend}
          />
        </div>
        <FormSend
          modalFormSend={modalFormSend}
          setModalFormSend={setModalFormSend}
        />
      </div>
      <div className={styles.webapp}>
        <a
          href="https://7hosoft.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <h3 className={styles.webapp_title}>7hoSoft</h3>
        </a>
      </div>
    </footer>
  );
}
