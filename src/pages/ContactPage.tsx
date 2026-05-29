import { MapPin, Phone } from "lucide-react";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";
import { SITE_CONFIG } from "../data/site";

export function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--plain">
        <div className="wrap page-hero__inner">
          <div>
            <span className="eyebrow">Contatti</span>
            <h1>Contatta D&D per prenotare un confronto tecnico.</h1>
            <p>
              Raccogliamo il quadro iniziale della richiesta e rendiamo piu semplice il primo
              contatto tra studio e laboratorio.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--form">
          <div className="contact-panel">
            <h2>D&D laboratorio odontotecnico</h2>
            <a href={SITE_CONFIG.mapUrl} target="_blank" rel="noreferrer">
              <MapPin size={20} />
              {SITE_CONFIG.address}
            </a>
            <a href={SITE_CONFIG.telHref}>
              <Phone size={20} />
              {SITE_CONFIG.phone}
            </a>
            <iframe
              title="Mappa D&D Laboratorio"
              src="https://www.google.com/maps?q=Via%20Lorenzini%20Ezio%20119%2047035%20Gambettola%20FC&output=embed"
              loading="lazy"
            />
          </div>
          <MultiStepLeadForm title="Modulo di richiesta" />
        </div>
      </section>
    </>
  );
}
