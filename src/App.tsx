import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { RevealEffects } from "./components/RevealEffects";
import { SeoManager } from "./components/SeoManager";
import { AboutPage } from "./pages/AboutPage";
import { BookingPage } from "./pages/BookingPage";
import { ContactPage } from "./pages/ContactPage";
import { CoursesPage } from "./pages/CoursesPage";
import { DigitalFlowPage } from "./pages/DigitalFlowPage";
import { HomePage } from "./pages/HomePage";
import { ServicePage } from "./pages/ServicePage";
import { ServicesPage } from "./pages/ServicesPage";
import { TrainingEveningsPage } from "./pages/TrainingEveningsPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <Layout>
      <ScrollToTop />
      <SeoManager />
      <RevealEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lavorazioni-odontotecniche" element={<ServicesPage />} />
        <Route path="/lavorazioni-odontotecniche/:slug" element={<ServicePage />} />
        <Route path="/flusso-digitale" element={<DigitalFlowPage />} />
        <Route path="/corsi" element={<CoursesPage />} />
        <Route path="/serate-formative" element={<TrainingEveningsPage />} />
        <Route path="/su-di-noi" element={<AboutPage />} />
        <Route path="/contatti" element={<ContactPage />} />
        <Route path="/prenota-ora" element={<BookingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
