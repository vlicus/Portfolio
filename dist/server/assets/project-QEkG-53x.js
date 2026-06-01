import { jsxs, jsx } from "react/jsx-runtime";
import { P as Page } from "./page-shell-B-EVpYtW.js";
import { Code2, ArrowUpRight } from "lucide-react";
import { u as useTranslations } from "./router-DJuFLFCA.js";
import "@tanstack/react-router";
import "react";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
const alquilerSeguroImage = "/assets/Alquiler_Seguro_Laptop-D8xIEv7t.png";
const pokeFinderImage = "/assets/Pokefinder_Laptop-Dx-yAeij.png";
const vrTourImage = "/assets/VR_tour_Laptop-Bg6FuLIN.png";
function ProjectCard(context) {
  const { title, description, github, image, demo } = context.project;
  const { labels } = context;
  return /* @__PURE__ */ jsxs("article", { className: "flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur", children: [
    /* @__PURE__ */ jsx("img", { alt: title, className: "aspect-[16/10] w-full object-cover", decoding: "async", loading: "lazy", src: image }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col gap-4 p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-white", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-6 text-stone-300", children: description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-auto flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            "aria-label": `${title} ${labels.sourceAriaSuffix}`,
            className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100",
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
            className: "inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/20",
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
  return /* @__PURE__ */ jsxs(Page, { className: "max-w-6xl gap-12", children: [
    /* @__PURE__ */ jsxs("section", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-[0.3em] text-cyan-300", children: projects.page.eyebrow }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-semibold tracking-tight text-white sm:text-5xl", children: projects.page.title }),
      /* @__PURE__ */ jsx("p", { className: "max-w-3xl text-base leading-7 text-stone-300 sm:text-lg", children: projects.page.description })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "grid gap-6 lg:grid-cols-3", children: projectDefinitions.map((project) => /* @__PURE__ */ jsx(ProjectCard, { labels: projects.labels, project: {
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
