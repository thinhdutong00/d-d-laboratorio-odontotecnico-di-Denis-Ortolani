import { BadgeCheck, Building2, UsersRound } from "lucide-react";
import { SITE_CONFIG } from "../data/site";

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero__inner">
          <div>
            <span className="eyebrow">Su di Noi</span>
            <h1>Una storia iniziata nel 1990, cresciuta tra analogico e digitale.</h1>
            <p>
              Il laboratorio D&D, fondato da Denis Ortolani, e leader nel settore e oggi lavora in
              una sede di 600 mq a Gambettola, con produzione al piano terra e area amministrativa
              e sala corsi al piano superiore.
            </p>
          </div>
          <img src={SITE_CONFIG.labImage} alt="Laboratorio D&D a Gambettola" />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Denis Ortolani</span>
            <h2>Dal diploma odontotecnico alla costruzione di un laboratorio completo.</h2>
            <p>
              Denis Ortolani, nato il 26 maggio 1970, ha ricevuto il diploma di odontotecnico nel
              1988 presso l'istituto IPSIA G. Benelli di Pesaro. Dopo un primo percorso in
              medicina, ha scelto l'odontotecnica e ha proseguito con la laurea di igienista
              dentale all'universita Ilerna Spagnola.
            </p>
            <p>
              La prima sede D&D e nata a Longiano in un laboratorio di 50 mq, poi trasferita a
              Gambettola in una struttura piu ampia e organizzata per reparti.
            </p>
          </div>
          <div className="feature-list">
            <article>
              <span className="feature-icon"><Building2 /></span>
              <h3>600 mq</h3>
              <p>Centro di produzione, area amministrativa e sala corsi.</p>
            </article>
            <article>
              <span className="feature-icon"><UsersRound /></span>
              <h3>Team qualificato</h3>
              <p>Reparti con responsabili di produzione e controllo qualitativo.</p>
            </article>
            <article>
              <span className="feature-icon"><BadgeCheck /></span>
              <h3>Massimo risultato estetico</h3>
              <p>Ricerca continua di precisione, qualita e passione artigianale.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
