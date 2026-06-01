import { jsxs, jsx } from "react/jsx-runtime";
import { u as useTranslations, c as cn } from "./router-DJuFLFCA.js";
import { P as Page } from "./page-shell-B-EVpYtW.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
const aboutImage = "/assets/about-FEa5sPAK.png";
function AboutHero() {
  const { about } = useTranslations();
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: about.eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold tracking-tight text-white sm:text-5xl", children: about.title }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4 text-base leading-7 text-stone-300", children: about.paragraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { children: paragraph }, paragraph)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-xl shadow-slate-950/30 backdrop-blur", children: /* @__PURE__ */ jsx("img", { alt: about.illustrationAlt, className: "w-full object-contain", decoding: "async", loading: "lazy", src: aboutImage }) })
  ] });
}
function PillList(context) {
  const { items, tone } = context;
  return /* @__PURE__ */ jsx("ul", { className: "mt-5 flex flex-wrap gap-3", children: items.map((item) => /* @__PURE__ */ jsx(
    "li",
    {
      className: cn(
        tone === "accent" && "rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-50",
        tone === "muted" && "rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-stone-200"
      ),
      children: item
    },
    item
  )) });
}
function AboutStack() {
  const { about } = useTranslations();
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-6 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white", children: about.skillsTitle }),
      /* @__PURE__ */ jsx(PillList, { items: about.skills, tone: "accent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur", children: [
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
