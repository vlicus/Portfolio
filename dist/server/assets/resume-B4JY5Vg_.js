import { jsx, jsxs } from "react/jsx-runtime";
import { P as Page } from "./page-shell-B-EVpYtW.js";
import { FileText, Download } from "lucide-react";
import { c as cn, u as useTranslations } from "./router-DJuFLFCA.js";
import { Root, Trigger, Portal, Content, Provider } from "@radix-ui/react-tooltip";
import "@tanstack/react-router";
import "react";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
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
  const { eyebrow, title, description } = resumeIntro;
  const {
    title: downloadTitle,
    /* description: downloadDescription, */
    label,
    ariaLabel,
    previewAlt,
    tooltip
  } = resumeDownload;
  return /* @__PURE__ */ jsxs("section", { className: "rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold tracking-tight text-white sm:text-5xl", children: title }),
        /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-base leading-7 text-stone-300", children: description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "inline-flex size-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100", children: /* @__PURE__ */ jsx(FileText, { className: "size-6" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:items-center", children: /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
        "a",
        {
          "aria-label": ariaLabel,
          className: "group relative mx-auto block w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-slate-950 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
          href: resumeFile,
          rel: "noopener noreferrer",
          target: "_blank",
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100", children: "PDF" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                alt: previewAlt,
                className: "aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]",
                decoding: "async",
                loading: "lazy",
                src: cvImage
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent px-5 py-5", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-white", children: downloadTitle }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-stone-200/90", children: label })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-slate-950 transition group-hover:bg-cyan-200", children: /* @__PURE__ */ jsx(Download, { className: "size-5" }) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: tooltip }) })
    ] }) })
  ] });
}
function ResumePage() {
  return /* @__PURE__ */ jsx(Page, { className: "max-w-4xl gap-10", children: /* @__PURE__ */ jsx(ResumePanel, {}) });
}
export {
  ResumePage as component
};
