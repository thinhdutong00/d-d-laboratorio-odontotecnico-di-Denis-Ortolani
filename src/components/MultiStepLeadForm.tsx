import { useMemo, useState, type ReactNode } from "react";
import { CalendarDays, CheckCircle2, Clipboard, Phone, Send } from "lucide-react";
import { defaultFormConfig, ServiceConfig, SITE_CONFIG } from "../data/site";

type LeadFormProps = {
  service?: ServiceConfig;
  compact?: boolean;
  title?: string;
  fullscreen?: boolean;
};

type LeadState = {
  caseType: string;
  goal: string;
  material: string;
  date: string;
  slot: string;
  name: string;
  practice: string;
  phone: string;
  email: string;
  notes: string;
};

const emptyLead: LeadState = {
  caseType: "",
  goal: "",
  material: "",
  date: "",
  slot: "",
  name: "",
  practice: "",
  phone: "",
  email: "",
  notes: "",
};

const slotOptions = ["09:00", "10:30", "12:00", "14:30", "16:00", "17:30"];

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("it-IT", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(date);

const getBusinessDays = () => {
  const days: string[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < 12) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) days.push(formatDate(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
};

export function MultiStepLeadForm({ service, compact = false, title, fullscreen = false }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [lead, setLead] = useState<LeadState>(() => ({
    ...emptyLead,
    caseType: service ? service.title : "",
  }));
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const formConfig = service?.formConfig ?? defaultFormConfig;
  const caseOptions = service
    ? [`Richiesta su ${service.title}`, ...formConfig.caseOptions]
    : formConfig.caseOptions;
  const dates = useMemo(getBusinessDays, []);
  const totalSteps = 6;

  const summary = useMemo(
    () =>
      [
        `Richiesta D&D Laboratorio${service ? ` - ${service.title}` : ""}`,
        `Caso/lavorazione: ${lead.caseType || "Da definire"}`,
        `Obiettivo: ${lead.goal || "Da definire"}`,
        `Materiale disponibile: ${lead.material || "Da definire"}`,
        `Preferenza: ${lead.date || "Da definire"} ${lead.slot || ""}`.trim(),
        `Referente: ${lead.name || "Da definire"}`,
        `Studio: ${lead.practice || "Da definire"}`,
        `Telefono: ${lead.phone || "Da definire"}`,
        `Email: ${lead.email || "Non indicata"}`,
        `Note: ${lead.notes || "Nessuna nota"}`,
      ].join("\n"),
    [lead, service],
  );

  const choose = (field: keyof LeadState, value: string) => {
    setLead((current) => ({ ...current, [field]: value }));
    setError("");
    if (field !== "date" && field !== "slot") {
      window.setTimeout(() => setStep((current) => Math.min(totalSteps, current + 1)), 120);
    }
  };

  const validateStep = () => {
    if (step === 1 && !lead.caseType) return "Seleziona la lavorazione o il tipo di caso.";
    if (step === 2 && !lead.goal) return "Seleziona la priorita della richiesta.";
    if (step === 3 && !lead.material) return "Indica il materiale disponibile.";
    if (step === 4 && (!lead.date || !lead.slot)) return "Scegli una data e una fascia oraria indicativa.";
    if (step === 5 && (!lead.name || !lead.phone)) return "Inserisci almeno nome referente e telefono.";
    return "";
  };

  const next = () => {
    const validation = validateStep();
    if (validation) {
      setError(validation);
      return;
    }
    setError("");
    setStep((current) => Math.min(totalSteps, current + 1));
  };

  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submit = async () => {
    if (SITE_CONFIG.email) {
      const subject = encodeURIComponent(`Richiesta ${service?.title ?? "D&D Laboratorio"}`);
      const body = encodeURIComponent(summary);
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
      return;
    }
    await copySummary();
  };

  return (
    <form
      className={`lead-form ${compact ? "lead-form--compact" : ""} ${fullscreen ? "lead-form--fullscreen" : ""}`}
      onSubmit={(event) => {
        event.preventDefault();
        void submit();
      }}
      aria-label="Modulo richiesta D&D Laboratorio"
    >
      <div className="form-head">
        <span className="eyebrow">
          <CalendarDays size={16} />
          Prenotazione tecnica
        </span>
        <h2>{title ?? `Richiedi una valutazione${service ? ` per ${service.shortTitle}` : ""}`}</h2>
        <p>Compila il quadro iniziale: D&D ti ricontattera per definire tempi, materiale e lavorazione.</p>
      </div>

      <div className="progress" aria-label={`Step ${step} di ${totalSteps}`}>
        {Array.from({ length: totalSteps }, (_, index) => (
          <span key={index} className={index < step ? "is-active" : ""} />
        ))}
      </div>

      {step === 1 && (
        <FormStep kicker="Inquadramento" title="Che tipo di lavorazione devi gestire?">
          <ChoiceGrid options={caseOptions} selected={lead.caseType} onChoose={(value) => choose("caseType", value)} />
        </FormStep>
      )}

      {step === 2 && (
        <FormStep kicker="Priorita" title="Qual e l'obiettivo principale?">
          <ChoiceGrid options={formConfig.goalOptions} selected={lead.goal} onChoose={(value) => choose("goal", value)} />
        </FormStep>
      )}

      {step === 3 && (
        <FormStep kicker="Materiale" title="Che materiale hai gia disponibile?">
          <ChoiceGrid
            options={formConfig.materialOptions}
            selected={lead.material}
            onChoose={(value) => choose("material", value)}
          />
        </FormStep>
      )}

      {step === 4 && (
        <FormStep kicker="Tempistiche" title="Scegli una preferenza indicativa">
          <div className="date-grid">
            {dates.map((date) => (
              <button
                className="date-btn"
                type="button"
                key={date}
                aria-pressed={lead.date === date}
                onClick={() => choose("date", date)}
              >
                {date}
              </button>
            ))}
          </div>
          <div className="slot-grid" aria-label="Fasce orarie">
            {slotOptions.map((slot) => (
              <button
                className="slot-btn"
                type="button"
                key={slot}
                aria-pressed={lead.slot === slot}
                onClick={() => choose("slot", slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </FormStep>
      )}

      {step === 5 && (
        <FormStep kicker="Contatto" title="Lascia i recapiti dello studio">
          <div className="field-grid">
            <label>
              Nome referente *
              <input
                value={lead.name}
                onChange={(event) => setLead({ ...lead, name: event.target.value })}
                placeholder="Es. Dott.ssa Rossi"
              />
            </label>
            <label>
              Studio / laboratorio
              <input
                value={lead.practice}
                onChange={(event) => setLead({ ...lead, practice: event.target.value })}
                placeholder="Nome studio"
              />
            </label>
            <label>
              Telefono *
              <input
                value={lead.phone}
                onChange={(event) => setLead({ ...lead, phone: event.target.value })}
                placeholder="Numero per ricontatto"
                inputMode="tel"
              />
            </label>
            <label>
              Email
              <input
                value={lead.email}
                onChange={(event) => setLead({ ...lead, email: event.target.value })}
                placeholder="Email professionale"
                inputMode="email"
              />
            </label>
          </div>
          <label>
            Note sul caso
            <textarea
              value={lead.notes}
              onChange={(event) => setLead({ ...lead, notes: event.target.value })}
              placeholder="Aggiungi dettagli utili: materiali, urgenze, prove, colore..."
              rows={3}
            />
          </label>
        </FormStep>
      )}

      {step === 6 && (
        <FormStep kicker="Riepilogo" title="Conferma il quadro da inviare">
          <pre className="summary-box">{summary}</pre>
          {!SITE_CONFIG.email && (
            <p className="form-note">
              Nessuna email pubblica e stata trovata sul sito originale: il riepilogo viene copiato, poi puoi chiamare
              direttamente il laboratorio.
            </p>
          )}
        </FormStep>
      )}

      <p className="form-error" aria-live="polite">
        {error}
      </p>

      <div className="form-actions">
        <button className="btn btn-outline" type="button" onClick={() => setStep((current) => Math.max(1, current - 1))} disabled={step === 1}>
          Indietro
        </button>
        {step < totalSteps ? (
          <button className="btn btn-primary" type="button" onClick={next}>
            Continua
          </button>
        ) : (
          <>
            <button className="btn btn-outline" type="button" onClick={() => void copySummary()}>
              <Clipboard size={18} />
              {copied ? "Copiato" : "Copia riepilogo"}
            </button>
            <button className="btn btn-primary" type="submit">
              {SITE_CONFIG.email ? <Send size={18} /> : <CheckCircle2 size={18} />}
              {SITE_CONFIG.email ? "Invia richiesta" : "Conferma"}
            </button>
          </>
        )}
      </div>

      {!SITE_CONFIG.email && step === totalSteps && (
        <a className="quick-phone" href={SITE_CONFIG.telHref}>
          <Phone size={17} />
          Chiama {SITE_CONFIG.phone}
        </a>
      )}
    </form>
  );
}

function FormStep({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="form-step">
      <p className="quiz-kicker">{kicker}</p>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function ChoiceGrid({
  options,
  selected,
  onChoose,
}: {
  options: string[];
  selected: string;
  onChoose: (value: string) => void;
}) {
  return (
    <div className="choice-grid">
      {options.map((option) => (
        <button
          key={option}
          className="choice-btn"
          type="button"
          aria-pressed={selected === option}
          onClick={() => onChoose(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
