import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUp,
  Atom,
  Bot,
  Code2,
  Download,
  ExternalLink,
  Gauge,
  GitBranch,
  LayoutDashboard,
  Mail,
  Menu,
  MessageCircle,
  Palette,
  PanelsTopLeft,
  PlugZap,
  Send,
  X,
} from "lucide-react";
import "./styles.css";

const navItems = ["About", "Build", "Stack", "Work", "Contact"];

const buildItems = [
  {
    label: "Layout",
    icon: PanelsTopLeft,
    title: "Responsive websites",
    copy: "Clean pages that adapt smoothly across phones, tablets, and desktop screens.",
  },
  {
    label: "React",
    icon: Gauge,
    title: "React interfaces",
    copy: "Interactive components with readable structure, motion, and practical user flows.",
  },
  {
    label: "API",
    icon: PlugZap,
    title: "API-connected apps",
    copy: "Frontend experiences that fetch, display, filter, and work with real data.",
  },
  {
    label: "Tools",
    icon: LayoutDashboard,
    title: "Dashboard-style tools",
    copy: "Organized screens for scanning information, tracking status, and taking action.",
  },
  {
    label: "Handoff",
    icon: Palette,
    title: "Figma-to-code",
    copy: "Turning designs and prototypes into polished, responsive implementation.",
  },
];

const stackRows = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Responsive design"],
  },
  {
    title: "Product",
    items: ["Figma", "Design systems", "API integrations", "Performance"],
  },
  {
    title: "Tools",
    items: ["Node.js", "SQL", "Firebase", "Git", "GitHub"],
  },
];

const projects = [
  {
    title: "Energy MAP",
    summary:
      "Interactive mapping experience for exploring energy data across locations.",
    impact:
      "Built to make complex energy information easier to scan, compare, and act on.",
    stack: ["React", "Mapping", "UI Architecture"],
    liveLabel: "Repository",
    liveLink: "https://github.com/Kalid092025-lang/Energimerking",
    codeLink: "https://github.com/Kalid092025-lang/Energimerking",
  },
  {
    title: "Semantic Search",
    summary:
      "Search interface shaped around natural language queries and intent-driven results.",
    impact:
      "Explores how AI-style search can feel fast, useful, and approachable in the UI.",
    stack: ["React", "Search UX", "NLP"],
    liveLabel: "Repository",
    liveLink: "https://github.com/Kalid092025-lang/Semantic-Search",
    codeLink: "https://github.com/Kalid092025-lang/Semantic-Search",
  },
  {
    title: "Rick and Morty API",
    summary:
      "Character and episode explorer powered by external API data and responsive browsing.",
    impact:
      "Shows API integration, filtering, and a cleaner take on a familiar frontend challenge.",
    stack: ["React", "REST API", "Responsive UI"],
    liveLabel: "Repository",
    liveLink: "https://github.com/Kalid092025-lang/rickandmorty",
    codeLink: "https://github.com/Kalid092025-lang/rickandmorty",
  },
];

const quickPrompts = [
  "What does Khalid build?",
  "What is Khalid's stack?",
  "How can I contact Khalid?",
];

function iconProps(size = 18) {
  return { size, strokeWidth: 2, "aria-hidden": true };
}

