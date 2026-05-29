import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findService, SITE_CONFIG } from "../data/site";

const defaultTitle = "D&D Laboratorio Odontotecnico a Gambettola";
const defaultDescription =
  "D&D Laboratorio odontotecnico a Gambettola: protesi, flusso digitale, corsi e consulenze tecniche per studi dentistici.";

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: defaultTitle,
    description: defaultDescription,
  },
  "/lavorazioni-odontotecniche": {
    title: "Lavorazioni Odontotecniche | D&D Laboratorio",
    description:
      "Scopri le lavorazioni D&D: protesi fissa, mobile, Toronto, scheletrati, faccette, protesi implantare e abutment personalizzati.",
  },
  "/flusso-digitale": {
    title: "Flusso Digitale Odontotecnico | D&D Laboratorio",
    description:
      "D&D integra flusso analogico e digitale per progettare e produrre manufatti odontotecnici con file e impronte digitali.",
  },
  "/corsi": {
    title: "Corsi per Odontotecnici e Clinici | D&D Laboratorio",
    description:
      "Formazione D&D per odontotecnici e clinici su flusso digitale, qualità dei manufatti e organizzazione clinico-tecnica.",
  },
  "/serate-formative": {
    title: "Serate Formative | D&D Laboratorio",
    description:
      "Incontri e aggiornamenti professionali D&D su chirurgia guidata, digitale in odontoiatria e medicina estetica.",
  },
  "/su-di-noi": {
    title: "Su di Noi | D&D Laboratorio",
    description:
      "La storia di D&D di Ortolani Denis, laboratorio odontotecnico dal 1990 con sede a Gambettola.",
  },
  "/contatti": {
    title: "Contatti | D&D Laboratorio",
    description:
      "Contatta D&D Laboratorio odontotecnico a Gambettola per preventivi, casi tecnici, corsi e informazioni.",
  },
  "/prenota-ora": {
    title: "Prenota Ora | D&D Laboratorio",
    description:
      "Prenota una valutazione tecnica con D&D Laboratorio e invia il quadro iniziale del tuo caso odontotecnico.",
  },
};

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, "") || "/";
    const serviceMatch = path.match(/^\/lavorazioni-odontotecniche\/([^/]+)$/);
    const service = serviceMatch ? findService(serviceMatch[1]) : undefined;
    const meta = service
      ? {
          title: `${service.title} | D&D Laboratorio`,
          description: service.excerpt,
        }
      : routeMeta[path] ?? routeMeta["/"];
    const canonical = `${window.location.origin}${path}`;

    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("robots", "index,follow,max-image-preview:large");
    setMeta("og:type", "website", "property");
    setMeta("og:locale", "it_IT", "property");
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:image", SITE_CONFIG.heroImage, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setCanonical(canonical);
  }, [location.pathname]);

  return null;
}

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}
