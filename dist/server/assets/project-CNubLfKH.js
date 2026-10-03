import { jsxs, jsx } from "react/jsx-runtime";
import { P as Page } from "./page-shell-ikbNTwR-.js";
import { Code2, ArrowUpRight } from "lucide-react";
import { u as useTranslations } from "./router-DivKTyu2.js";
import "@tanstack/react-router";
import "react";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-select";
const alquilerSeguroImage = "/assets/Alquiler_Seguro_Laptop-D8xIEv7t.png";
const pokeFinderImage = "/assets/Pokefinder_Laptop-Dx-yAeij.png";
const vrTourImage = "/assets/VR_tour_Laptop-Bg6FuLIN.png";
function ProjectCard(context) {
  const { title, description, github, image, demo } = context.project;
  const { labels } = context;
  return /* @__PURE__ */ jsxs("article", { className: "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-2xl hover:shadow-slate-950/50", children: [
    /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] opacity-80" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-24 h-24 w-24 rounded-full bg-cyan-300/8 blur-3xl transition duration-500 group-hover:bg-cyan-300/12" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: title,
          className: "pt-5 aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]",
          decoding: "async",
          loading: "lazy",
          src: image
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/70 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,transparent_70%,rgba(255,255,255,0.04))]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-4 p-5 sm:p-6", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "h-px w-14 bg-gradient-to-r from-cyan-300/70 to-transparent" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-white sm:text-2xl", children: title }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-3 text-sm leading-6 text-stone-300", children: description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-auto flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            "aria-label": `${title} ${labels.sourceAriaSuffix}`,
            className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100",
            href: github,
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              /* @__PURE__ */ jsx(Code2, { className: "size-4" }),
              labels.source
            ]
          }
        ),
        demo ? /* @__PURE__ */ jsxs(
          "a",
          {
            "aria-label": `${title} ${labels.liveDemoAriaSuffix}`,
            className: "inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:border-cyan-300/50 hover:bg-cyan-300/20 hover:text-white",
            href: demo,
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" }),
              labels.liveDemo
            ]
          }
        ) : null
      ] })
    ] })
  ] });
}
const projectDefinitions = [
  {
    id: "pokefinder",
    title: "Pokefinder",
    image: pokeFinderImage,
    github: "https://github.com/vlicus/proyecto_colaborativo",
    demo: "https://vlicus.github.io/proyecto_colaborativo/"
  },
  {
    id: "lsbuVrTour",
    title: "LSBU VR Tour",
    image: vrTourImage,
    github: "https://github.com/vlicus/LSBU-AR-VR-TOUR"
  },
  {
    id: "secureRent",
    title: "Secure Rent",
    image: alquilerSeguroImage,
    github: "https://github.com/vlicus/PFB"
  }
];
function ProjectsPage() {
  const {
    projects
  } = useTranslations();
  return /* @__PURE__ */ jsxs(Page, { className: "max-w-6xl gap-16", children: [
    /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: projects.page.eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold tracking-tight text-white sm:text-5xl", children: projects.page.title }),
      /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-base leading-7 text-stone-300", children: projects.page.description })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3", children: projectDefinitions.map((project) => /* @__PURE__ */ jsx(ProjectCard, { labels: projects.labels, project: {
      title: project.title,
      description: projects.descriptions[project.id],
      image: project.image,
      github: project.github,
      demo: project.demo
    } }, project.title)) })
  ] });
}
export {
  ProjectsPage as component
};
