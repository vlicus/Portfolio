import { jsx, jsxs } from "react/jsx-runtime";
import { P as Page } from "./page-shell-B9f6p8u-.js";
import { d as cn, u as useTranslations } from "./router-Cwi49Ojv.js";
import { Root, Trigger, Portal, Content, Provider } from "@radix-ui/react-tooltip";
import "@tanstack/react-router";
import "lucide-react";
import "react";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-select";
const resumeFile = "/assets/curriculum_Vitae_Samuel_Cobas-DQQxi_3u.pdf";
const cvImage = "/assets/curriculum_Vitae_Samuel_Cobas-DVDmzmuQ.webp";
function TooltipProvider(context) {
  const { ...props } = context;
  return /* @__PURE__ */ jsx(Provider, { "data-slot": "tooltip-provider", ...props });
}
function Tooltip(context) {
  const { ...props } = context;
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(Root, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger(context) {
  const { ...props } = context;
  return /* @__PURE__ */ jsx(Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent(context) {
  const { className, sideOffset = 8, ...props } = context;
  return /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(
    Content,
    {
      className: cn(
        "z-50 overflow-hidden rounded-md border border-white/10 bg-slate-950 px-3 py-1.5 text-sm text-stone-100 shadow-md shadow-slate-950/40 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
        className
      ),
      sideOffset,
      "data-slot": "tooltip-content",
      ...props
    }
  ) });
}
function ResumePanel() {
  const { resume } = useTranslations();
  const { download: resumeDownload, intro: resumeIntro } = resume;
  const { eyebrow, title, description, highlights } = resumeIntro;
  const { ariaLabel, previewAlt, tooltip } = resumeDownload;
  return /* @__PURE__ */ jsxs("section", { className: "grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] ", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-5 ", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "max-w-md text-4xl font-semibold tracking-tight text-white sm:text-5xl", children: title }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl text-base leading-7 text-stone-300", children: description }),
      /* @__PURE__ */ jsx("ul", { className: "grid gap-3 text-sm text-stone-200 sm:grid-cols-2 items-center", children: highlights.map((highlight) => /* @__PURE__ */ jsx("li", { className: "border-l border-cyan-300/50 pl-3", children: highlight }, highlight)) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        "a",
        {
          "aria-label": ariaLabel,
          className: "group relative block w-full max-w-3xl transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
          href: resumeFile,
          rel: "noopener noreferrer",
          target: "_blank",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-x-4 top-4 -z-10 h-full rounded-[2rem] bg-cyan-300/8 blur-3xl transition duration-500 group-hover:bg-cyan-300/12 sm:inset-x-8 sm:top-6" }),
            /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[1.5rem] border border-stone-200/80 bg-white shadow-[0_30px_80px_rgba(2,6,23,0.45)] ring-1 ring-white/5 transition duration-500 group-hover:border-cyan-200", children: /* @__PURE__ */ jsx(
              "img",
              {
                alt: previewAlt,
                className: "aspect-[210/297] w-full object-contain bg-white transition duration-500 group-hover:scale-[1.01] group-focus-visible:scale-[1.01]",
                decoding: "async",
                loading: "lazy",
                src: cvImage
              }
            ) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: tooltip }) })
    ] }) })
  ] });
}
function ResumePage() {
  return /* @__PURE__ */ jsx(Page, { className: "max-w-6xl gap-16", children: /* @__PURE__ */ jsx(ResumePanel, {}) });
}
export {
  ResumePage as component
};
