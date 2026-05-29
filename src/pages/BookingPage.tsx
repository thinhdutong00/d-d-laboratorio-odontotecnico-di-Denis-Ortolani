import { ChevronLeft, Clock3, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";
import { SITE_CONFIG } from "../data/site";

export function BookingPage() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <section className="booking-page" aria-label="Prenota ora">
      <div className="booking-appbar">
        <button type="button" onClick={goBack} aria-label="Torna alla pagina precedente">
          <ChevronLeft size={34} />
          Indietro
        </button>
      </div>

      <div className="booking-screen">
        <div className="booking-intro">
          <span className="eyebrow">Prenota ora</span>
          <h1>Organizza il prossimo caso con D&D Laboratorio.</h1>
          <p>
            Compila il modulo guidato: raccoglie lavorazione, obiettivo, materiale disponibile,
            preferenza di contatto e recapiti dello studio.
          </p>
          <div className="booking-proof">
            <span>
              <Clock3 size={18} />
              Richiesta in pochi passaggi
            </span>
            <span>
              <Phone size={18} />
              Ricontatto da {SITE_CONFIG.phone}
            </span>
            <span>
              <MapPin size={18} />
              Gambettola FC
            </span>
          </div>
        </div>

        <div className="booking-form-shell">
          <MultiStepLeadForm title="Prenota una valutazione tecnica" fullscreen />
        </div>
      </div>
    </section>
  );
}
