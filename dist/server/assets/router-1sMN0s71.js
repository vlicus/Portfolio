import { useRouterState, Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { Code2, BriefcaseBusiness, Camera, Home, User, FolderKanban, FileText, Languages, X, Menu } from "lucide-react";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "button", "data-variant": variant, "data-size": size, className: cn(buttonVariants({ variant, size, className })), ...props });
}
const logoImage = "/assets/logo-Dd6gEkJl.png";
const defaultLocale = "en";
const localeOptions = [
  { value: "en", label: "English", shortLabel: "EN" },
  { value: "ca", label: "Català", shortLabel: "CAT" },
  { value: "es", label: "Español", shortLabel: "ES" }
];
function normalizeLocale(value) {
  if (!value) {
    return defaultLocale;
  }
  const normalizedValue = value.toLowerCase();
  if (normalizedValue.startsWith("ca")) {
    return "ca";
  }
  if (normalizedValue.startsWith("es")) {
    return "es";
  }
  return defaultLocale;
}
const localizedRootMetadata = {
  en: {
    siteTitle: "Samuel Cobas Portfolio",
    siteDescription: "Product-minded frontend developer portfolio with selected projects, background, and resume.",
    siteKeywords: "Samuel Cobas, frontend developer, portfolio, React, TypeScript, TanStack Query, TanStack Form",
    siteAuthor: "Samuel Cobas",
    siteUrl: "https://samuel-cobas-portfolio.vercel.app",
    ogImageAlt: "Preview image for the Samuel Cobas portfolio website"
  },
  ca: {
    siteTitle: "Samuel Cobas Portfolio",
    siteDescription: "Portfoli de desenvolupament frontend orientat a producte amb projectes seleccionats, context professional i CV.",
    siteKeywords: "Samuel Cobas, desenvolupador frontend, portfoli, React, TypeScript, TanStack Query, TanStack Form",
    siteAuthor: "Samuel Cobas",
    siteUrl: "https://samuel-cobas-portfolio.vercel.app",
    ogImageAlt: "Imatge de previsualització del portfolio de Samuel Cobas"
  },
  es: {
    siteTitle: "Samuel Cobas Portfolio",
    siteDescription: "Portfolio de desarrollo frontend orientado a producto con proyectos seleccionados, contexto profesional y CV.",
    siteKeywords: "Samuel Cobas, desarrollador frontend, portfolio, React, TypeScript, TanStack Query, TanStack Form",
    siteAuthor: "Samuel Cobas",
    siteUrl: "https://samuel-cobas-portfolio.vercel.app",
    ogImageAlt: "Imagen de previsualización del portfolio de Samuel Cobas"
  }
};
const localizedPageMetadata = {
  en: {
    home: {
      title: "Samuel Cobas Portfolio",
      description: "Product-minded frontend developer portfolio with selected projects, background, and resume.",
      path: "/"
    },
    about: {
      title: "About",
      description: "Background, core stack, QA direction, and the path Samuel Cobas took into frontend-focused product engineering.",
      path: "/about"
    },
    projects: {
      title: "Projects",
      description: "Selected frontend, XR, and product-delivery projects built by Samuel Cobas.",
      path: "/project"
    },
    resume: {
      title: "Resume",
      description: "Resume overview and downloadable CV for Samuel Cobas, covering experience, stack, and next-step responsibilities.",
      path: "/resume"
    }
  },
  ca: {
    home: {
      title: "Samuel Cobas Portfolio",
      description: "Portfoli de desenvolupament frontend orientat a producte amb projectes seleccionats, context professional i CV.",
      path: "/"
    },
    about: {
      title: "Sobre mi",
      description: "Context, stack principal, orientació cap a QA i trajectòria de Samuel Cobas dins l’enginyeria frontend de producte.",
      path: "/about"
    },
    projects: {
      title: "Projectes",
      description: "Projectes seleccionats de frontend, XR i lliurament de producte desenvolupats per Samuel Cobas.",
      path: "/project"
    },
    resume: {
      title: "CV",
      description: "Resum del CV i descàrrega del document de Samuel Cobas, amb experiència, stack i responsabilitats que s’estan ampliant.",
      path: "/resume"
    }
  },
  es: {
    home: {
      title: "Samuel Cobas Portfolio",
      description: "Portfolio de desarrollo frontend orientado a producto con proyectos seleccionados, contexto profesional y CV.",
      path: "/"
    },
    about: {
      title: "Sobre mí",
      description: "Contexto, stack principal, proyección hacia QA y trayectoria de Samuel Cobas dentro de la ingeniería frontend de producto.",
      path: "/about"
    },
    projects: {
      title: "Proyectos",
      description: "Proyectos seleccionados de frontend, XR y entrega de producto desarrollados por Samuel Cobas.",
      path: "/project"
    },
    resume: {
      title: "CV",
      description: "Resumen del CV y descarga del documento de Samuel Cobas, con experiencia, stack y responsabilidades que están ampliándose.",
      path: "/resume"
    }
  }
};
function getRootMetadata(locale) {
  const metadata = localizedRootMetadata[locale];
  return {
    ...metadata,
    ogImageUrl: `${metadata.siteUrl}/og-image.png`
  };
}
function getPageMetadata(locale) {
  return localizedPageMetadata[locale];
}
function getPageMetadataByPath(locale, path) {
  const metadata = getPageMetadata(locale);
  if (path === "/about") {
    return metadata.about;
  }
  if (path === "/project") {
    return metadata.projects;
  }
  if (path === "/resume") {
    return metadata.resume;
  }
  return metadata.home;
}
const defaultRootMetadata = getRootMetadata(defaultLocale);
const siteTitle = defaultRootMetadata.siteTitle;
const siteDescription = defaultRootMetadata.siteDescription;
const siteUrl = defaultRootMetadata.siteUrl;
const ogImageUrl = defaultRootMetadata.ogImageUrl;
const siteKeywords = defaultRootMetadata.siteKeywords;
const siteAuthor = defaultRootMetadata.siteAuthor;
const ogImageAlt = defaultRootMetadata.ogImageAlt;
const pageMetadata = getPageMetadata(defaultLocale);
function createPageHead({ title, description, path = "/" }) {
  const pageUrl = new URL(path, siteUrl).toString();
  const pageTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  return {
    meta: [
      { title: pageTitle },
      { name: "description", content: description },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: pageUrl },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: description }
    ],
    links: [{ rel: "canonical", href: pageUrl }]
  };
}
const localeStorageKey = "portfolio-locale";
const I18nContext = createContext(null);
function I18nProvider({ children }) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname
  });
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }
    return normalizeLocale(window.localStorage.getItem(localeStorageKey) ?? window.navigator.language);
  });
  useEffect(() => {
    const rootMetadata = getRootMetadata(locale);
    const pageMetadata2 = getPageMetadataByPath(locale, pathname);
    const pageTitle = pageMetadata2.title === rootMetadata.siteTitle ? pageMetadata2.title : `${pageMetadata2.title} | ${rootMetadata.siteTitle}`;
    const pageUrl = new URL(pageMetadata2.path, rootMetadata.siteUrl).toString();
    window.localStorage.setItem(localeStorageKey, locale);
    document.documentElement.lang = locale;
    document.title = pageTitle;
    updateMetaTag("name", "description", pageMetadata2.description);
    updateMetaTag("name", "keywords", rootMetadata.siteKeywords);
    updateMetaTag("name", "author", rootMetadata.siteAuthor);
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:site_name", rootMetadata.siteTitle);
    updateMetaTag("property", "og:title", pageTitle);
    updateMetaTag("property", "og:description", pageMetadata2.description);
    updateMetaTag("property", "og:url", pageUrl);
    updateMetaTag("property", "og:image", rootMetadata.ogImageUrl);
    updateMetaTag("property", "og:image:alt", rootMetadata.ogImageAlt);
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", pageTitle);
    updateMetaTag("name", "twitter:description", pageMetadata2.description);
    updateMetaTag("name", "twitter:image", rootMetadata.ogImageUrl);
    updateLinkTag("canonical", pageUrl);
  }, [locale, pathname]);
  function setLocale(nextLocale) {
    setLocaleState(nextLocale);
  }
  return /* @__PURE__ */ jsx(I18nContext.Provider, { value: { locale, setLocale, localeOptions }, children });
}
function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
function updateMetaTag(attribute, key, value) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}
function updateLinkTag(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}
const personName = "Samuel Cobas";
const portfolioRepoUrl = "https://github.com/vlicus/Portfolio";
const navigationDefinitions = [
  { to: "/", key: "home", icon: Home },
  { to: "/about", key: "about", icon: User },
  { to: "/project", key: "projects", icon: FolderKanban },
  { to: "/resume", key: "resume", icon: FileText }
];
const socialLinks = [
  { label: "GitHub", href: "https://github.com/vlicus", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-cobas/", icon: BriefcaseBusiness },
  { label: "Instagram", href: "https://www.instagram.com/vlicus93/", icon: Camera }
];
const localizedSiteContent = {
  en: {
    siteLabel: "Portfolio",
    navigationLabels: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume"
    },
    homeHero: {
      eyebrow: `Hi there, I'm ${personName}`,
      title: "Frontend-focused engineer building reliable product experiences with React and TypeScript.",
      description: "I work across frontend and full-stack delivery, with a strong emphasis on maintainable React code, thoughtful interfaces, and product decisions that hold up in production.",
      roles: ["Frontend Engineer", "React, TanStack Query & Forms", "Software Engineer", "API & QA-aware Collaborator"],
      primaryCtaLabel: "Get to know me",
      secondaryCtaLabel: "View source",
      illustrationAlt: "Illustration representing Samuel Cobas working at his desk"
    },
    homeAbout: {
      eyebrow: "About",
      title: "I moved into software from hospitality and stayed for the mix of craft, systems thinking, and product problem solving.",
      paragraphs: [
        "I build product-facing features with JavaScript, TypeScript, React, Node.js, and SQL, and I am increasingly working with TanStack Query and structured form flows where they improve reliability and developer experience.",
        "As the team grows, I also expect to take on more QA ownership. My hands-on QA work today is focused on API testing with Postman and Swagger-documented Next.js endpoints, validating behavior, edge cases, and frontend-backend alignment."
      ],
      portraitAlt: "Portrait of Samuel Cobas"
    },
    header: {
      logoAlt: `${personName} logo`,
      primaryNavLabel: "Primary navigation",
      mobileNavLabel: "Mobile navigation",
      sourceLabel: "Source",
      languageLabel: "Language",
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu"
    },
    footer: {
      credit: `Designed and developed by ${personName}`,
      copyrightSuffix: "SB",
      externalProfileSuffix: "opens in a new tab"
    },
    notFound: {
      eyebrow: "404",
      title: "Page not found",
      description: "The route you requested does not exist. You can return to the home page or jump to another section of the portfolio.",
      goHomeLabel: "Go home"
    },
    skipToContentLabel: "Skip to main content",
    externalProfileLabel: "profile"
  },
  ca: {
    siteLabel: "Portfoli",
    navigationLabels: {
      home: "Inici",
      about: "Sobre mi",
      projects: "Projectes",
      resume: "CV"
    },
    homeHero: {
      eyebrow: `Hola, soc ${personName}`,
      title: "Enginyer frontend centrat a construir experiències de producte fiables amb React i TypeScript.",
      description: "Treballo entre frontend i full-stack, amb especial atenció a codi React mantenible, interfícies cuidades i decisions de producte que funcionin bé en entorns reals.",
      roles: ["Enginyer Frontend", "React, TanStack Query i Forms", "Enginyer de Programari", "Col·laborador orientat a API i QA"],
      primaryCtaLabel: "Coneix-me millor",
      secondaryCtaLabel: "Veure el codi",
      illustrationAlt: "Il·lustració de Samuel Cobas treballant al seu escriptori"
    },
    homeAbout: {
      eyebrow: "Sobre mi",
      title: "Vaig passar de l’hostaleria al software i m’hi vaig quedar per la combinació d’ofici, visió de sistemes i resolució de problemes de producte.",
      paragraphs: [
        "Construeixo funcionalitats orientades a producte amb JavaScript, TypeScript, React, Node.js i SQL, i cada vegada treballo més amb TanStack Query i fluxos de formularis estructurats quan milloren la fiabilitat i l’experiència de desenvolupament.",
        "A mesura que l’equip creixi, també espero assumir més responsabilitat en QA. La meva experiència pràctica avui se centra en proves d’API amb Postman i endpoints de Next.js documentats amb Swagger, validant comportaments, casos límit i l’alineació entre frontend i backend."
      ],
      portraitAlt: "Retrat de Samuel Cobas"
    },
    header: {
      logoAlt: `Logotip de ${personName}`,
      primaryNavLabel: "Navegació principal",
      mobileNavLabel: "Navegació mòbil",
      sourceLabel: "Codi",
      languageLabel: "Idioma",
      openMenuLabel: "Obrir el menú de navegació",
      closeMenuLabel: "Tancar el menú de navegació"
    },
    footer: {
      credit: `Dissenyat i desenvolupat per ${personName}`,
      copyrightSuffix: "SB",
      externalProfileSuffix: "s’obre en una pestanya nova"
    },
    notFound: {
      eyebrow: "404",
      title: "Pàgina no trobada",
      description: "La ruta que has demanat no existeix. Pots tornar a l’inici o anar a una altra secció del portfoli.",
      goHomeLabel: "Tornar a l’inici"
    },
    skipToContentLabel: "Anar directament al contingut principal",
    externalProfileLabel: "perfil"
  },
  es: {
    siteLabel: "Portfolio",
    navigationLabels: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      resume: "CV"
    },
    homeHero: {
      eyebrow: `Hola, soy ${personName}`,
      title: "Ingeniero frontend centrado en construir experiencias de producto fiables con React y TypeScript.",
      description: "Trabajo entre frontend y full-stack, con especial atención al código React mantenible, las interfaces cuidadas y las decisiones de producto que resisten bien en producción.",
      roles: ["Ingeniero Frontend", "React, TanStack Query y Forms", "Ingeniero de Software", "Colaborador orientado a API y QA"],
      primaryCtaLabel: "Conóceme mejor",
      secondaryCtaLabel: "Ver código",
      illustrationAlt: "Ilustración de Samuel Cobas trabajando en su escritorio"
    },
    homeAbout: {
      eyebrow: "Sobre mí",
      title: "Pasé de la hostelería al software y me quedé por la mezcla de oficio, visión de sistemas y resolución de problemas de producto.",
      paragraphs: [
        "Construyo funcionalidades orientadas a producto con JavaScript, TypeScript, React, Node.js y SQL, y cada vez trabajo más con TanStack Query y flujos de formularios estructurados cuando mejoran la fiabilidad y la experiencia de desarrollo.",
        "A medida que el equipo crezca, también espero asumir más responsabilidad en QA. Mi experiencia práctica hoy se centra en pruebas de API con Postman y endpoints de Next.js documentados con Swagger, validando comportamiento, casos límite y la alineación entre frontend y backend."
      ],
      portraitAlt: "Retrato de Samuel Cobas"
    },
    header: {
      logoAlt: `Logotipo de ${personName}`,
      primaryNavLabel: "Navegación principal",
      mobileNavLabel: "Navegación móvil",
      sourceLabel: "Código",
      languageLabel: "Idioma",
      openMenuLabel: "Abrir menú de navegación",
      closeMenuLabel: "Cerrar menú de navegación"
    },
    footer: {
      credit: `Diseñado y desarrollado por ${personName}`,
      copyrightSuffix: "SB",
      externalProfileSuffix: "se abre en una pestaña nueva"
    },
    notFound: {
      eyebrow: "404",
      title: "Página no encontrada",
      description: "La ruta que has solicitado no existe. Puedes volver al inicio o ir a otra sección del portfolio.",
      goHomeLabel: "Volver al inicio"
    },
    skipToContentLabel: "Ir al contenido principal",
    externalProfileLabel: "perfil"
  }
};
function getSiteContent(locale) {
  const content = localizedSiteContent[locale];
  return {
    siteLabel: content.siteLabel,
    navigationItems: navigationDefinitions.map((item) => ({
      to: item.to,
      label: content.navigationLabels[item.key],
      icon: item.icon
    })),
    socialLinks,
    footerLinks: socialLinks.filter((link) => link.label !== "Instagram"),
    homeHeroContent: {
      eyebrow: content.homeHero.eyebrow,
      title: content.homeHero.title,
      description: content.homeHero.description,
      roles: [...content.homeHero.roles],
      primaryCta: {
        label: content.homeHero.primaryCtaLabel,
        href: "#about"
      },
      secondaryCta: {
        label: content.homeHero.secondaryCtaLabel,
        href: portfolioRepoUrl
      },
      illustrationAlt: content.homeHero.illustrationAlt
    },
    homeAboutContent: content.homeAbout,
    headerContent: content.header,
    footerContent: content.footer,
    notFoundContent: {
      eyebrow: content.notFound.eyebrow,
      title: content.notFound.title,
      description: content.notFound.description,
      links: [
        { to: "/", label: content.notFound.goHomeLabel },
        { to: "/about", label: content.navigationLabels.about },
        { to: "/project", label: content.navigationLabels.projects }
      ]
    },
    skipToContentLabel: content.skipToContentLabel,
    externalProfileLabel: content.externalProfileLabel
  };
}
function SiteHeader() {
  const { locale, localeOptions: localeOptions2, setLocale } = useI18n();
  const pathname = useRouterState({
    select: (state) => state.location.pathname
  });
  const { headerContent, navigationItems, siteLabel } = getSiteContent(locale);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleLocaleChange(value) {
    setLocale(normalizeLocale(value));
  }
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 px-4 pt-4 sm:px-6", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "mx-auto flex w-full max-w-6xl flex-col rounded-[1.5rem] border border-white/10 bg-stone-950/75 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur transition sm:px-6",
        isScrolled && "border-cyan-300/15 bg-stone-950/90 shadow-2xl shadow-cyan-950/10"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { className: "flex items-center gap-3", to: "/", children: [
            /* @__PURE__ */ jsx("img", { alt: headerContent.logoAlt, className: "h-10 w-10 rounded-full border border-white/10 bg-white/5 object-contain p-1", src: logoImage }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold tracking-wide text-white", children: personName }),
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-stone-400", children: siteLabel })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("nav", { "aria-label": headerContent.primaryNavLabel, className: "hidden items-center gap-2 md:flex", children: [
            navigationItems.map(({ to, label, icon: Icon }) => {
              const isActive = pathname === to;
              return /* @__PURE__ */ jsxs(
                Link,
                {
                  "aria-current": isActive ? "page" : void 0,
                  className: cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition",
                    isActive ? "bg-cyan-300 text-slate-950" : "text-stone-200 hover:bg-white/10 hover:text-white"
                  ),
                  to,
                  children: [
                    /* @__PURE__ */ jsx(Icon, { className: "size-4" }),
                    label
                  ]
                },
                to
              );
            }),
            /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-stone-100 transition hover:bg-white/10", children: [
              /* @__PURE__ */ jsx(Languages, { className: "size-4 text-stone-300" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: headerContent.languageLabel }),
              /* @__PURE__ */ jsx(
                "select",
                {
                  "aria-label": headerContent.languageLabel,
                  className: "min-w-[3.75rem] appearance-none bg-transparent text-xs font-semibold uppercase tracking-[0.2em] text-stone-100 outline-none",
                  onChange: (event) => handleLocaleChange(event.target.value),
                  value: locale,
                  children: localeOptions2.map((option) => /* @__PURE__ */ jsx("option", { className: "bg-stone-950 text-stone-100", value: option.value, children: option.shortLabel }, option.value))
                }
              )
            ] }),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white", children: /* @__PURE__ */ jsxs("a", { href: portfolioRepoUrl, rel: "noopener noreferrer", target: "_blank", children: [
              /* @__PURE__ */ jsx(Code2, { className: "size-4" }),
              headerContent.sourceLabel
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-controls": "mobile-navigation",
              "aria-expanded": isOpen,
              "aria-label": isOpen ? headerContent.closeMenuLabel : headerContent.openMenuLabel,
              className: "inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-100 transition hover:bg-white/10 md:hidden",
              onClick: () => setIsOpen((open) => !open),
              type: "button",
              children: isOpen ? /* @__PURE__ */ jsx(X, { className: "size-4" }) : /* @__PURE__ */ jsx(Menu, { className: "size-4" })
            }
          )
        ] }),
        isOpen ? /* @__PURE__ */ jsxs("nav", { "aria-label": headerContent.mobileNavLabel, id: "mobile-navigation", className: "mt-4 grid gap-2 border-t border-white/10 pt-4 md:hidden", children: [
          /* @__PURE__ */ jsxs("label", { className: "inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-stone-100 transition hover:bg-white/10", children: [
            /* @__PURE__ */ jsx(Languages, { className: "size-4 text-stone-300" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-stone-100", children: headerContent.languageLabel }),
            /* @__PURE__ */ jsx(
              "select",
              {
                "aria-label": headerContent.languageLabel,
                className: "ml-auto min-w-[4.25rem] appearance-none bg-transparent text-xs font-semibold uppercase tracking-[0.2em] text-stone-100 outline-none",
                onChange: (event) => handleLocaleChange(event.target.value),
                value: locale,
                children: localeOptions2.map((option) => /* @__PURE__ */ jsx("option", { className: "bg-stone-950 text-stone-100", value: option.value, children: option.shortLabel }, option.value))
              }
            )
          ] }),
          navigationItems.map(({ to, label, icon: Icon }) => {
            const isActive = pathname === to;
            return /* @__PURE__ */ jsxs(
              Link,
              {
                "aria-current": isActive ? "page" : void 0,
                className: cn(
                  "inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                  isActive ? "bg-cyan-300 text-slate-950" : "bg-white/5 text-stone-100 hover:bg-white/10"
                ),
                onClick: () => setIsOpen(false),
                to,
                children: [
                  /* @__PURE__ */ jsx(Icon, { className: "size-4" }),
                  label
                ]
              },
              to
            );
          }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10",
              href: portfolioRepoUrl,
              rel: "noopener noreferrer",
              target: "_blank",
              children: [
                /* @__PURE__ */ jsx(Code2, { className: "size-4" }),
                headerContent.sourceLabel
              ]
            }
          )
        ] }) : null
      ]
    }
  ) });
}
const Route$4 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#140f23" },
      { title: siteTitle },
      {
        name: "description",
        content: siteDescription
      },
      { name: "keywords", content: siteKeywords },
      { name: "author", content: siteAuthor },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: siteTitle },
      { property: "og:title", content: siteTitle },
      { property: "og:description", content: siteDescription },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:alt", content: ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: siteTitle },
      { name: "twitter:description", content: siteDescription },
      { name: "twitter:image", content: ogImageUrl }
    ],
    links: [
      { rel: "canonical", href: siteUrl },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/manifest.json" }
    ]
  }),
  notFoundComponent: NotFoundPage,
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
function RootDocument({ children }) {
  const { locale } = useI18n();
  const { skipToContentLabel } = getSiteContent(locale);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "min-h-screen bg-stone-950 text-stone-100 antialiased", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#main-content",
          className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950",
          children: skipToContentLabel
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen", children: [
        /* @__PURE__ */ jsx(SiteHeader, {}),
        children
      ] }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function NotFoundPage() {
  return /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsx(NotFoundPageContent, {}) });
}
function NotFoundPageContent() {
  const { locale } = useI18n();
  const { notFoundContent } = getSiteContent(locale);
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsxs("main", { id: "main-content", className: "mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-16", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: notFoundContent.eyebrow }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold tracking-tight text-white", children: notFoundContent.title }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl text-base leading-7 text-stone-300", children: notFoundContent.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: notFoundContent.links.map((link) => /* @__PURE__ */ jsx(
      Link,
      {
        to: link.to,
        className: link.to === "/" ? "rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-stone-950 transition hover:bg-cyan-300" : "rounded-full border border-stone-700 px-5 py-2 text-sm font-semibold text-stone-100 transition hover:border-stone-500 hover:bg-stone-900",
        children: link.label
      },
      link.to
    )) })
  ] }) });
}
const $$splitComponentImporter$3 = () => import("./resume-BLDHP8Gm.js");
const Route$3 = createFileRoute("/resume")({
  head: () => createPageHead(pageMetadata.resume),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./project-Ct179oYZ.js");
const Route$2 = createFileRoute("/project")({
  head: () => createPageHead(pageMetadata.projects),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DUuxQq_r.js");
const Route$1 = createFileRoute("/about")({
  head: () => createPageHead(pageMetadata.about),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-ajTtIQlc.js");
const Route = createFileRoute("/")({
  head: () => createPageHead(pageMetadata.home),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$3.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$4
});
const ProjectRoute = Route$2.update({
  id: "/project",
  path: "/project",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ProjectRoute,
  ResumeRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true
  });
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  cn as c,
  getSiteContent as g,
  personName as p,
  router as r,
  useI18n as u
};
