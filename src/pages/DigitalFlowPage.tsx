import { Link } from "react-router-dom";
import { Cpu, FileCheck2, TimerReset } from "lucide-react";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";

const digitalHeroSrc = "/images/digital-lab-1100.jpg";
const digitalHeroSrcSet =
  "/images/digital-lab-760.jpg 760w, /images/digital-lab-1100.jpg 1100w, /images/digital-lab-1400.jpg 1400w";

export function DigitalFlowPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero__inner">
          <div>
            <span className="eyebrow">Flusso Digitale</span>
            <h1>Il presente dell'odontotecnica, integrato nella produzione D&D.</h1>
            <p>
              Il digitale consente di lavorare con studi italiani e internazionali: le impronte
              possono essere inviate la mattina e il prodotto realizzato in tempi molto rapidi in
              base al caso.
            </p>
            <Link className="btn btn-primary" to="/contatti">
              Invia file da valutare
            </Link>
          </div>
          <img
            src={digitalHeroSrc}
            srcSet={digitalHeroSrcSet}
            sizes="(max-width: 720px) calc(100vw - 28px), 520px"
            alt="Flusso digitale D&D"
            width="760"
            height="570"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap feature-list feature-list--three">
          <article>
            <span className="feature-icon"><Cpu /></span>
            <h2>Produzione computerizzata</h2>
            <p>D&D affianca il laboratorio analogico a tecnologie digitali e CAD CAM.</p>
          </article>
          <article>
            <span className="feature-icon"><TimerReset /></span>
            <h2>Tempi piu snelli</h2>
            <p>Il flusso digitale riduce passaggi manuali e velocizza progettazione e produzione.</p>
          </article>
          <article>
            <span className="feature-icon"><FileCheck2 /></span>
            <h2>File e impronte</h2>
            <p>Lo studio puo inviare file e indicazioni tecniche per avviare il confronto.</p>
          </article>
        </div>
      </section>

      <section className="section band">
        <div className="wrap split split--form">
          <div>
            <span className="eyebrow">Valutazione digitale</span>
            <h2>Organizza il prossimo caso con dati e materiali gia chiari.</h2>
            <p>
              Il modulo aiuta a raccogliere il tipo di lavorazione, gli obiettivi, i file
              disponibili e una finestra temporale indicativa.
            </p>
          </div>
          <MultiStepLeadForm compact title="Valuta un file digitale" />
        </div>
      </section>
    </>
  );
}
