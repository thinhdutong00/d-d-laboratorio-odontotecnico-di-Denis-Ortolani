import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import { pages, SERVICES, SITE_CONFIG } from "../data/site";

export function Layout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  if (location.pathname === "/prenota-ora") {
    return <main id="main">{children}</main>;
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Vai al contenuto
      </a>
      <div className="topbar">
        <div className="wrap topbar__inner">
          <a href={SITE_CONFIG.telHref}>
            <Phone size={15} />
            {SITE_CONFIG.phone}
          </a>
          <a href={SITE_CONFIG.mapUrl} target="_blank" rel="noreferrer">
            <MapPin size={15} />
            Gambettola FC
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap nav">
          <Link className="brand" to="/">
            <img src={SITE_CONFIG.logoUrl} alt="" width="64" height="64" decoding="async" />
            <span>
              <strong>D&D</strong>
              Laboratorio
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Navigazione principale">
            <div className="nav-item has-menu">
              <NavLink to="/lavorazioni-odontotecniche">
                Lavorazioni
                <ChevronDown size={16} />
              </NavLink>
              <div className="submenu" aria-label="Sottomenu lavorazioni">
                {SERVICES.map((service) => (
                  <NavLink key={service.slug} to={`/lavorazioni-odontotecniche/${service.slug}`}>
                    <span>{service.title}</span>
                    <ArrowRight size={15} />
                  </NavLink>
                ))}
              </div>
            </div>
            {pages.slice(1).map((page) => (
              <NavLink key={page.path} to={page.path}>
                {page.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Link className="icon-btn" to="/lavorazioni-odontotecniche" aria-label="Cerca una lavorazione">
              <Search size={20} />
            </Link>
            <Link className="btn btn-primary nav-cta" to="/prenota-ora">
              Prenota Ora
            </Link>
            <button
              className="menu-toggle"
              type="button"
              aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
          <div className="wrap">
            <details open>
              <summary>
                Lavorazioni odontotecniche
                <ChevronDown size={17} />
              </summary>
              <div className="mobile-services">
                <NavLink to="/lavorazioni-odontotecniche">Panoramica lavorazioni</NavLink>
                {SERVICES.map((service) => (
                  <NavLink key={service.slug} to={`/lavorazioni-odontotecniche/${service.slug}`}>
                    {service.title}
                  </NavLink>
                ))}
              </div>
            </details>
            {pages.slice(1).map((page) => (
              <NavLink key={page.path} to={page.path}>
                {page.label}
              </NavLink>
            ))}
            <a className="btn btn-outline" href={SITE_CONFIG.telHref}>
              <Phone size={17} />
              Chiama laboratorio
            </a>
            <Link className="btn btn-primary" to="/prenota-ora">
              Prenota Ora
            </Link>
          </div>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <section className="footer-cta">
          <div className="wrap footer-cta__inner">
            <div>
              <span className="eyebrow">Partner tecnico per studi dentistici</span>
              <h2>Porta il prossimo caso in laboratorio con un quadro chiaro.</h2>
            </div>
            <Link className="btn btn-accent" to="/prenota-ora">
              Prenota Ora
            </Link>
          </div>
        </section>
        <div className="wrap footer-main">
          <div>
            <img
              className="footer-logo"
              src={SITE_CONFIG.logoUrl}
              alt="D&D Laboratorio"
              width="96"
              height="96"
              loading="lazy"
              decoding="async"
            />
            <p>
              Laboratorio odontotecnico a Gambettola, specializzato in lavorazioni analogiche e
              digitali, produzione protesica e formazione per professionisti.
            </p>
          </div>
          <div>
            <h3>Lavorazioni</h3>
            {SERVICES.slice(0, 5).map((service) => (
              <Link key={service.slug} to={`/lavorazioni-odontotecniche/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
          <div>
            <h3>Contatti</h3>
            <a href={SITE_CONFIG.telHref}>{SITE_CONFIG.phone}</a>
            <a href={SITE_CONFIG.mapUrl} target="_blank" rel="noreferrer">
              {SITE_CONFIG.address}
            </a>
            <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer">
              <Instagram size={16} />
              Instagram
            </a>
          </div>
        </div>
        <div className="wrap footer-legal">
          <span>© 2026 {SITE_CONFIG.legalName}. Tutti i diritti riservati.</span>
          <span>Le richieste inviate dal sito hanno carattere informativo e vengono confermate dal laboratorio.</span>
        </div>
      </footer>

      <div className="mobile-cta" aria-label="Azioni rapide mobile">
        <a className="btn btn-outline" href={SITE_CONFIG.telHref}>
          Chiama
        </a>
        <Link className="btn btn-primary" to="/prenota-ora">
          Prenota Ora
        </Link>
      </div>
    </>
  );
}
