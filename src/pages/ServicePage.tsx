import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";
import { findService, SERVICES } from "../data/site";

export function ServicePage() {
  const { slug } = useParams();
  const service = findService(slug);

  if (!service) return <Navigate to="/lavorazioni-odontotecniche" replace />;

  const related = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="service-hero">
        <img src={service.heroImage} alt="" />
        <div className="wrap service-hero__grid">
          <div>
            <span className="eyebrow">Lavorazione odontotecnica</span>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#richiesta">
                Richiedi valutazione
              </a>
              <Link className="btn btn-ghost" to="/lavorazioni-odontotecniche">
                Tutte le lavorazioni
              </Link>
            </div>
          </div>
          <MultiStepLeadForm service={service} compact />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Vantaggi tecnici</span>
            <h2>Per studi che cercano precisione e collaborazione.</h2>
            <p>{service.excerpt}</p>
          </div>
          <div className="benefit-list">
            {service.benefits.map((benefit) => (
              <article key={benefit}>
                <CheckCircle2 size={22} />
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap process">
          <div className="section-head section-head--left">
            <span className="eyebrow">Percorso</span>
            <h2>Come viene impostato il caso.</h2>
          </div>
          {service.processSteps.map((step, index) => (
            <div className="process-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
              <p>Ogni fase viene coordinata con lo studio per allineare dati, tempi e risultato atteso.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="richiesta">
        <div className="wrap split split--form">
          <div>
            <span className="eyebrow">Modulo dedicato</span>
            <h2>Invia una richiesta specifica per {service.title}.</h2>
            <p>
              Il modulo raccoglie lavorazione, obiettivo, materiale disponibile, finestra temporale
              e recapiti dello studio.
            </p>
            <div className="faq-list">
              {service.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <MultiStepLeadForm service={service} />
        </div>
      </section>

      <section className="section related">
        <div className="wrap section-head">
          <span className="eyebrow">Altre lavorazioni</span>
          <h2>Potrebbero servirti anche questi servizi.</h2>
        </div>
        <div className="wrap mini-grid">
          {related.map((item) => (
            <Link className="mini-card" to={`/lavorazioni-odontotecniche/${item.slug}`} key={item.slug}>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <span>
                Apri
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
