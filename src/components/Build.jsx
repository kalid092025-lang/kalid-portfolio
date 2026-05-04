import {
  Gauge,
  LayoutDashboard,
  Palette,
  PanelsTopLeft,
  PlugZap,
} from "lucide-react";

const capabilities = [
  {
    icon: PanelsTopLeft,
    title: "Responsive websites",
    text: "Clean pages that adapt smoothly across phones, tablets, and desktop screens.",
  },
  {
    icon: Gauge,
    title: "React interfaces",
    text: "Interactive components with readable structure, motion, and practical user flows.",
  },
  {
    icon: PlugZap,
    title: "API-connected apps",
    text: "Frontend experiences that fetch, display, filter, and work with real data.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard-style tools",
    text: "Organized screens for scanning information, tracking status, and taking action.",
  },
  {
    icon: Palette,
    title: "Figma-to-code",
    text: "Turning designs and prototypes into polished, responsive implementation.",
  },
];

export default function Build() {
  return (
    <section id="build" className="build-section page-section">
      <div className="section-eyebrow">What I can build</div>

      <div className="build-grid">
        {capabilities.map(({ icon: Icon, title, text }) => (
          <article key={title} className="build-item">
            <Icon size={28} strokeWidth={1.7} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