function ParticleField() {
  const particles = useMemo(() => {
    const glow = Array.from({ length: 6 }, (_, index) => ({
      className: `particle particle-glow ${
        index % 2 === 0 ? "glow-gold" : "glow-white"
      }`,
      style: {
        width: `${120 + (index % 3) * 60}px`,
        height: `${120 + (index % 3) * 60}px`,
        left: `${(index * 17 + 9) % 95}%`,
        top: `${(index * 53 + 15) % 94}%`,
        animationDelay: `${(index * 1.1).toFixed(1)}s`,
        animationDuration: `${10 + index}s`,
      },
    }));

    const glass = Array.from({ length: 28 }, (_, index) => ({
      className: "particle particle-glass",
      style: {
        width: `${index % 4 === 0 ? 6 : 3}px`,
        height: `${index % 4 === 0 ? 6 : 3}px`,
        left: `${(index * 41 + 13) % 99}%`,
        top: `${(index * 17 + 5) % 96}%`,
        animationDelay: `${(index * 0.55).toFixed(2)}s`,
        animationDuration: `${6 + (index % 5)}s`,
      },
    }));

    const gold = Array.from({ length: 38 }, (_, index) => ({
      className: "particle particle-gold",
      style: {
        width: `${index % 5 === 0 ? 8 : index % 3 === 0 ? 6 : 4}px`,
        height: `${index % 5 === 0 ? 8 : index % 3 === 0 ? 6 : 4}px`,
        left: `${(index * 23 + 7) % 98}%`,
        top: `${(index * 31 + 11) % 97}%`,
        animationDelay: `${((index * 0.37) % 6).toFixed(2)}s`,
        animationDuration: `${5 + (index % 6)}s`,
      },
    }));

    return [...glow, ...glass, ...gold];
  }, []);

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          key={index}
          className={particle.className}
          style={particle.style}
        />
      ))}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={open ? "page-header nav-open" : "page-header"}>
      <div className="header-inner">
        <a className="site-brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">KI</span>
          <span>Khalid Ismail</span>
        </a>

        <nav aria-label="Main navigation" className="site-nav">
          {navItems.map((item) => (
            <a key={item} className="nav-link" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X {...iconProps()} /> : <Menu {...iconProps()} />}
        </button>
      </div>

      <nav aria-label="Mobile navigation" className="mobile-nav">
        {navItems.map((item) => (
          <a
            key={item}
            className="nav-link"
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          className="nav-link menu-cv-link"
          href="/CV Khalid 2026 1.pdf"
          download
          onClick={() => setOpen(false)}
        >
          <Download {...iconProps(16)} />
          Download CV
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section page-section" id="top">
      <div className="hero-aura" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content" style={{ opacity: 1, transform: "none" }}>
          <div className="hero-eyebrow">Oslo based frontend engineer</div>
          <h1 className="hero-title">
            <span>Designed to feel</span>
            <span>obvious.</span>
          </h1>
          <p className="hero-copy">
            I craft polished React interfaces with thoughtful interaction, strong
            visual systems, and the kind of detail that makes products feel
            smooth from the very first click.
          </p>

          <div className="hero-actions">
            <a className="primary-link" href="#work">
              Selected work
              <ArrowDownRight {...iconProps()} />
            </a>
            <a className="secondary-link" href="#contact">
              Contact me
            </a>
            <a
              className="icon-link"
              href="/CV Khalid 2026 1.pdf"
              rel="noreferrer"
              target="_blank"
              aria-label="Open Khalid Ismail CV"
            >
              <Download {...iconProps()} />
            </a>
          </div>

          <div className="hero-proof" aria-label="Portfolio highlights">
            <span>React</span>
            <span>Design systems</span>
            <span>API products</span>
            <span>Performance</span>
          </div>

          <div className="hero-code-note" aria-label="Frontend build note">
            <div className="code-note-top">
              <span />
              <span />
              <span />
            </div>
            <pre>{`const interface = {
  clear: true,
  responsive: "every viewport",
  feeling: "calm and fast"
};`}</pre>
          </div>

          <aside className="hero-plain-note" aria-label="Plain language summary">
            Built to be fast to understand, easy to use, and calm on every
            screen.
          </aside>
        </div>

        <aside className="hero-card" style={{ opacity: 1, transform: "none" }}>
          <img
            alt="Khalid Ismail"
            className="hero-card-image"
            src="/assets/khalid-paragliding-C3Gwu5dM.jpg"
          />
          <span className="hero-inspector-label">component: Hero.jsx</span>
          <span className="hero-measure hero-measure-top">responsive width</span>
          <span className="hero-measure hero-measure-side">mobile first</span>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section section page-section" id="about">
      <div className="container">
        <div className="section-heading" style={{ opacity: 1, transform: "none" }}>
          <div className="section-eyebrow">About me</div>
          <h2>I Design things to feel simple, even when it isn't.</h2>
        </div>

        <div className="about-grid about-grid-single">
          <div className="about-copy glass-panel">
            <p>
              I am an Oslo-based frontend developer with experience across
              logistics, interpreting, customer service, and product delivery.
              That mix taught me to stay structured under pressure, communicate
              clearly, and solve problems with precision and care.
            </p>
            <p>
              My technical foundation includes React, CSS, JavaScript, Node.js,
              SQL, Figma, Git/GitHub, responsive design, and API-driven
              products. I turn complex requirements into polished interfaces and
              keep product clarity at the center of every build.
            </p>
            <div className="about-highlights" aria-label="Key strengths">
              <span>Product focus</span>
              <span>Clear delivery</span>
              <span>Fast iteration</span>
              <span>Team partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Build() {
  return (
    <section className="build-section section page-section" id="build">
      <div className="container">
        <div className="section-heading" style={{ opacity: 1, transform: "none" }}>
          <div className="section-eyebrow">What I can build</div>
          <h2>Interfaces that feel intuitive from the start.</h2>
        </div>

        <div className="build-grid grid">
          {buildItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                className="build-item card"
                data-index={`0${index + 1}`}
                data-label={item.label}
                key={item.title}
              >
                <span className="icon-shell">
                  <Icon {...iconProps(28)} strokeWidth={1.7} />
                </span>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="stack-section section page-section" id="stack">
      <div className="container">
        <div className="section-heading" style={{ opacity: 1, transform: "none" }}>
          <div className="section-eyebrow">My stack</div>
          <h2>A focused toolkit for modern frontend work.</h2>
        </div>

        <div className="stack-grid grid">
          {stackRows.map((row) => (
            <div className="stack-row glass-panel" key={row.title}>
              <h2>{row.title}</h2>
              <div className="stack-items">
                {row.items.map((item) => (
                  <div className="stack-item" key={item}>
                    {item === "React" ? (
                      <Atom {...iconProps(24)} strokeWidth={1.8} />
                    ) : (
                      <Code2 {...iconProps(24)} strokeWidth={1.8} />
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work-section section page-section" id="work">
      <div className="container">
        <div className="work-heading">
          <div>
            <div className="section-eyebrow">Selected work</div>
            <h2>Projects shaped around clarity, data, and real use.</h2>
          </div>
          <p>
            A small set of builds showing responsive UI, API work, search
            experiences, and product-minded frontend structure.
          </p>
        </div>

        <div className="work-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.title}>
              <div className="project-meta">0{index + 1}</div>
              <div className="project-main">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-side">
                <p>{project.impact}</p>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    className="text-link"
                    href={project.liveLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {project.liveLabel}
                    <ExternalLink {...iconProps(16)} />
                  </a>
                  <a
                    className="text-link"
                    href={project.codeLink}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View code
                    <GitBranch {...iconProps(16)} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section section page-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="section-eyebrow">Contact</div>
            <h2>
              Looking for a frontend developer who brings structure, polish, and
              calm product thinking.
            </h2>
          </div>

          <div className="contact-copy glass-panel">
            <p>
              I like projects where thoughtful design meets practical delivery.
              If you need responsive React interfaces, dashboards, API-connected
              screens, or a careful Figma-to-code implementation, I would be
              happy to talk.
            </p>
            <div className="contact-links">
              <a
                className="primary-link"
                href="mailto:khalidelmi.95@gmail.com"
              >
                <Mail {...iconProps()} />
                Email me
              </a>
              <a
                className="secondary-link"
                href="https://github.com/Kalid092025-lang"
                rel="noreferrer"
                target="_blank"
              >
                <GitBranch {...iconProps()} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function answerFor(input) {
  const text = input.toLowerCase();

  if (text.includes("contact") || text.includes("email")) {
    return "You can reach Khalid at khalidelmi.95@gmail.com. The GitHub profile is github.com/Kalid092025-lang.";
  }

  if (text.includes("stack") || text.includes("skills") || text.includes("tech")) {
    return "Khalid works with React, JavaScript, HTML, CSS, Node.js, SQL, Firebase, Git/GitHub, Figma, responsive design, and API integrations.";
  }

  if (text.includes("project") || text.includes("work") || text.includes("build")) {
    return "The selected projects include Energy MAP, Semantic Search, and a Rick and Morty API explorer. They show UI architecture, API integration, search UX, and responsive frontend work.";
  }

  return "Khalid is an Oslo-based frontend developer focused on polished React interfaces, responsive layouts, API-connected products, and clear product experiences.";
}

function RobotMark({ compact = false }) {
  return (
    <span
      className={
        compact
          ? "ai-robot-animation ai-robot-animation-compact"
          : "ai-robot-animation"
      }
      aria-hidden="true"
    >
      <span className="ai-robot-fallback">
        <span className="ai-robot-head">
          <span className="ai-robot-mouth" />
        </span>
        <span className="ai-robot-antenna" />
        <span className="ai-robot-shadow" />
      </span>
    </span>
  );
}

function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Ask me about Khalid's work, stack, projects, or how to contact him.",
    },
  ]);

  function sendMessage(value = input) {
    const trimmed = value.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: answerFor(trimmed) },
    ]);
    setInput("");
    setOpen(true);
  }

  return (
    <section className="ai-chat" aria-label="Ask Khalid AI">
      {open && (
        <div className="ai-chat-panel">
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <span className="ai-chat-avatar">
                <RobotMark compact />
              </span>
              <div>
                <h2>Ask Khalid AI</h2>
                <p>Portfolio assistant</p>
              </div>
            </div>
            <button
              className="ai-icon-button"
              type="button"
              aria-label="Close Ask Khalid AI"
              onClick={() => setOpen(false)}
            >
              <X {...iconProps(18)} />
            </button>
          </div>

          <div className="ai-suggestions">
            {quickPrompts.map((prompt) => (
              <button key={prompt} type="button" onClick={() => sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <div className="ai-messages">
            {messages.map((message, index) => (
              <div
                className={
                  message.role === "user"
                    ? "ai-message ai-message-user"
                    : "ai-message"
                }
                key={`${message.role}-${index}`}
              >
                <span className="ai-message-icon">
                  {message.role === "user" ? (
                    <MessageCircle {...iconProps(16)} />
                  ) : (
                    <Bot {...iconProps(16)} />
                  )}
                </span>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <form
            className="ai-chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              aria-label="Ask Khalid AI"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about skills, projects, contact..."
            />
            <button type="submit" disabled={!input.trim()} aria-label="Send">
              <Send {...iconProps(18)} />
            </button>
          </form>
        </div>
      )}

      {!open && (
        <button
          aria-label="Open Ask Khalid AI"
          className="ai-chat-launcher"
          type="button"
          onClick={() => setOpen(true)}
        >
          <RobotMark />
          <span className="ai-chat-launcher-label">Ask Khalid AI</span>
        </button>
      )}
    </section>
  );
}

export default function App() {
  return (
    <>
      <ParticleField />
      <Header />
      <main className="site-shell">
        <Hero />
        <About />
        <Build />
        <Stack />
        <Work />
        <Contact />
      </main>
      <AiChat />
      <a className="back-to-top" href="#top" aria-label="Go to top">
        <ArrowUp {...iconProps(20)} />
      </a>
    </>
  );
}
