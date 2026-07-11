import type { Locale, SiteCopy } from "./types";

const en = {
  nav: { journey: "Journey", features: "Features", engineering: "Engineering", resume: "Résumé", roadmap: "Status" },
  hero: { eyebrow: "Offline-first iPad POS", title: "Convention selling, calmly organized.", description: "GoodsBar brings catalog, inventory, checkout, fulfilment, and reporting into one focused workspace for independent convention sellers.", explore: "Explore the product", source: "View on GitHub", notice: "Independent product · Currently in beta" },
  story: { eyebrow: "The product story", title: "From a box of merchandise to a finished order.", description: "Convention booths move quickly, networks fail, and stock changes with every bundle and gift. GoodsBar keeps the entire workflow local, visual, and connected.", steps: ["Prepare a reusable catalog", "Configure each event", "Sell and fulfil at the booth", "Review orders and stock"] },
  journey: { eyebrow: "Interactive route map", title: "See how the product fits together.", description: "Choose a journey, then open any screen to see its purpose, key actions, and engineering decisions.", select: "Select a screen", actions: "What you can do", engineering: "Under the hood", related: "Connected screens" },
  features: { eyebrow: "Product capabilities", title: "Built around the realities of a busy booth." },
  engineering: { eyebrow: "Engineering case study", title: "A local-first system, not just a set of screens.", description: "The application separates UI, state, services, and persistence so inventory and orders remain dependable across complex workflows." },
  resume: { eyebrow: "Résumé-ready summary", title: "One product, end-to-end ownership.", role: "Independent Product Engineer & Designer", text: "Designed and built GoodsBar, an offline-first iPad POS for convention sellers, using Expo, React Native, TypeScript, Zustand, Drizzle ORM, and SQLite. Delivered inventory-aware bundles, event configuration, promotions, multilingual checkout, order analytics, backup and restore, LAN picking collaboration, subscription entitlements, automated tests, and platform-specific native performance modules.", copy: "Copy summary", copied: "Copied" },
  roadmap: { eyebrow: "Product status", title: "Clear about what exists today.", shipped: "Shipped", beta: "Beta", planned: "Planned" },
  footer: { title: "Built for sellers who would rather focus on their table.", description: "GoodsBar is an independent beta product. This showcase uses demonstration data; screens and capabilities may evolve.", github: "GitHub profile", notice: "© 2026 NekoWings · Product showcase" },
} satisfies SiteCopy;

const zh = {
  nav: { journey: "产品路径", features: "功能", engineering: "工程", resume: "简历", roadmap: "状态" },
  hero: { eyebrow: "离线优先的 iPad POS", title: "让同人展售卖井然有序。", description: "GoodsBar 为独立摊主提供制品、库存、结算、拣货与复盘一体化工作台。", explore: "探索产品", source: "在 GitHub 查看", notice: "独立产品 · 当前处于 Beta 阶段" },
  story: { eyebrow: "产品故事", title: "从一箱制品，到一笔完成的订单。", description: "展会现场节奏快、网络不可靠，套装和赠品也会不断改变库存。GoodsBar 让整个流程保持本地、直观且连贯。", steps: ["准备可复用制品库", "配置每场活动", "现场售卖与拣货", "复盘订单和库存"] },
  journey: { eyebrow: "交互式路由图", title: "了解产品如何连接起来。", description: "选择一个使用阶段，再打开任意页面，查看它的目标、主要操作与工程实现。", select: "选择一个页面", actions: "可以完成", engineering: "工程实现", related: "关联页面" },
  features: { eyebrow: "产品能力", title: "围绕繁忙摊位的真实需求打造。" },
  engineering: { eyebrow: "工程案例", title: "不只是一组页面，而是一套本地优先系统。", description: "应用分离界面、状态、服务和持久化层，让复杂流程中的订单和库存保持可靠。" },
  resume: { eyebrow: "简历摘要", title: "一个产品，端到端负责。", role: "独立产品工程师与设计师", text: "独立设计并开发 GoodsBar——面向同人展摊主的离线优先 iPad POS。技术栈包括 Expo、React Native、TypeScript、Zustand、Drizzle ORM 与 SQLite；实现库存联动套装、活动配置、促销、多语言结算、订单分析、备份恢复、局域网拣货协同、订阅权益、自动化测试以及平台原生性能模块。", copy: "复制摘要", copied: "已复制" },
  roadmap: { eyebrow: "产品状态", title: "明确区分已有能力与未来计划。", shipped: "已上线", beta: "测试中", planned: "计划中" },
  footer: { title: "把注意力留给摊位和客人。", description: "GoodsBar 是处于 Beta 阶段的独立产品。本展示站使用演示数据，界面与功能可能继续演进。", github: "GitHub 主页", notice: "© 2026 NekoWings · 产品展示" },
} satisfies SiteCopy;

export const copy: Record<Locale, SiteCopy> = { en, zh };
