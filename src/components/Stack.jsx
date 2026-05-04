import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Palette,
  ServerCog,
} from "lucide-react";

const groups = [
  {
    title: "Frontend",
    items: [
      { icon: Atom, label: "React" },
      { icon: Braces, label: "JavaScript" },
      { icon: FileCode2, label: "HTML/CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: ServerCog, label: "Node.js / Express" },
      { icon: Database, label: "SQL" },
      { icon: Globe, label: "API integrations" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: Palette, label: "Figma" },
      { icon: GitBranch, label: "Git/GitHub" },
      { icon: Code2, label: "Responsive design" },
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="stack-section page-section">
      <div className="section-eyebrow">My stack</div>

      <div className="stack-grid">
        {groups.map((group) => (
          <div key={group.title} className="stack-row">
            <h2>{group.title}</h2>

            <div className="stack-items">
              {group.items.map(({ icon: Icon, label }) => (
                <div key={label} className="stack-item">
                  <Icon size={24} strokeWidth={1.8} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
