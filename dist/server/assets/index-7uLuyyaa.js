import { jsxs, jsx } from "react/jsx-runtime";
import { u as useTranslations, s as socialLinks, H as HOME_HERO_PARTICLES, a as HOME_HERO_PARTICLE_STREAKS, b as HOME_HERO_TRAITS, c as HOME_HERO_TYPING } from "./router-Cwi49Ojv.js";
import { useState, useEffect } from "react";
import { P as Page } from "./page-shell-B9f6p8u-.js";
import "@tanstack/react-router";
import "lucide-react";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-select";
const avatarImage = "/assets/avatar-D2F37s3-.png";
const homeIllustration = "/assets/home-main-2M7JlwXb.svg";
function HomeAbout() {
  const { footer, externalProfileLabel, homeAbout } = useTranslations().site;
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_20rem] lg:gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: homeAbout.eyebrow }),
      /* @__PURE__ */ jsx("h2", { className: "max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl", children: homeAbout.title }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl space-y-4 text-base leading-7 text-stone-300", children: homeAbout.paragraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { children: paragraph }, paragraph)) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: socialLinks.map(({ label, href, icon: Icon }) => /* @__PURE__ */ jsxs(
        "a",
        {
          "aria-label": `${label} ${externalProfileLabel} (${footer.externalProfileSuffix})`,
          className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-4 py-2 text-sm font-medium text-stone-100 shadow-lg shadow-slate-950/10 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100",
          href,
          rel: "noopener noreferrer",
          target: "_blank",
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "size-4" }),
            label
          ]
        },
        label
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-full max-w-xs items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(160deg,rgba(34,211,238,0.2),rgba(255,255,255,0.04),transparent)] p-3 shadow-xl shadow-slate-950/30", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" }),
      /* @__PURE__ */ jsx("img", { alt: homeAbout.portraitAlt, className: "aspect-square w-full rounded-[1.4rem] object-cover", decoding: "async", loading: "lazy", src: avatarImage })
    ] }) })
  ] });
}
const particleItems = HOME_HERO_PARTICLES.map((particle) => ({
  key: `${particle.left}-${particle.top}`,
  style: {
    left: particle.left,
    top: particle.top,
    "--hero-delay": particle.delay,
    "--hero-duration": particle.duration
  },
  glowStyle: {
    width: `${particle.size}px`,
    height: `${particle.size}px`
  }
}));
const particleStreaks = HOME_HERO_PARTICLE_STREAKS.map((streak) => ({
  className: streak.className,
  style: {
    "--hero-delay": streak.delay,
    "--hero-duration": streak.duration
  }
}));
function HeroParticles() {
  return /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
    particleItems.map((particle) => /* @__PURE__ */ jsxs("div", { className: "hero-particle-drift absolute hidden rounded-full sm:block", style: particle.style, children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "hero-particle-glow block rounded-full border border-cyan-200/30 bg-cyan-200/20 shadow-[0_0_18px_rgba(103,232,249,0.25)]",
          style: particle.glowStyle
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "absolute left-1/2 top-1/2 h-10 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-200/0 via-cyan-200/20 to-cyan-200/0" })
    ] }, particle.key)),
    particleStreaks.map((streak) => /* @__PURE__ */ jsx("div", { className: streak.className, style: streak.style }, streak.className))
  ] });
}
function HomeHero() {
  const { homeHero } = useTranslations().site;
  return /* @__PURE__ */ jsxs("section", { className: "relative isolate grid gap-10 py-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-center lg:gap-14 ", children: [
    /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.16),transparent_58%)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-[-5rem] top-[-2rem] h-52 w-52 rounded-full bg-cyan-400/16 blur-3xl sm:h-72 sm:w-72" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-[-6rem] top-1/4 h-52 w-52 rounded-full bg-sky-500/14 blur-3xl sm:h-80 sm:w-80" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-5rem] left-1/4 h-40 w-40 rounded-full bg-cyan-200/8 blur-3xl sm:h-64 sm:w-64" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 opacity-30 pointer-events-none",
          style: {
            backgroundImage: "repeating-linear-gradient(90deg, rgba(148,163,184,0.07) 0, rgba(148,163,184,0.07) 1px, transparent 1px, transparent 84px), repeating-linear-gradient(0deg, rgba(148,163,184,0.05) 0, rgba(148,163,184,0.05) 1px, transparent 1px, transparent 84px)",
            maskImage: "radial-gradient(circle at center, black, transparent 84%)"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.05),transparent_28%,transparent_72%,rgba(255,255,255,0.03))] pointer-events-none" }),
      /* @__PURE__ */ jsx(HeroParticles, {})
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 ml-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase  tracking-[0.3em] text-cyan-300", children: homeHero.eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl", children: homeHero.title }),
        /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-base leading-7 text-stone-300", children: homeHero.description })
      ] }),
      /* @__PURE__ */ jsx(TypedRoleLine, { roles: homeHero.roles }, homeHero.roles.join("||")),
      /* @__PURE__ */ jsx("div", { className: "flex pointer-events-none flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-400", children: HOME_HERO_TRAITS.map((trait) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-stone-300", children: trait }, trait)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto mt-4 w-full max-w-md gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 scale-95 rounded-full bg-cyan-400/12 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-5 -z-10 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -left-3 top-8 hidden h-px w-16 bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-cyan-300/0 lg:block" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -right-3 bottom-12 hidden h-px w-20 bg-gradient-to-r from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 lg:block" }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-[2rem] p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4 mx-8 pointer-events-none flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.24em] text-stone-400", children: [
          /* @__PURE__ */ jsx("span", { children: "Frontend Craft" }),
          /* @__PURE__ */ jsx("span", { className: "text-cyan-300", children: "Selected Focus" })
        ] }),
        /* @__PURE__ */ jsx("img", { alt: homeHero.illustrationAlt, className: "mx-auto w-full max-w-sm", src: homeIllustration })
      ] })
    ] })
  ] });
}
function useTypedRole(roles) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!currentRole) {
      return;
    }
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && visibleText.length < currentRole.length) {
          setVisibleText(currentRole.slice(0, visibleText.length + 1));
          return;
        }
        if (isDeleting && visibleText.length > 0) {
          setVisibleText(currentRole.slice(0, visibleText.length - 1));
          return;
        }
        if (!isDeleting) {
          setIsDeleting(true);
          return;
        }
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      },
      getTypingDelay(isDeleting, visibleText.length, currentRole.length)
    );
    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, roles, visibleText]);
  return visibleText;
}
function getTypingDelay(isDeleting, visibleLength, roleLength) {
  if (!isDeleting && visibleLength === roleLength) {
    return HOME_HERO_TYPING.roleHoldDelayMs;
  }
  if (isDeleting && visibleLength === 0) {
    return HOME_HERO_TYPING.roleSwitchDelayMs;
  }
  return isDeleting ? HOME_HERO_TYPING.deletingDelayMs : HOME_HERO_TYPING.typingDelayMs;
}
function TypedRoleLine({ roles }) {
  const typedRole = useTypedRole(roles);
  return /* @__PURE__ */ jsx("div", { className: "min-h-[3rem]", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-100 backdrop-blur", children: [
    /* @__PURE__ */ jsx("span", { "aria-live": "polite", className: "truncate font-medium text-white", children: typedRole }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "h-4 w-px shrink-0 animate-pulse bg-cyan-300/80" })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(Page, { className: "max-w-6xl gap-16", children: [
    /* @__PURE__ */ jsx(HomeHero, {}),
    /* @__PURE__ */ jsx(HomeAbout, {})
  ] });
}
export {
  HomePage as component
};
