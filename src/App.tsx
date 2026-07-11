import { ArrowRight, CheckCircle2, Clipboard, Code2, Download, Github, Globe2, Layers3, Menu, PackageCheck, Radio, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { RouteMap } from "./components/RouteMap";
import { copy } from "./content/copy";
import { engineering, features, metrics } from "./content/data";
import type { Locale } from "./content/types";

const navLinks = ["journey","features","engineering","resume","roadmap"] as const;

function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = copy[locale];
  const appStoreUrl = locale === "zh"
    ? "https://apps.apple.com/cn/app/%E8%B0%B7%E5%AD%90%E5%90%A7-%E6%91%86%E6%91%8A%E8%AE%B0%E8%B4%A6%E5%BA%93%E5%AD%98%E5%B0%8F%E5%8A%A9%E6%89%8B/id6753799200"
    : "https://apps.apple.com/th/app/goodsbar/id6753799200?platform=vision";
  useEffect(() => { document.documentElement.lang = locale === "zh" ? "zh-Hans" : "en"; }, [locale]);
  const handleCopy = async () => { await navigator.clipboard.writeText(t.resume.text); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  const handleLocale = () => setLocale((value) => {
    const next = value === "en" ? "zh" : "en";
    document.documentElement.lang = next === "zh" ? "zh-Hans" : "en";
    return next;
  });
  const handleNav = () => setMenuOpen(false);

  return <div className="app-shell">
    <header className="site-header"><a className="brand" href="#top" aria-label="GoodsBar home"><img src={`${import.meta.env.BASE_URL}logo.png`} alt=""/><span>GoodsBar</span></a>
      <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">{navLinks.map((id)=><a key={id} href={`#${id}`} onClick={handleNav}>{t.nav[id]}</a>)}</nav>
      <div className="header-actions"><button className="language" onClick={handleLocale} aria-label="Switch language"><Globe2 size={16}/>{locale === "en" ? "中文" : "EN"}</button><button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button></div>
    </header>

    <main id="top">
      <section className="hero section-wrap"><div className="hero-copy"><p className="eyebrow"><Sparkles size={16}/>{t.hero.eyebrow}</p><h1>{t.hero.title}</h1><p className="hero-lead">{t.hero.description}</p><div className="hero-actions"><a className="button primary" href={appStoreUrl} target="_blank" rel="noreferrer"><Download size={17}/>{t.hero.appStore}</a><a className="button secondary" href="#journey">{t.hero.explore}<ArrowRight size={17}/></a><a className="button secondary" href="https://github.com/NekoWings/GoodsBar" target="_blank" rel="noreferrer"><Github size={17}/>{t.hero.source}</a></div><p className="notice"><Radio size={14}/>{t.hero.notice}</p></div>
        <div className="hero-visual"><div className="sun-orb"/><div className="device"><div className="device-bar"><span/><span/><span/></div><img src={`${import.meta.env.BASE_URL}screenshots/dashboard.png`} alt="GoodsBar dashboard showing sample event and inventory data"/></div><div className="floating-card card-one"><PackageCheck/><span>Offline inventory</span></div><div className="floating-card card-two"><Layers3/><span>End-to-end product</span></div></div>
      </section>

      <section className="story section-wrap"><div className="section-heading"><p className="eyebrow">{t.story.eyebrow}</p><h2>{t.story.title}</h2><p>{t.story.description}</p></div><div className="story-steps">{t.story.steps.map((step,index)=><div key={step}><span>{index+1}</span><p>{step}</p>{index<t.story.steps.length-1&&<ArrowRight aria-hidden="true"/>}</div>)}</div><div className="metrics">{metrics.map(metric=><div key={metric.label.en}><strong>{metric.value}</strong><span>{metric.label[locale]}</span></div>)}</div></section>

      <RouteMap locale={locale} labels={t.journey}/>

      <section id="features" className="section-wrap scroll-mt-24"><div className="section-heading"><p className="eyebrow"><PackageCheck size={16}/>{t.features.eyebrow}</p><h2>{t.features.title}</h2></div><div className="feature-grid">{features.map((feature,index)=><article className="feature-card" key={feature.id}><div className={`feature-icon tone-${index%4}`}><CheckCircle2/></div><span className={`status ${feature.status}`}>{t.roadmap[feature.status]}</span><h3>{feature.title[locale]}</h3><p>{feature.description[locale]}</p></article>)}</div></section>

      <section id="engineering" className="engineering-section scroll-mt-24"><div className="section-wrap"><div className="section-heading light"><p className="eyebrow"><Code2 size={16}/>{t.engineering.eyebrow}</p><h2>{t.engineering.title}</h2><p>{t.engineering.description}</p></div><div className="architecture"><div>React Native UI</div><ArrowRight/><div>Zustand stores</div><ArrowRight/><div>Service layer</div><ArrowRight/><div>Drizzle + SQLite</div></div><div className="engineering-grid">{engineering.map((item)=><article key={item.title.en}><h3>{item.title[locale]}</h3><p>{item.description[locale]}</p><div>{item.technologies.map(tech=><span key={tech}>{tech}</span>)}</div></article>)}</div></div></section>

      <section id="resume" className="resume section-wrap scroll-mt-24"><div><p className="eyebrow"><Clipboard size={16}/>{t.resume.eyebrow}</p><h2>{t.resume.title}</h2><p className="resume-role">{t.resume.role}</p></div><div className="resume-card"><p>{t.resume.text}</p><button className="button secondary" onClick={handleCopy}><Clipboard size={16}/>{copied?t.resume.copied:t.resume.copy}</button></div></section>

      <section id="roadmap" className="section-wrap scroll-mt-24"><div className="section-heading"><p className="eyebrow">{t.roadmap.eyebrow}</p><h2>{t.roadmap.title}</h2></div><div className="status-board">{(["shipped","beta","planned"] as const).map(status=><div key={status}><h3><span className={`status-dot ${status}`}/>{t.roadmap[status]}</h3>{features.filter(feature=>feature.status===status).map(feature=><p key={feature.id}>{feature.title[locale]}</p>)}</div>)}</div></section>
    </main>

    <footer><div className="section-wrap"><img src={`${import.meta.env.BASE_URL}logo.png`} alt=""/><h2>{t.footer.title}</h2><p>{t.footer.description}</p><a href="https://github.com/NekoWings" target="_blank" rel="noreferrer"><Github size={17}/>{t.footer.github}</a><small>{t.footer.notice}</small></div></footer>
  </div>;
}

export default App;
