import { jsxs, jsx } from "react/jsx-runtime";
import { u as useTranslations, d as cn } from "./router-Cwi49Ojv.js";
import { P as Page } from "./page-shell-B9f6p8u-.js";
import "@tanstack/react-router";
import "lucide-react";
import "react";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-select";
const aboutImage = "/assets/about-FEa5sPAK.png";
function AboutHero() {
  const { about } = useTranslations();
  const { title, illustrationAlt, paragraphs, eyebrow } = about;
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl", children: title }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl space-y-4 text-base leading-7 text-stone-300", children: paragraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { children: paragraph }, paragraph)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-xl shadow-slate-950/30 backdrop-blur", children: /* @__PURE__ */ jsx("img", { alt: illustrationAlt, className: "w-full object-contain", decoding: "async", loading: "lazy", src: aboutImage }) })
  ] });
}
function PillList(context) {
  const { items, tone } = context;
  return /* @__PURE__ */ jsx("ul", { className: "mt-5 flex flex-wrap gap-3", children: items.map((item) => /* @__PURE__ */ jsx(
    "li",
    {
      className: cn(
        tone === "accent" && "rounded-full pointer-events-none border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-50",
        tone === "muted" && "rounded-full pointer-events-none border border-white/10 bg-black/20 px-4 py-2 text-sm text-stone-200"
      ),
      children: item
    },
    item
  )) });
}
function AboutStack() {
  const { about } = useTranslations();
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-6 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] p-6 shadow-xl shadow-slate-950/30 backdrop-blur", children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),transparent)]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-10 top-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "mb-5 h-px w-16 bg-gradient-to-r from-cyan-300/80 to-transparent" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white", children: about.skillsTitle }),
      /* @__PURE__ */ jsx(PillList, { items: about.skills, tone: "accent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] p-6 shadow-xl shadow-slate-950/30 backdrop-blur", children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-white/6 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "mb-5 h-px w-16 bg-gradient-to-r from-white/50 to-transparent" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white", children: about.toolsTitle }),
      /* @__PURE__ */ jsx(PillList, { items: about.tools, tone: "muted" })
    ] })
  ] });
}
function AboutPage() {
  return /* @__PURE__ */ jsxs(Page, { className: "max-w-6xl gap-16", children: [
    /* @__PURE__ */ jsx(AboutHero, {}),
    /* @__PURE__ */ jsx(AboutStack, {})
  ] });
}
export {
  AboutPage as component
};
