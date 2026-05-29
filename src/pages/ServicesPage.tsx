import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";
import { SERVICES, SITE_CONFIG } from "../data/site";

export function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero__inner">
          <div>
            <span className="eyebrow">Lavorazioni odontotecniche</span>
            <h1>Servizi protesici, implantari ed estetici con pagine dedicate.</h1>
            <p>
              D&D di Ortolani Denis e specializzato in protesi fissa, mobile, Toronto,
              scheletrati, faccette, protesi implantare e abutment personalizzati.
            </p>
          </div>
          <img src={SITE_CONFIG.labImage} alt="Laboratorio D&D" />
        </div>
      </section>

      <section className="section">
        <div className="wrap service-grid service-grid--wide">
          {SERVICES.map((service) => (
            <Link className="service-card" key={service.slug} to={`/lavorazioni-odontotecniche/${service.slug}`}>
              <img src={service.heroImage} alt="" />
              <div>
                <h2>{service.title}</h2>
                <p>{service.excerpt}</p>
                <span>
                  Vai alla pagina
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="wrap split split--form">
          <div>
            <span className="eyebrow">Richiesta rapida</span>
            <h2>Non sai ancora quale lavorazione selezionare?</h2>
            <p>
              Invia un quadro iniziale del caso. Il laboratorio potra indicare il percorso tecnico
              piu coerente con materiali, tempi e obiettivo clinico.
            </p>
          </div>
          <MultiStepLeadForm compact title="Inquadra il caso" />
        </div>
      </section>
    </>
  );
}
