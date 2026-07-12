export type Locale = "en" | "zh";
export type JourneyId = "prepare" | "event" | "sell" | "review" | "operate";

export interface LocalizedCopy { en: string; zh: string }
export interface RouteNode {
  id: string; journey: JourneyId; path: string; title: LocalizedCopy; summary: LocalizedCopy;
  actions: LocalizedCopy[]; engineering: LocalizedCopy; screenshot: string; related: string[];
}
export interface RouteConnection { from: string; to: string; label?: LocalizedCopy }
export interface Feature { id: string; title: LocalizedCopy; description: LocalizedCopy; status: "shipped" | "beta" | "planned" }
export interface EngineeringHighlight { title: LocalizedCopy; description: LocalizedCopy; technologies: string[] }
export interface ProjectMetric { value: string; label: LocalizedCopy }
export interface SiteCopy {
  nav: { journey: string; features: string; engineering: string; resume: string; roadmap: string };
  hero: { eyebrow: string; title: string; description: string; explore: string; appStore: string; source: string; notice: string };
  story: { eyebrow: string; title: string; description: string; steps: string[] };
  journey: { eyebrow: string; title: string; description: string; select: string; actions: string; engineering: string; related: string; loading: string; imageError: string };
  features: { eyebrow: string; title: string };
  engineering: { eyebrow: string; title: string; description: string };
  resume: { eyebrow: string; title: string; role: string; text: string; copy: string; copied: string };
  roadmap: { eyebrow: string; title: string; shipped: string; beta: string; planned: string };
  footer: { title: string; description: string; github: string; notice: string };
}
