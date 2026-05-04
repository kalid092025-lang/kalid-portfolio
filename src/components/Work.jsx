const projects = [
  {
    title: "Energy MAP",
    summary: "Interactive mapping experience for exploring energy data across locations.",
    impact:
      "Built to make complex energy information easier to scan, compare, and act on.",
    stack: ["React", "Mapping", "UI Architecture"],
    liveLabel: "Repository",
    liveLink: "https://github.com/Khalid092025-lang/Energimerking",
    codeLink: "https://github.com/Khalid092025-lang/Energimerking",
  },
  {
    title: "Semantic Search",
    summary: "Search interface shaped around natural language queries and intent-driven results.",
    impact:
      "Explores how AI-style search can feel fast, useful, and approachable in the UI.",
    stack: ["React", "Search UX", "NLP"],
    liveLabel: "Repository",
    liveLink: "https://github.com/Khalid092025-lang/Semantic-Search",
    codeLink: "https://github.com/Khalid092025-lang/Semantic-Search",
  },
  {
    title: "Rick and Morty API",
    summary: "Character and episode explorer powered by external API data and responsive browsing.",
    impact:
      "Shows API integration, filtering, and a cleaner take on a familiar frontend challenge.",
    stack: ["React", "REST API", "Responsive UI"],
    liveLabel: "Repository",
    liveLink: "https://github.com/Khalid092025-lang/rickandmorty",
    codeLink: "https://github.com/Khalid092025-lang/rickandmorty",
  },
];

export default function Work() {
  return (
    <section id="work" className="work-section page-section">
      <div className="section-eyebrow">Selected work</div>

      <div className="work-list">
          {projects.map((project, index) => (
            <article key={project.title} className="project-row">
              <div className="project-meta">0{index + 1}</div>
              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-side">
                <p>{project.impact}</p>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    {project.liveLabel}
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    View code
                  </a>
                </div>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
