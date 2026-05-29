import { CalendarDays } from "lucide-react";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";

const events = [
  {
    date: "18 ottobre 2024",
    title: "Corso Conometria in Chirurgia Guidata",
    speaker: "Dott. Norelli Raffael",
  },
  {
    date: "22 novembre 2024",
    title: "Il digitale in odontoiatria: scanner digitale, chirurgia guidata Aida e impianti Iuxta Ossei",
    speaker: "Dott. Matteo Baldini",
  },
  {
    date: "6 dicembre 2024",
    title: "Medicina estetica in odontoiatria",
    speaker: "Serata formativa",
  },
];

export function TrainingEveningsPage() {
  return (
    <>
      <section className="page-hero page-hero--plain">
        <div className="wrap page-hero__inner">
          <div>
            <span className="eyebrow">Serate formative</span>
            <h1>Incontri tecnici e aggiornamento professionale.</h1>
            <p>
              Le serate formative D&D portano in laboratorio temi di chirurgia guidata, digitale
              in odontoiatria e medicina estetica applicata al settore.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap timeline">
          {events.map((event) => (
            <article key={event.date}>
              <span className="feature-icon"><CalendarDays /></span>
              <div>
                <p className="eyebrow">{event.date} · ore 20:00</p>
                <h2>{event.title}</h2>
                <p>{event.speaker}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="wrap split split--form">
          <div>
            <span className="eyebrow">Partecipa</span>
            <h2>Vuoi ricevere informazioni sulle prossime serate?</h2>
            <p>Invia i tuoi recapiti e il laboratorio potra ricontattarti con il calendario aggiornato.</p>
          </div>
          <MultiStepLeadForm compact title="Richiedi informazioni serate" />
        </div>
      </section>
    </>
  );
}
