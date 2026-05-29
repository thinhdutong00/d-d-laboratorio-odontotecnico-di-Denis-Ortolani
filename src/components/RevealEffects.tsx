import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

type RevealGroup = {
  selector: string;
  baseDelay?: number;
  stagger?: number;
  maxDelay?: number;
};

const revealGroups: RevealGroup[] = [
  {
    selector: ".hero-copy .eyebrow, .hero-copy h1, .hero-copy > p, .hero-copy .cta-row, .proof-strip",
    stagger: 80,
    maxDelay: 320,
  },
  {
    selector: ".hero-grid > .lead-form",
    baseDelay: 160,
  },
  {
    selector:
      ".page-hero__inner .eyebrow, .page-hero__inner h1, .page-hero__inner p, .page-hero__inner .btn, .page-hero__inner img",
    stagger: 80,
    maxDelay: 320,
  },
  {
    selector:
      ".service-hero__grid > div:first-child .eyebrow, .service-hero__grid > div:first-child h1, .service-hero__grid > div:first-child p, .service-hero__grid > div:first-child .cta-row",
    stagger: 80,
    maxDelay: 320,
  },
  {
    selector: ".service-hero__grid > .lead-form",
    baseDelay: 180,
  },
  {
    selector: ".section-head .eyebrow, .section-head h2, .section-head p",
    stagger: 70,
    maxDelay: 210,
  },
  {
    selector:
      ".split > div:first-child .eyebrow, .split > div:first-child h2, .split > div:first-child > p, .split > div:first-child .btn",
    stagger: 70,
    maxDelay: 280,
  },
  {
    selector:
      ".service-card, .feature-list article, .benefit-list article, .process-step, .mini-card, .timeline article, .faq-list details",
    stagger: 70,
    maxDelay: 420,
  },
  {
    selector: ".split > .lead-form, .contact-panel, .dashboard-card, .footer-cta__inner > *, .footer-main > div",
    stagger: 90,
    maxDelay: 270,
  },
  {
    selector: ".booking-intro .eyebrow, .booking-intro h1, .booking-intro p, .booking-proof span, .booking-form-shell",
    stagger: 80,
    maxDelay: 320,
  },
];

export function RevealEffects() {
  const location = useLocation();

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px",
      },
    );
    const observed = new WeakSet<HTMLElement>();

    const applyReveal = () => {
      const revealMap = new Map<HTMLElement, number>();

      revealGroups.forEach(({ selector, baseDelay = 0, stagger = 0, maxDelay = 0 }) => {
        document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
          const delay = baseDelay + Math.min(index * stagger, maxDelay);
          const currentDelay = revealMap.get(element);
          revealMap.set(element, currentDelay === undefined ? delay : Math.min(currentDelay, delay));
        });
      });

      const elements = Array.from(revealMap.keys()).filter(
        (element) => !element.closest(".mobile-cta") && !element.closest(".site-header"),
      );

      elements.forEach((element) => {
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${revealMap.get(element) ?? 0}ms`);

        if (reducedMotion || !("IntersectionObserver" in window)) {
          element.classList.add("is-visible");
          return;
        }

        if (!observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    };

    applyReveal();
    const rafId = window.requestAnimationFrame(applyReveal);
    const timeoutId = window.setTimeout(applyReveal, 120);
    const mutationObserver = new MutationObserver(applyReveal);
    mutationObserver.observe(document.getElementById("main") ?? document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}
