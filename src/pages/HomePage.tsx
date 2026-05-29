import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, Clock3, Cpu, GraduationCap } from "lucide-react";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";
import { SERVICES, SITE_CONFIG } from "../data/site";

export function HomePage() {
  return (
    <>
      <section className="hero hero--home">
        <img className="hero-bg" src={SITE_CONFIG.heroImage} alt="" />
        <div className="hero-overlay" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">D&D di Ortolani Denis</span>
            <h1>Laboratorio odontotecnico analogico e digitale dal 1990.</h1>
            <p>
              Protesi, implantologia, estetica e flusso digitale per studi dentistici che cercano
              precisione, qualita e tempi di lavoro chiari.
            </p>
            <div className="cta-row">
              <Link className="btn btn-primary" to="/lavorazioni-odontotecniche">
                Scopri lavorazioni
              </Link>
              <Link className="btn btn-ghost" to="/flusso-digitale">
                Flusso digitale
              </Link>
            </div>
            <div className="proof-strip">
              <span>600 mq di laboratorio</span>
              <span>Settori CAD CAM, ceramiche, gessi</span>
              <span>Formazione per clinici e odontotecnici</span>
            </div>
          </div>
          <MultiStepLeadForm title="Richiedi un confronto tecnico" />
        </div>
      </section>

      <section className="section">
        <div className="wrap section-head">
          <span className="eyebrow">Lavorazioni odontotecniche</span>
          <h2>Un laboratorio completo per casi protesici, implantari ed estetici.</h2>
          <p>
            Ogni servizio ha una pagina dedicata con contenuti, processo e modulo multistep per
            raccogliere i dati del caso in modo ordinato.
          </p>
        </div>
        <div className="wrap service-grid">
          {SERVICES.map((service) => (
            <Link className="service-card" key={service.slug} to={`/lavorazioni-odontotecniche/${service.slug}`}>
              <img src={service.heroImage} alt="" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.excerpt}</p>
                <span>
                  Apri servizio
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Perche D&D</span>
            <h2>Produzione organizzata per reparti, controllo qualitativo e dialogo con lo studio.</h2>
            <p>
              Il laboratorio D&D e specializzato sia nel settore analogico che digitale. La
              produzione e divisa tra sala CAD CAM, sala ceramiche, produzione centrale e sala
              gessi, con responsabili di reparto e controllo qualitativo.
            </p>
          </div>
          <div className="feature-list">
            <Feature icon={<BadgeCheck />} title="Qualita estetica" text="Lavorazioni precise, curate nella funzione e nel risultato visivo." />
            <Feature icon={<Cpu />} title="Flusso digitale" text="File e impronte digitali per accelerare progettazione e produzione." />
            <Feature icon={<Clock3 />} title="Tempi chiari" text="Raccolta dati strutturata per definire priorita, prove e consegna." />
            <Feature icon={<GraduationCap />} title="Formazione" text="Corsi e serate formative per clinici e odontotecnici." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap process">
          <div className="section-head section-head--left">
            <span className="eyebrow">Metodo di lavoro</span>
            <h2>Dal caso al manufatto con un percorso leggibile.</h2>
          </div>
          {["Raccolta del caso", "Progettazione", "Produzione", "Consegna e confronto"].map((step, index) => (
            <div className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              <p>
                {index === 0 &&
                  "Il modulo iniziale raccoglie lavorazione, obiettivo, materiale e tempi desiderati."}
                {index === 1 &&
                  "Il laboratorio valuta impronte, file digitali, foto e indicazioni cliniche dello studio."}
                {index === 2 &&
                  "La produzione passa nei reparti piu adatti, tra CAD CAM, ceramica, gessi e centrale."}
                {index === 3 &&
                  "Lo studio riceve un manufatto controllato e un riferimento tecnico per eventuali prove."}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article>
      <span className="feature-icon">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
