import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { MultiStepLeadForm } from "../components/MultiStepLeadForm";
import { SERVICES } from "../data/site";

const labHeroSrc = "/images/lab-1100.jpg";
const labHeroSrcSet = "/images/lab-760.jpg 760w, /images/lab-1100.jpg 1100w, /images/lab-1400.jpg 1400w";

const withImageWidth = (url: string, width: number) => url.replace(/([?&])width=\d+/, `$1width=${width}`);
const imageSrcSet = (url: string, widths: number[]) =>
  widths.map((width) => `${withImageWidth(url, width)} ${width}w`).join(", ");

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
          <img
            src={labHeroSrc}
            srcSet={labHeroSrcSet}
            sizes="(max-width: 720px) calc(100vw - 28px), 520px"
            alt="Laboratorio D&D"
            width="760"
            height="570"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap service-grid service-grid--wide">
          {SERVICES.map((service) => (
            <Link className="service-card" key={service.slug} to={`/lavorazioni-odontotecniche/${service.slug}`}>
              <img
                src={service.heroImage}
                srcSet={imageSrcSet(service.heroImage, [480, 760, 1100, 1400])}
                sizes="(max-width: 720px) calc(100vw - 30px), (max-width: 1120px) calc(50vw - 32px), 370px"
                alt=""
                loading="lazy"
                decoding="async"
              />
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
