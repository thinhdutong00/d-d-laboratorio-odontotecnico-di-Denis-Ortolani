import { GraduationCap, UsersRound, Workflow } from "lucide-react";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";

export function CoursesPage() {
  return (
    <>
      <section className="page-hero page-hero--plain">
        <div className="wrap page-hero__inner">
          <div>
            <span className="eyebrow">Corsi</span>
            <h1>Formazione D&D per odontotecnici e clinici.</h1>
            <p>
              L'azienda offre corsi svolti da professionisti del settore, con focus sul flusso
              digitale, sulla qualita dei manufatti e sull'organizzazione clinico-tecnica.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap feature-list feature-list--three">
          <article>
            <span className="feature-icon"><GraduationCap /></span>
            <h2>Corsi specialistici</h2>
            <p>Percorsi pensati per odontotecnici e clinici che vogliono aggiornarsi.</p>
          </article>
          <article>
            <span className="feature-icon"><Workflow /></span>
            <h2>Flusso digitale</h2>
            <p>Formazione per integrare scanner, file digitali e produzione ottimizzata.</p>
          </article>
          <article>
            <span className="feature-icon"><UsersRound /></span>
            <h2>Accompagnamento</h2>
            <p>D&D segue passo per passo il professionista durante il percorso formativo.</p>
          </article>
        </div>
      </section>

      <section className="section band">
        <div className="wrap split split--form">
          <div>
            <span className="eyebrow">Calendario corsi</span>
            <h2>Richiedi informazioni sui prossimi appuntamenti formativi.</h2>
            <p>
              Il sito originale invita a consultare il calendario corsi: qui la richiesta viene
              trasformata in un contatto diretto e tracciabile.
            </p>
          </div>
          <MultiStepLeadForm compact title="Richiedi informazioni corso" />
        </div>
      </section>
    </>
  );
}
