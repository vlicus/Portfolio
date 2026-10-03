import { useRouter, useRouterState, Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect } from "react";
import { ChevronDown, Check, ChevronUp, Code2, BriefcaseBusiness, Camera, FileText, FolderKanban, User, Home, X, Menu, Languages } from "lucide-react";
import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Root, Trigger, Icon, Value, Portal, Content, Viewport, Item, ItemText, ItemIndicator, ScrollUpButton, ScrollDownButton } from "@radix-ui/react-select";
const HOME_HERO_TYPING = {
  typingDelayMs: 70,
  deletingDelayMs: 35,
  roleHoldDelayMs: 1400,
  roleSwitchDelayMs: 220
};
const HOME_HERO_TRAITS = ["React", "TypeScript", "Product Thinking"];
const HOME_HERO_PARTICLES = [
  { left: "8%", top: "18%", size: 8, delay: "0s", duration: "14s" },
  { left: "18%", top: "68%", size: 5, delay: "1.2s", duration: "16s" },
  { left: "28%", top: "36%", size: 4, delay: "0.8s", duration: "12s" },
  { left: "42%", top: "14%", size: 6, delay: "2s", duration: "15s" },
  { left: "58%", top: "74%", size: 7, delay: "1.5s", duration: "18s" },
  { left: "64%", top: "28%", size: 4, delay: "2.4s", duration: "13s" },
  { left: "76%", top: "16%", size: 6, delay: "0.6s", duration: "17s" },
  { left: "84%", top: "52%", size: 5, delay: "1.8s", duration: "14s" },
  { left: "90%", top: "24%", size: 8, delay: "2.8s", duration: "19s" }
];
const HOME_HERO_PARTICLE_STREAKS = [
  {
    className: "hero-particle-drift absolute left-[14%] top-[52%] hidden h-px w-28 bg-gradient-to-r from-cyan-300/0 via-cyan-300/18 to-cyan-300/0 sm:block",
    delay: "0.4s",
    duration: "18s"
  },
  {
    className: "hero-particle-drift absolute right-[8%] top-[38%] hidden h-px w-24 bg-gradient-to-r from-sky-300/0 via-sky-300/16 to-sky-300/0 lg:block",
    delay: "1.4s",
    duration: "20s"
  }
];
const SITE_HEADER_SCROLL_OFFSET_PX = 20;
const SITE_NAV_ITEMS = [
  { labelKey: "home", basePath: "/" },
  { labelKey: "about", basePath: "/about" },
  { labelKey: "projects", basePath: "/project" },
  { labelKey: "resume", basePath: "/resume" }
];
const APP_BACKGROUND_GLOWS = [
  {
    key: "left-cyan",
    left: "-8rem",
    top: "6rem",
    size: "24rem",
    background: "rgba(34, 211, 238, 0.12)",
    delay: "0s",
    duration: "24s",
    className: "hidden sm:block"
  },
  {
    key: "right-sky",
    left: "auto",
    top: "22%",
    size: "30rem",
    background: "rgba(56, 189, 248, 0.1)",
    delay: "1.8s",
    duration: "28s",
    className: "right-[-10rem]"
  },
  {
    key: "bottom-white",
    left: "28%",
    top: "72%",
    size: "18rem",
    background: "rgba(255, 255, 255, 0.05)",
    delay: "0.8s",
    duration: "22s",
    className: "hidden md:block"
  }
];
const APP_BACKGROUND_STREAKS = [
  {
    key: "left-streak",
    left: "12%",
    top: "34%",
    width: "10rem",
    background: "linear-gradient(90deg, rgba(103,232,249,0), rgba(103,232,249,0.18), rgba(103,232,249,0))",
    delay: "0.2s",
    duration: "14s",
    className: "hidden lg:block"
  },
  {
    key: "right-streak",
    left: "auto",
    top: "62%",
    width: "8rem",
    background: "linear-gradient(90deg, rgba(125,211,252,0), rgba(125,211,252,0.16), rgba(125,211,252,0))",
    delay: "1.5s",
    duration: "16s",
    className: "right-[10%] hidden md:block"
  }
];
const APP_BACKGROUND_BEAMS = [
  {
    key: "cyan-beam",
    left: "-6%",
    top: "8%",
    width: "24rem",
    height: "32rem",
    background: "linear-gradient(180deg, rgba(34,211,238,0.12), rgba(34,211,238,0))",
    rotate: "-14deg",
    delay: "0s",
    duration: "26s",
    className: "hidden md:block"
  },
  {
    key: "sky-beam",
    left: "auto",
    top: "22%",
    width: "20rem",
    height: "28rem",
    background: "linear-gradient(180deg, rgba(125,211,252,0.1), rgba(125,211,252,0))",
    rotate: "18deg",
    delay: "1.2s",
    duration: "24s",
    className: "right-[-4%] hidden lg:block"
  }
];
const APP_BACKGROUND_NODES = [
  {
    key: "node-left",
    left: "14%",
    top: "24%",
    size: "0.5rem",
    delay: "0.4s",
    duration: "12s",
    className: "hidden md:block"
  },
  {
    key: "node-center",
    left: "48%",
    top: "18%",
    size: "0.375rem",
    delay: "1.2s",
    duration: "10s",
    className: "hidden lg:block"
  },
  {
    key: "node-right",
    left: "78%",
    top: "44%",
    size: "0.5rem",
    delay: "2s",
    duration: "13s",
    className: "hidden md:block"
  },
  {
    key: "node-bottom",
    left: "34%",
    top: "72%",
    size: "0.375rem",
    delay: "0.8s",
    duration: "11s",
    className: "hidden lg:block"
  }
];
function AppBackground() {
  return /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,18,0.92),rgba(3,6,15,0.98))]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.14),transparent_30%),radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.1),transparent_22%),radial-gradient(circle_at_80%_28%,rgba(56,189,248,0.08),transparent_26%),radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent_30%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-[-18rem] h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0),rgba(34,211,238,0.07),rgba(125,211,252,0.02),rgba(34,211,238,0))] opacity-80 blur-3xl" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.22]",
        style: {
          backgroundImage: "repeating-linear-gradient(90deg, rgba(148,163,184,0.06) 0, rgba(148,163,184,0.06) 1px, transparent 1px, transparent 104px), repeating-linear-gradient(0deg, rgba(148,163,184,0.04) 0, rgba(148,163,184,0.04) 1px, transparent 1px, transparent 104px)",
          maskImage: "radial-gradient(circle at center, black, transparent 88%)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.14]",
        style: {
          backgroundImage: "repeating-linear-gradient(90deg, rgba(103,232,249,0.08) 0, rgba(103,232,249,0.08) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(0deg, rgba(103,232,249,0.06) 0, rgba(103,232,249,0.06) 1px, transparent 1px, transparent 26px)",
          maskImage: "radial-gradient(circle at center, transparent 22%, black 48%, transparent 82%)"
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_20%,transparent_75%,rgba(255,255,255,0.025))]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_46%,rgba(2,6,23,0.28)_100%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-6 top-24 hidden h-24 w-24 rounded-tl-[2rem] border-l border-t border-cyan-300/12 md:block" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-16 right-8 hidden h-20 w-20 rounded-br-[2rem] border-b border-r border-sky-300/12 lg:block" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-[14%] top-[24%] hidden h-px w-24 bg-gradient-to-r from-cyan-300/0 via-cyan-300/12 to-cyan-300/0 md:block" }),
    /* @__PURE__ */ jsx("div", { className: "absolute right-[16%] top-[44%] hidden h-px w-20 bg-gradient-to-r from-sky-300/0 via-sky-300/12 to-sky-300/0 lg:block" }),
    APP_BACKGROUND_BEAMS.map((beam) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `app-ambient-float absolute blur-3xl ${beam.className}`,
        style: {
          left: beam.left,
          top: beam.top,
          width: beam.width,
          height: beam.height,
          background: beam.background,
          transform: `rotate(${beam.rotate})`,
          animationDelay: beam.delay,
          animationDuration: beam.duration
        }
      },
      beam.key
    )),
    APP_BACKGROUND_NODES.map((node) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `app-ambient-pulse absolute rounded-full ${node.className}`,
        style: {
          left: node.left,
          top: node.top,
          width: node.size,
          height: node.size,
          animationDelay: node.delay,
          animationDuration: node.duration
        },
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-cyan-200/75 shadow-[0_0_14px_rgba(103,232,249,0.45)]" }),
          /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/12" })
        ]
      },
      node.key
    )),
    APP_BACKGROUND_GLOWS.map((glow) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `app-ambient-float absolute rounded-full blur-3xl ${glow.className}`,
        style: {
          left: glow.left,
          top: glow.top,
          width: glow.size,
          height: glow.size,
          background: glow.background,
          animationDelay: glow.delay,
          animationDuration: glow.duration
        }
      },
      glow.key
    )),
    APP_BACKGROUND_STREAKS.map((streak) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `app-ambient-pulse absolute h-px ${streak.className}`,
        style: {
          left: streak.left,
          top: streak.top,
          width: streak.width,
          background: streak.background,
          animationDelay: streak.delay,
          animationDuration: streak.duration
        }
      },
      streak.key
    ))
  ] });
}
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
function Button(context) {
  const { className, variant = "default", size = "default", asChild = false, ...props } = context;
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { "data-slot": "button", "data-variant": variant, "data-size": size, className: cn(buttonVariants({ variant, size, className })), ...props });
}
function Select(context) {
  return /* @__PURE__ */ jsx(Root, { "data-slot": "select", ...context });
}
function SelectValue(context) {
  return /* @__PURE__ */ jsx(Value, { "data-slot": "select-value", ...context });
}
function SelectTrigger(context) {
  const { className, children, ...props } = context;
  return /* @__PURE__ */ jsxs(
    Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "flex h-10 w-fit items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-medium text-stone-100 outline-none transition placeholder:text-stone-400 hover:bg-white/10 focus-visible:border-cyan-300/40 focus-visible:ring-2 focus-visible:ring-cyan-300/20 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-cyan-300/30 data-[state=open]:bg-white/10 [&>span]:line-clamp-1",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 text-stone-400" }) })
      ]
    }
  );
}
function SelectContent(context) {
  const { className, children, position = "popper", sideOffset = 8, ...props } = context;
  return /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsxs(
    Content,
    {
      "data-slot": "select-content",
      className: cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/98 text-stone-100 shadow-2xl shadow-slate-950/60 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      sideOffset,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(Viewport, { className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] min-w-[var(--radix-select-trigger-width)] w-full"), children }),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem(context) {
  const { className, children, ...props } = context;
  return /* @__PURE__ */ jsxs(
    Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-default select-none items-center gap-2 rounded-xl py-2.5 pl-3 pr-9 text-sm text-stone-100 outline-none transition focus:bg-cyan-300/10 focus:text-cyan-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(ItemText, { children }),
        /* @__PURE__ */ jsx("span", { className: "absolute right-3 flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx(ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4 text-cyan-300" }) }) })
      ]
    }
  );
}
function SelectScrollUpButton(context) {
  const { className, ...props } = context;
  return /* @__PURE__ */ jsx(
    ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn("flex cursor-default items-center justify-center py-1 text-stone-400", className),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton(context) {
  const { className, ...props } = context;
  return /* @__PURE__ */ jsx(
    ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn("flex cursor-default items-center justify-center py-1 text-stone-400", className),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
    }
  );
}
const defaultLocale = "en";
const locales = ["en", "ca", "es"];
const localeOptions = [
  { value: "en", label: "English", shortLabel: "EN" },
  { value: "ca", label: "Català", shortLabel: "CAT" },
  { value: "es", label: "Español", shortLabel: "ES" }
];
function validateRootSearch(search) {
  return { lang: isLocale(search.lang) ? search.lang : void 0 };
}
function isLocale(value) {
  return locales.includes(value);
}
function normalizeLocale(value) {
  if (!isLocale(value)) {
    return defaultLocale;
  }
  return value;
}
function getLocaleFromSearch(search) {
  const searchParams = typeof search === "string" ? new URLSearchParams(search) : search;
  return normalizeLocale(searchParams.get("lang"));
}
function localizePath(pathname, locale, search) {
  const normalizedPath = pathname || "/";
  const searchParams = new URLSearchParams(search);
  searchParams.set("lang", locale);
  const query = searchParams.toString();
  return query ? `${normalizedPath}?${query}` : normalizedPath;
}
const I18nContext = createContext(null);
function I18nProvider({ children }) {
  const router2 = useRouter();
  const searchStr = useRouterState({
    select: (state) => state.location.searchStr
  });
  const locale = getLocaleFromSearch(searchStr);
  function setLocale(nextLocale) {
    const { pathname } = router2.state.location;
    void router2.navigate({
      to: pathname,
      search: (previous) => ({
        ...previous,
        lang: nextLocale
      }),
      replace: true
    });
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
const metadata$2 = { "siteTitle": "Samuel Cobas Portfolio", "siteDescription": "Product-minded frontend developer portfolio with selected projects, background, and resume.", "siteKeywords": "Samuel Cobas, frontend developer, portfolio, React, TypeScript, TanStack Query, TanStack Form", "siteAuthor": "Samuel Cobas", "siteUrl": "https://samuel-cobas-portfolio.vercel.app", "ogImageAlt": "Preview image for the Samuel Cobas portfolio website", "pages": { "home": { "title": "Samuel Cobas Portfolio", "description": "Product-minded frontend developer portfolio with selected projects, background, and resume.", "path": "/" }, "about": { "title": "About", "description": "Background, core stack, QA direction, and the path Samuel Cobas took into frontend-focused product engineering.", "path": "/about" }, "projects": { "title": "Projects", "description": "Selected frontend, XR, and product-delivery projects built by Samuel Cobas.", "path": "/project" }, "resume": { "title": "Resume", "description": "Resume overview and downloadable CV for Samuel Cobas, covering experience, stack, and next-step responsibilities.", "path": "/resume" } } };
const site$2 = { "siteLabel": "Portfolio", "navigationLabels": { "home": "Home", "about": "About", "projects": "Projects", "resume": "Resume" }, "homeHero": { "eyebrow": "Hi there, I'm Samuel Cobas", "title": "Frontend-focused engineer building reliable product experiences with React and TypeScript.", "description": "I work across frontend and full-stack delivery, with a strong emphasis on maintainable React code, thoughtful interfaces, and product decisions that hold up in production.", "roles": ["Frontend Engineer", "React, TanStack Query & Forms", "Software Engineer", "API & QA-aware Collaborator"], "primaryCtaLabel": "Get to know me", "secondaryCtaLabel": "View source", "illustrationAlt": "Illustration representing Samuel Cobas working at his desk" }, "homeAbout": { "eyebrow": "About", "title": "I moved into software from hospitality and stayed for the mix of craft, systems thinking, and product problem solving.", "paragraphs": ["I build product-facing features with JavaScript, TypeScript, React, Node.js, and SQL, and I am increasingly working with TanStack Query and structured form flows where they improve reliability and developer experience.", "As the team grows, I also expect to take on more QA ownership. My hands-on QA work today is focused on API testing with Postman and Swagger-documented Next.js endpoints, validating behavior, edge cases, and frontend-backend alignment."], "portraitAlt": "Portrait of Samuel Cobas" }, "header": { "logoAlt": "Samuel Cobas logo", "primaryNavLabel": "Primary navigation", "mobileNavLabel": "Mobile navigation", "sourceLabel": "Source", "languageLabel": "Language", "openMenuLabel": "Open navigation menu", "closeMenuLabel": "Close navigation menu" }, "footer": { "credit": "Designed and developed by Samuel Cobas", "copyrightSuffix": "SB", "externalProfileSuffix": "opens in a new tab" }, "notFound": { "eyebrow": "404", "title": "Page not found", "description": "The route you requested does not exist. You can return to the home page or jump to another section of the portfolio.", "goHomeLabel": "Go home" }, "skipToContentLabel": "Skip to main content", "externalProfileLabel": "profile" };
const about$2 = { "eyebrow": "About", "title": "What I bring beyond the landing page.", "paragraphs": ["I moved into software after years in hospitality and found the kind of work I want to keep doing: solving problems, improving systems, and building interfaces that feel clear, reliable, and useful.", "My core focus is frontend engineering with React and TypeScript, but I work comfortably across the stack when that helps ship a better product. That includes stateful UI, API integration, TanStack Query data flows, and structured form work.", "As the product and team evolve, I also expect to take on more QA responsibility. My practical QA experience today is centered on API testing with Postman and Swagger-documented Next.js endpoints, where I focus on validating behavior, edge cases, and frontend-backend alignment."], "skillsTitle": "Core stack", "toolsTitle": "Tools and QA workflow", "skills": ["JavaScript", "TypeScript", "React", "Next.js", "TanStack Query", "TanStack Form", "Node.js", "SQL", "MongoDB", "API testing"], "tools": ["VS Code", "GitHub", "Postman", "Swagger / OpenAPI", "Figma", "MySQL Workbench", "Docker basics"], "illustrationAlt": "Illustration for the about section" };
const resume$2 = { "intro": { "eyebrow": "Resume", "title": "Resume preview and full CV access in one place.", "description": "Use the portrait card as a quick visual entry point, then open the full PDF when you want the complete document." }, "download": { "title": "Open Samuel Cobas CV", "description": "Click the portrait to open the current PDF in a new tab and download it only if you actually need the file.", "label": "Open CV PDF", "ariaLabel": "Open Samuel Cobas CV as a PDF in a new tab", "previewAlt": "Portrait of Samuel Cobas used as the resume preview card", "tooltip": "Click to open the CV PDF" } };
const projects$2 = { "page": { "eyebrow": "Projects", "title": "Selected work across frontend, XR, and product delivery.", "description": "These projects reflect the kind of work I enjoy most: polished interfaces, clear systems thinking, and practical end-to-end execution." }, "labels": { "source": "Source", "liveDemo": "Live demo", "sourceAriaSuffix": "source code (opens in a new tab)", "liveDemoAriaSuffix": "live demo (opens in a new tab)" }, "descriptions": { "pokefinder": "A JavaScript web app that loads Pokemon data from the PokeAPI, supports fast search, and surfaces detailed profiles with stats and imagery.", "lsbuVrTour": "A browser-based campus experience built with A-Frame and WebXR, designed to let users explore university spaces through immersive 360 scenes.", "secureRent": "A full-stack rental platform connecting property owners and tenants through authentication, listing management, trust signals, and admin workflows." } };
const en = {
  metadata: metadata$2,
  site: site$2,
  about: about$2,
  resume: resume$2,
  projects: projects$2
};
const metadata$1 = { "siteTitle": "Samuel Cobas Portfolio", "siteDescription": "Portfoli de desenvolupament frontend orientat a producte amb projectes seleccionats, context professional i CV.", "siteKeywords": "Samuel Cobas, desenvolupador frontend, portfoli, React, TypeScript, TanStack Query, TanStack Form", "siteAuthor": "Samuel Cobas", "siteUrl": "https://samuel-cobas-portfolio.vercel.app", "ogImageAlt": "Imatge de previsualització del portfolio de Samuel Cobas", "pages": { "home": { "title": "Samuel Cobas Portfolio", "description": "Portfoli de desenvolupament frontend orientat a producte amb projectes seleccionats, context professional i CV.", "path": "/" }, "about": { "title": "Sobre mi", "description": "Context, stack principal, orientació cap a QA i trajectòria de Samuel Cobas dins l’enginyeria frontend de producte.", "path": "/about" }, "projects": { "title": "Projectes", "description": "Projectes seleccionats de frontend, XR i lliurament de producte desenvolupats per Samuel Cobas.", "path": "/project" }, "resume": { "title": "CV", "description": "Resum del CV i descàrrega del document de Samuel Cobas, amb experiència, stack i responsabilitats que s’estan ampliant.", "path": "/resume" } } };
const site$1 = { "siteLabel": "Portfoli", "navigationLabels": { "home": "Inici", "about": "Sobre mi", "projects": "Projectes", "resume": "CV" }, "homeHero": { "eyebrow": "Hola, soc Samuel Cobas", "title": "Enginyer frontend centrat a construir experiències de producte fiables amb React i TypeScript.", "description": "Treballo entre frontend i full-stack, amb especial atenció a codi React mantenible, interfícies cuidades i decisions de producte que funcionin bé en entorns reals.", "roles": ["Enginyer Frontend", "React, TanStack Query i Forms", "Enginyer de Programari", "Col·laborador orientat a API i QA"], "primaryCtaLabel": "Coneix-me millor", "secondaryCtaLabel": "Veure el codi", "illustrationAlt": "Il·lustració de Samuel Cobas treballant al seu escriptori" }, "homeAbout": { "eyebrow": "Sobre mi", "title": "Vaig passar de l’hostaleria al software i m’hi vaig quedar per la combinació d’ofici, visió de sistemes i resolució de problemes de producte.", "paragraphs": ["Construeixo funcionalitats orientades a producte amb JavaScript, TypeScript, React, Node.js i SQL, i cada vegada treballo més amb TanStack Query i fluxos de formularis estructurats quan milloren la fiabilitat i l’experiència de desenvolupament.", "A mesura que l’equip creixi, també espero assumir més responsabilitat en QA. La meva experiència pràctica avui se centra en proves d’API amb Postman i endpoints de Next.js documentats amb Swagger, validant comportaments, casos límit i l’alineació entre frontend i backend."], "portraitAlt": "Retrat de Samuel Cobas" }, "header": { "logoAlt": "Logotip de Samuel Cobas", "primaryNavLabel": "Navegació principal", "mobileNavLabel": "Navegació mòbil", "sourceLabel": "Codi", "languageLabel": "Idioma", "openMenuLabel": "Obrir el menú de navegació", "closeMenuLabel": "Tancar el menú de navegació" }, "footer": { "credit": "Dissenyat i desenvolupat per Samuel Cobas", "copyrightSuffix": "SB", "externalProfileSuffix": "s’obre en una pestanya nova" }, "notFound": { "eyebrow": "404", "title": "Pàgina no trobada", "description": "La ruta que has demanat no existeix. Pots tornar a l’inici o anar a una altra secció del portfoli.", "goHomeLabel": "Tornar a l’inici" }, "skipToContentLabel": "Anar directament al contingut principal", "externalProfileLabel": "perfil" };
const about$1 = { "eyebrow": "Sobre mi", "title": "Què puc aportar més enllà de la landing.", "paragraphs": ["Vaig entrar al software després d’anys a l’hostaleria i hi vaig trobar el tipus de feina que vull continuar fent: resoldre problemes, millorar sistemes i construir interfícies clares, fiables i útils.", "El meu focus principal és l’enginyeria frontend amb React i TypeScript, però també treballo còmodament a tot l’stack quan això ajuda a lliurar un millor producte. Això inclou UI amb estat, integració d’APIs, fluxos de dades amb TanStack Query i treball estructurat amb formularis.", "A mesura que evolucionin el producte i l’equip, també espero assumir més responsabilitat en QA. La meva experiència pràctica avui se centra en proves d’API amb Postman i endpoints de Next.js documentats amb Swagger, posant el focus en el comportament, els casos límit i l’alineació entre frontend i backend."], "skillsTitle": "Stack principal", "toolsTitle": "Eines i flux de QA", "skills": ["JavaScript", "TypeScript", "React", "Next.js", "TanStack Query", "TanStack Form", "Node.js", "SQL", "MongoDB", "Proves d’API"], "tools": ["VS Code", "GitHub", "Postman", "Swagger / OpenAPI", "Figma", "MySQL Workbench", "Conceptes bàsics de Docker"], "illustrationAlt": "Il·lustració per a la secció sobre mi" };
const resume$1 = { "intro": { "eyebrow": "CV", "title": "Vista prèvia del CV i accés al document complet en un únic lloc.", "description": "Fes servir la targeta amb la foto com a entrada visual ràpida i obre el PDF complet només quan realment vulguis consultar el document sencer." }, "download": { "title": "Obrir el CV de Samuel Cobas", "description": "Fes clic a la foto per obrir el PDF actual en una pestanya nova i descarregar-lo només si realment necessites el fitxer.", "label": "Obrir PDF del CV", "ariaLabel": "Obrir el CV de Samuel Cobas en PDF en una pestanya nova", "previewAlt": "Retrat de Samuel Cobas utilitzat com a targeta de vista prèvia del CV", "tooltip": "Fes clic per obrir el PDF del CV" } };
const projects$1 = { "page": { "eyebrow": "Projectes", "title": "Treball seleccionat en frontend, XR i lliurament de producte.", "description": "Aquests projectes reflecteixen el tipus de feina que més m’agrada: interfícies cuidades, pensament de sistemes clar i execució end-to-end pràctica." }, "labels": { "source": "Codi", "liveDemo": "Demo en viu", "sourceAriaSuffix": "codi font (s’obre en una pestanya nova)", "liveDemoAriaSuffix": "demo en viu (s’obre en una pestanya nova)" }, "descriptions": { "pokefinder": "Una aplicació web en JavaScript que carrega dades de Pokemon des de la PokeAPI, permet una cerca ràpida i mostra perfils detallats amb estadístiques i imatges.", "lsbuVrTour": "Una experiència de campus al navegador construïda amb A-Frame i WebXR, pensada perquè els usuaris explorin espais universitaris amb escenes immersives de 360 graus.", "secureRent": "Una plataforma full-stack de lloguer que connecta propietaris i inquilins mitjançant autenticació, gestió d’anuncis, senyals de confiança i fluxos d’administració." } };
const ca = {
  metadata: metadata$1,
  site: site$1,
  about: about$1,
  resume: resume$1,
  projects: projects$1
};
const metadata = { "siteTitle": "Samuel Cobas Portfolio", "siteDescription": "Portfolio de desarrollo frontend orientado a producto con proyectos seleccionados, contexto profesional y CV.", "siteKeywords": "Samuel Cobas, desarrollador frontend, portfolio, React, TypeScript, TanStack Query, TanStack Form", "siteAuthor": "Samuel Cobas", "siteUrl": "https://samuel-cobas-portfolio.vercel.app", "ogImageAlt": "Imagen de previsualización del portfolio de Samuel Cobas", "pages": { "home": { "title": "Samuel Cobas Portfolio", "description": "Portfolio de desarrollo frontend orientado a producto con proyectos seleccionados, contexto profesional y CV.", "path": "/" }, "about": { "title": "Sobre mí", "description": "Contexto, stack principal, proyección hacia QA y trayectoria de Samuel Cobas dentro de la ingeniería frontend de producto.", "path": "/about" }, "projects": { "title": "Proyectos", "description": "Proyectos seleccionados de frontend, XR y entrega de producto desarrollados por Samuel Cobas.", "path": "/project" }, "resume": { "title": "CV", "description": "Resumen del CV y descarga del documento de Samuel Cobas, con experiencia, stack y responsabilidades que están ampliándose.", "path": "/resume" } } };
const site = { "siteLabel": "Portfolio", "navigationLabels": { "home": "Inicio", "about": "Sobre mí", "projects": "Proyectos", "resume": "CV" }, "homeHero": { "eyebrow": "Hola, soy Samuel Cobas", "title": "Ingeniero frontend centrado en construir experiencias de producto fiables con React y TypeScript.", "description": "Trabajo entre frontend y full-stack, con especial atención al código React mantenible, las interfaces cuidadas y las decisiones de producto que resisten bien en producción.", "roles": ["Ingeniero Frontend", "React, TanStack Query y Forms", "Ingeniero de Software", "Colaborador orientado a API y QA"], "primaryCtaLabel": "Conóceme mejor", "secondaryCtaLabel": "Ver código", "illustrationAlt": "Ilustración de Samuel Cobas trabajando en su escritorio" }, "homeAbout": { "eyebrow": "Sobre mí", "title": "Pasé de la hostelería al software y me quedé por la mezcla de oficio, visión de sistemas y resolución de problemas de producto.", "paragraphs": ["Construyo funcionalidades orientadas a producto con JavaScript, TypeScript, React, Node.js y SQL, y cada vez trabajo más con TanStack Query y flujos de formularios estructurados cuando mejoran la fiabilidad y la experiencia de desarrollo.", "A medida que el equipo crezca, también espero asumir más responsabilidad en QA. Mi experiencia práctica hoy se centra en pruebas de API con Postman y endpoints de Next.js documentados con Swagger, validando comportamiento, casos límite y la alineación entre frontend y backend."], "portraitAlt": "Retrato de Samuel Cobas" }, "header": { "logoAlt": "Logotipo de Samuel Cobas", "primaryNavLabel": "Navegación principal", "mobileNavLabel": "Navegación móvil", "sourceLabel": "Código", "languageLabel": "Idioma", "openMenuLabel": "Abrir menú de navegación", "closeMenuLabel": "Cerrar menú de navegación" }, "footer": { "credit": "Diseñado y desarrollado por Samuel Cobas", "copyrightSuffix": "SB", "externalProfileSuffix": "se abre en una pestaña nueva" }, "notFound": { "eyebrow": "404", "title": "Página no encontrada", "description": "La ruta que has solicitado no existe. Puedes volver al inicio o ir a otra sección del portfolio.", "goHomeLabel": "Volver al inicio" }, "skipToContentLabel": "Ir al contenido principal", "externalProfileLabel": "perfil" };
const about = { "eyebrow": "Sobre mí", "title": "Qué aporto más allá de la landing.", "paragraphs": ["Entré en el software después de años en hostelería y encontré el tipo de trabajo que quiero seguir haciendo: resolver problemas, mejorar sistemas y construir interfaces claras, fiables y útiles.", "Mi foco principal es la ingeniería frontend con React y TypeScript, pero también trabajo con soltura en todo el stack cuando eso ayuda a entregar un mejor producto. Eso incluye UI con estado, integración de APIs, flujos de datos con TanStack Query y trabajo estructurado con formularios.", "A medida que evolucionen el producto y el equipo, también espero asumir más responsabilidad en QA. Mi experiencia práctica hoy se centra en pruebas de API con Postman y endpoints de Next.js documentados con Swagger, con foco en comportamiento, casos límite y alineación entre frontend y backend."], "skillsTitle": "Stack principal", "toolsTitle": "Herramientas y flujo de QA", "skills": ["JavaScript", "TypeScript", "React", "Next.js", "TanStack Query", "TanStack Form", "Node.js", "SQL", "MongoDB", "Testing de APIs"], "tools": ["VS Code", "GitHub", "Postman", "Swagger / OpenAPI", "Figma", "MySQL Workbench", "Conceptos básicos de Docker"], "illustrationAlt": "Ilustración para la sección sobre mí" };
const resume = { "intro": { "eyebrow": "CV", "title": "Vista previa del CV y acceso al documento completo en un único lugar.", "description": "Usa la tarjeta con la foto como acceso visual rápido y abre el PDF completo solo cuando realmente quieras consultar el documento entero." }, "download": { "title": "Abrir el CV de Samuel Cobas", "description": "Haz clic en la foto para abrir el PDF actual en una pestaña nueva y descargarlo solo si de verdad necesitas el archivo.", "label": "Abrir PDF del CV", "ariaLabel": "Abrir el CV de Samuel Cobas en PDF en una pestaña nueva", "previewAlt": "Retrato de Samuel Cobas usado como tarjeta de vista previa del CV", "tooltip": "Haz clic para abrir el PDF del CV" } };
const projects = { "page": { "eyebrow": "Proyectos", "title": "Trabajo seleccionado en frontend, XR y entrega de producto.", "description": "Estos proyectos reflejan el tipo de trabajo que más disfruto: interfaces cuidadas, pensamiento de sistemas claro y ejecución end-to-end práctica." }, "labels": { "source": "Código", "liveDemo": "Demo en vivo", "sourceAriaSuffix": "código fuente (se abre en una pestaña nueva)", "liveDemoAriaSuffix": "demo en vivo (se abre en una pestaña nueva)" }, "descriptions": { "pokefinder": "Una aplicación web en JavaScript que carga datos de Pokemon desde la PokeAPI, permite búsqueda rápida y muestra perfiles detallados con estadísticas e imágenes.", "lsbuVrTour": "Una experiencia de campus en navegador construida con A-Frame y WebXR, pensada para que los usuarios exploren espacios universitarios mediante escenas inmersivas en 360 grados.", "secureRent": "Una plataforma full-stack de alquiler que conecta propietarios e inquilinos mediante autenticación, gestión de anuncios, señales de confianza y flujos de administración." } };
const es = {
  metadata,
  site,
  about,
  resume,
  projects
};
const messageCatalogs = {
  en,
  ca,
  es
};
function getMessages(locale) {
  return messageCatalogs[locale];
}
function useTranslations() {
  const { locale } = useI18n();
  return getMessages(locale);
}
const personName = "Samuel Cobas";
const portfolioRepoUrl = "https://github.com/vlicus/Portfolio";
const socialLinks = [
  { label: "GitHub", href: "https://github.com/vlicus", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-cobas/", icon: BriefcaseBusiness },
  { label: "Instagram", href: "https://www.instagram.com/vlicus93/", icon: Camera }
];
const footerLinks = socialLinks.filter((link) => link.label !== "Instagram");
const navIcons = {
  home: Home,
  about: User,
  projects: FolderKanban,
  resume: FileText
};
function SiteHeader() {
  const { locale, localeOptions: localeOptions2, setLocale } = useI18n();
  const messages = useTranslations();
  const { pathname } = useRouterState({
    select: (state) => ({
      pathname: state.location.pathname
    })
  });
  const basePath = pathname;
  const localizedSearch = { lang: locale };
  const { header, navigationLabels, siteLabel } = messages.site;
  const navigationItems = SITE_NAV_ITEMS.map((item) => ({
    ...item,
    label: navigationLabels[item.labelKey],
    icon: navIcons[item.labelKey]
  }));
  const {
    closeMenuLabel,
    languageLabel,
    /* logoAlt, */
    mobileNavLabel,
    openMenuLabel,
    primaryNavLabel,
    sourceLabel
  } = header;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= SITE_HEADER_SCROLL_OFFSET_PX);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function handleLocaleChange(value) {
    setLocale(normalizeLocale(value));
  }
  function renderLocaleSelect(mode) {
    const isMobile = mode === "mobile";
    const triggerLabel = localeOptions2.find((option) => option.value === locale)?.shortLabel ?? locale.toUpperCase();
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "relative inline-flex items-center gap-2 overflow-hidden border border-cyan-300/12 bg-slate-950/90 text-stone-100 shadow-lg shadow-slate-950/30 ring-1 ring-white/5 transition duration-200 hover:border-cyan-300/20 hover:bg-slate-950",
          isMobile ? "w-full rounded-2xl px-4 py-3" : "rounded-full px-3 py-2"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" }),
          /* @__PURE__ */ jsx(Languages, { className: "size-4 shrink-0 text-stone-300" }),
          isMobile ? /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-stone-100", children: languageLabel }) : /* @__PURE__ */ jsx("span", { className: "sr-only", children: languageLabel }),
          /* @__PURE__ */ jsxs(Select, { onValueChange: handleLocaleChange, value: locale, children: [
            /* @__PURE__ */ jsx(
              SelectTrigger,
              {
                "aria-label": languageLabel,
                className: cn(
                  "relative border-0 bg-transparent px-0 py-0 shadow-none hover:bg-transparent focus-visible:border-transparent focus-visible:ring-0 data-[state=open]:bg-transparent",
                  isMobile ? "ml-auto h-auto min-w-[4.5rem] justify-end gap-2 text-sm font-semibold" : "h-auto min-w-[2.75rem] justify-end gap-1 text-xs font-semibold uppercase tracking-[0.2em]"
                ),
                children: /* @__PURE__ */ jsx(SelectValue, { children: triggerLabel })
              }
            ),
            /* @__PURE__ */ jsx(SelectContent, { align: isMobile ? "end" : "center", side: "bottom", children: localeOptions2.map(({ value, shortLabel, label }) => /* @__PURE__ */ jsx(SelectItem, { value, children: isMobile ? label : shortLabel }, value)) })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative mx-auto flex w-full max-w-6xl flex-col rounded-[1.5rem] border border-white/10 bg-stone-950/75 px-3 py-2.5 shadow-lg shadow-black/20 backdrop-blur transition sm:px-6 sm:py-3",
        isScrolled && "border-cyan-300/15 bg-stone-950/90 shadow-2xl shadow-cyan-950/10"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsx(Link, { className: "flex min-w-0 items-center gap-2 sm:gap-3", onClick: () => setIsOpen(false), search: localizedSearch, to: "/", children: /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "truncate text-sm font-semibold tracking-wide text-white", children: personName }),
            /* @__PURE__ */ jsx("p", { className: "hidden text-xs uppercase tracking-[0.25em] text-stone-400 sm:block", children: siteLabel })
          ] }) }),
          /* @__PURE__ */ jsxs("nav", { "aria-label": primaryNavLabel, className: "hidden items-center gap-2 md:flex", children: [
            navigationItems.map(({ basePath: itemBasePath, label, icon: Icon2 }) => {
              const isActive = basePath === itemBasePath;
              return /* @__PURE__ */ jsxs(
                Link,
                {
                  "aria-current": isActive ? "page" : void 0,
                  className: cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-200",
                    isActive ? "border-cyan-300/70 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/20" : "border-transparent text-stone-200 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-white"
                  ),
                  search: localizedSearch,
                  to: itemBasePath,
                  children: [
                    /* @__PURE__ */ jsx(Icon2, { className: "size-4" }),
                    label
                  ]
                },
                itemBasePath
              );
            }),
            renderLocaleSelect("desktop"),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white", children: /* @__PURE__ */ jsxs("a", { href: portfolioRepoUrl, rel: "noopener noreferrer", target: "_blank", children: [
              /* @__PURE__ */ jsx(Code2, { className: "size-4" }),
              sourceLabel
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-controls": "mobile-navigation",
              "aria-expanded": isOpen,
              "aria-label": isOpen ? closeMenuLabel : openMenuLabel,
              className: "inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-100 transition hover:bg-white/10 md:hidden",
              onClick: () => setIsOpen((open) => !open),
              type: "button",
              children: isOpen ? /* @__PURE__ */ jsx(X, { className: "size-4" }) : /* @__PURE__ */ jsx(Menu, { className: "size-4" })
            }
          )
        ] }),
        isOpen ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("button", { "aria-hidden": true, className: "fixed inset-0 z-[-1] bg-slate-950/20 md:hidden", onClick: () => setIsOpen(false), tabIndex: -1, type: "button" }),
          /* @__PURE__ */ jsxs(
            "nav",
            {
              "aria-label": mobileNavLabel,
              id: "mobile-navigation",
              className: "absolute left-0 right-0 top-[calc(100%+0.75rem)] z-20 grid gap-2 overflow-hidden rounded-[1.5rem] border border-cyan-300/12 bg-slate-950 p-3 shadow-2xl shadow-slate-950/60 ring-1 ring-white/5 md:hidden",
              children: [
                /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" }),
                /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-300/10 blur-3xl" }),
                renderLocaleSelect("mobile"),
                navigationItems.map(({ basePath: itemBasePath, label, icon: Icon2 }) => {
                  const isActive = basePath === itemBasePath;
                  return /* @__PURE__ */ jsxs(
                    Link,
                    {
                      "aria-current": isActive ? "page" : void 0,
                      className: cn(
                        "relative inline-flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition duration-200",
                        isActive ? "border-cyan-300/70 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/20" : "border-white/10 bg-white/[0.03] text-stone-100 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-50"
                      ),
                      onClick: () => setIsOpen(false),
                      search: localizedSearch,
                      to: itemBasePath,
                      children: [
                        /* @__PURE__ */ jsx(Icon2, { className: "size-4" }),
                        label
                      ]
                    },
                    itemBasePath
                  );
                }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    className: "inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-stone-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-50",
                    href: portfolioRepoUrl,
                    onClick: () => setIsOpen(false),
                    rel: "noopener noreferrer",
                    target: "_blank",
                    children: [
                      /* @__PURE__ */ jsx(Code2, { className: "size-4" }),
                      sourceLabel
                    ]
                  }
                )
              ]
            }
          )
        ] }) : null
      ]
    }
  ) });
}
function getRootMetadata(locale) {
  const metadata2 = getMessages(locale).metadata;
  return {
    ...metadata2,
    ogImageUrl: `${metadata2.siteUrl}/og-image.png`
  };
}
function getPageMetadata(locale) {
  return getMessages(locale).metadata.pages;
}
function createRootHead(locale) {
  const rootMeta = getRootMetadata(locale);
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#140f23" },
      { title: rootMeta.siteTitle },
      { name: "keywords", content: rootMeta.siteKeywords },
      { name: "author", content: rootMeta.siteAuthor },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: rootMeta.siteTitle },
      { property: "og:image", content: rootMeta.ogImageUrl },
      { property: "og:image:alt", content: rootMeta.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: rootMeta.ogImageUrl }
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "alternate icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/manifest.json" }
    ]
  };
}
function createPageHead(locale, path, pageKey) {
  const rootMeta = getRootMetadata(locale);
  const pageMeta = getPageMetadata(locale)[pageKey];
  const pageTitle = pageMeta.title === rootMeta.siteTitle ? pageMeta.title : `${pageMeta.title} | ${rootMeta.siteTitle}`;
  const pageUrl = new URL(localizePath(path, locale, ""), rootMeta.siteUrl).toString();
  return {
    meta: [
      { title: pageTitle },
      { name: "description", content: pageMeta.description },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageMeta.description },
      { property: "og:url", content: pageUrl },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageMeta.description }
    ],
    links: [{ rel: "canonical", href: pageUrl }]
  };
}
const Route$4 = createRootRoute({
  validateSearch: validateRootSearch,
  head: () => createRootHead(defaultLocale),
  notFoundComponent: NotFoundPage,
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(I18nProvider, { children: /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
function RootDocument({ children }) {
  const { locale } = useI18n();
  const messages = useTranslations();
  return /* @__PURE__ */ jsxs("html", { lang: locale, className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "min-h-screen bg-transparent text-stone-100 antialiased", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#main-content",
          className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950",
          children: messages.site.skipToContentLabel
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative isolate min-h-screen overflow-x-hidden", children: [
        /* @__PURE__ */ jsx(AppBackground, {}),
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
  const messages = useTranslations();
  const { site: site2 } = messages;
  const { navigationLabels, notFound } = site2;
  const localizedSearch = { lang: locale };
  const { eyebrow, title, description, goHomeLabel } = notFound;
  const { about: about2, projects: projects2 } = navigationLabels;
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsxs("main", { id: "main-content", className: "mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-16", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: eyebrow }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold tracking-tight text-white", children: title }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl text-base leading-7 text-stone-300", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: [
      { to: "/", label: goHomeLabel },
      { to: "/about", label: about2 },
      { to: "/project", label: projects2 }
    ].map((link) => /* @__PURE__ */ jsx(
      Link,
      {
        className: link.to === "/" ? "rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-stone-950 transition hover:bg-cyan-300" : "rounded-full border border-stone-700 px-5 py-2 text-sm font-semibold text-stone-100 transition hover:border-stone-500 hover:bg-stone-900",
        search: localizedSearch,
        to: link.to,
        children: link.label
      },
      link.to
    )) })
  ] }) });
}
const $$splitComponentImporter$3 = () => import("./index-BA_iC-1L.js");
const Route$3 = createFileRoute("/")({
  validateSearch: validateRootSearch,
  loaderDeps: ({
    search
  }) => ({
    lang: search.lang
  }),
  loader: ({
    deps
  }) => deps.lang ?? defaultLocale,
  head: ({
    loaderData
  }) => createPageHead(loaderData ?? defaultLocale, "/", "home"),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-DZUwdrQN.js");
const Route$2 = createFileRoute("/about")({
  validateSearch: validateRootSearch,
  loaderDeps: ({
    search
  }) => ({
    lang: search.lang
  }),
  loader: ({
    deps
  }) => deps.lang ?? defaultLocale,
  head: ({
    loaderData
  }) => createPageHead(loaderData ?? defaultLocale, "/about", "about"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./project-CNubLfKH.js");
const Route$1 = createFileRoute("/project")({
  validateSearch: validateRootSearch,
  loaderDeps: ({
    search
  }) => ({
    lang: search.lang
  }),
  loader: ({
    deps
  }) => deps.lang ?? defaultLocale,
  head: ({
    loaderData
  }) => createPageHead(loaderData ?? defaultLocale, "/project", "projects"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./resume-B4nD04rZ.js");
const Route = createFileRoute("/resume")({
  validateSearch: validateRootSearch,
  loaderDeps: ({
    search
  }) => ({
    lang: search.lang
  }),
  loader: ({
    deps
  }) => deps.lang ?? defaultLocale,
  head: ({
    loaderData
  }) => createPageHead(loaderData ?? defaultLocale, "/resume", "resume"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const ProjectRoute = Route$1.update({
  id: "/project",
  path: "/project",
  getParentRoute: () => Route$4
});
const ResumeRoute = Route.update({
  id: "/resume",
  path: "/resume",
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
  HOME_HERO_PARTICLES as H,
  HOME_HERO_PARTICLE_STREAKS as a,
  HOME_HERO_TRAITS as b,
  HOME_HERO_TYPING as c,
  personName as d,
  cn as e,
  footerLinks as f,
  portfolioRepoUrl as p,
  router as r,
  socialLinks as s,
  useTranslations as u
};
