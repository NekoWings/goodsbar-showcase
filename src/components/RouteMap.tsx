import { ArrowRight, Check, Database, ExternalLink, Route } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { journeys, routes } from "../content/data";
import type { JourneyId, Locale, SiteCopy } from "../content/types";

export function RouteMap({ locale, labels }: { locale: Locale; labels: SiteCopy["journey"] }) {
  const [journey, setJourney] = useState<JourneyId>("prepare");
  const visible = useMemo(() => routes.filter((item) => item.journey === journey), [journey]);
  const [selectedId, setSelectedId] = useState("dashboard");
  const selected = routes.find((item) => item.id === selectedId) ?? visible[0];
  const [imageState, setImageState] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => { setImageState("loading"); }, [selected.id]);

  const handleJourney = (id: JourneyId) => { setJourney(id); setSelectedId(routes.find((item) => item.journey === id)?.id ?? "dashboard"); };
  const handleRelated = (id: string) => { const target = routes.find((item) => item.id === id); if (target) { setJourney(target.journey); setSelectedId(id); } };
  const handleImageLoad = () => setImageState("loaded");
  const handleImageError = () => setImageState("error");

  return <section id="journey" className="section-wrap scroll-mt-24">
    <div className="section-heading"><p className="eyebrow"><Route size={16}/>{labels.eyebrow}</p><h2>{labels.title}</h2><p>{labels.description}</p></div>
    <div className="journey-tabs" role="tablist" aria-label={labels.title}>
      {(Object.keys(journeys) as JourneyId[]).map((id) => <button key={id} role="tab" aria-selected={journey === id} className={journey === id ? "active" : ""} onClick={() => handleJourney(id)}>{journeys[id][locale]}</button>)}
    </div>
    <div className="route-layout">
      <div className="route-rail" role="tabpanel">
        <p className="rail-label">{labels.select}</p>
        {visible.map((item, index) => <button key={item.id} className={`route-node ${selected.id === item.id ? "active" : ""}`} onClick={() => setSelectedId(item.id)} aria-pressed={selected.id === item.id}>
          <span className="node-index">{String(index + 1).padStart(2,"0")}</span><span><strong>{item.title[locale]}</strong><small>{item.path}</small></span>{index < visible.length - 1 && <span className="route-line" aria-hidden="true"/>}
        </button>)}
      </div>
      <article className="route-detail" aria-live="polite">
        <div className="detail-copy"><div><span className="route-path">{selected.path}</span><h3>{selected.title[locale]}</h3><p className="detail-summary">{selected.summary[locale]}</p></div>
          <div><h4><Check size={16}/>{labels.actions}</h4><ul>{selected.actions.map((item) => <li key={item.en}>{item[locale]}</li>)}</ul></div>
          <div className="engineering-note"><h4><Database size={16}/>{labels.engineering}</h4><p>{selected.engineering[locale]}</p></div>
          <div><h4><ExternalLink size={16}/>{labels.related}</h4><div className="related-links">{selected.related.map((id) => { const item=routes.find((route)=>route.id===id); return item ? <button key={id} onClick={() => handleRelated(id)}>{item.title[locale]}<ArrowRight size={13}/></button> : null; })}</div></div>
        </div>
        <div className="detail-visual" aria-busy={imageState === "loading"}>
          {imageState === "loading" && <div className="image-loading" role="status"><span className="loading-spinner" aria-hidden="true"/><span>{labels.loading}</span></div>}
          {imageState === "error" && <div className="image-error" role="status">{labels.imageError}</div>}
          <img key={selected.id} className={imageState === "loaded" ? "is-loaded" : ""} src={`${import.meta.env.BASE_URL}screenshots/${selected.screenshot}`} alt={`${selected.title[locale]} — GoodsBar demonstration interface`} loading="lazy" onLoad={handleImageLoad} onError={handleImageError} />
        </div>
      </article>
    </div>
  </section>;
}
