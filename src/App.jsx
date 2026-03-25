import { useState, useEffect, useRef } from "react";

const BIOMED_PROJECTS = [
  {
    num: "01",
    title: "Statistical Analysis of Malaria Control Efforts in Sub-Saharan Africa",
    subtitle: "Angola, Nigeria, DRC & Uganda",
    description:
      "Multivariate regression, Pearson correlation, and time-series trend analysis (2005–2020) examining the complex interplay between healthcare access, socioeconomic conditions, and prevention strategies across four high-burden nations accounting for ~47.4% of global malaria cases.",
    findings: [
      "Significant reductions in malaria incidence from 2005–2015, followed by plateau",
      "Strong correlation between economic growth and decreased malaria cases",
      "Bed-net usage and healthcare access identified as major predictive variables",
    ],
    tags: ["R", "Statistical Modeling", "Public Health", "Time-Series"],
    link: "https://drive.google.com/file/d/1C-831IuD08KKc6sqmsDuRKozVVxcLs8c/view?usp=sharing",
  },
  {
    num: "02",
    title: "Exploiting N-Terminal CSP Epitopes of Plasmodium Falciparum",
    subtitle: "Malaria Vaccine Development via Site-Directed Mutagenesis",
    description:
      "Designed a research framework using site-directed mutagenesis, immunogenic profiling, and structural analysis to identify and optimize high-affinity antibody targets within the circumsporozoite protein's N-terminal region — advancing epitope discovery for next-generation malaria vaccines.",
    findings: [
      "Structured pathway for discovering new epitopes and improving vaccine efficacy",
      "Integration of molecular biology techniques with translational vaccine design",
    ],
    tags: ["Molecular Biology", "Immunology", "PCR", "Vaccine Design"],
    link: "https://drive.google.com/file/d/1lat2NVgL8Prq1de7W3bMfQnS64JJYBfM/view?usp=sharing",
  },
  {
    num: "03",
    title: "EEG Processing Pipeline for Objective Autism Diagnosis",
    subtitle: "Neural Signal Processing & ML Classification",
    description:
      "Led a 4-person team building a machine learning pipeline to analyze 200+ EEG recordings for objective ASD diagnosis, achieving 74% validation accuracy. Reviewed 25+ peer-reviewed publications to build a scientific validation framework aligning algorithm development with neurophysiological research.",
    findings: [
      "Modular pipeline: preprocessing → spectral analysis → PCA → classification",
      "74% validation accuracy on EEG-based autism classification",
      "Cloud-based data organization ensuring reproducibility and scalability",
    ],
    tags: ["Python", "EEG", "Signal Processing", "Machine Learning", "Project Management"],
    link: "https://digitalcommons.dartmouth.edu/engs89_90/69/",
  },
  {
    num: "04",
    title: "Duck Car Control Theory",
    subtitle: "Autonomous Vehicle System Modeling",
    description:
      "Translated theoretical control modeling into a physical autonomous vehicle platform — sensor calibration, motor characterization, transfer-function derivation, and closed-loop compensator design validated through experimental trials.",
    findings: [
      "First-order models achieved R² > 0.995 fit to experimental motor response data",
      "Frequency-domain and root-locus techniques used for stability analysis",
    ],
    tags: ["MATLAB", "Control Systems", "Robotics", "System ID"],
    link: "https://drive.google.com/file/d/1uAgWbWJo2a6S6TuQCAoZe622HrHxatwf/view?usp=sharing",
    video: "https://youtube.com/shorts/RPzie5U321I",
  },
];

const CS_PROJECTS = [
  {
    num: "01",
    title: "Amazon Review Product Classification",
    subtitle: "NLP Binary Classification — LLM vs Traditional ML",
    description:
      "Designed an end-to-end NLP system to classify Amazon product reviews as positive or negative, combining prompt-engineered LLM inference with traditional ML classifiers (Logistic Regression, SVM) for comparison. Built a full preprocessing pipeline with tokenization, stopword removal, and TF-IDF vectorization.",
    findings: [
      "Comparative analysis of LLM-based vs. traditional ML classification performance",
      "Visualized with confusion matrices and ROC curves",
    ],
    tags: ["Python", "scikit-learn", "NLP", "LLM", "Pandas", "Matplotlib"],
    link: "https://github.com/lord-charite/Amazon-Review-Product-Classification",
  },
  {
    num: "02",
    title: "Huffman Encoding",
    subtitle: "File Compression & Decompression",
    description:
      "Implemented a full Huffman coding system from scratch — built a min-heap priority queue to construct the Huffman tree bottom-up, generated variable-length binary prefix codes, and wrote bit-level I/O for file encoding and decoding. Verified lossless reconstruction via round-trip tests across multiple file types.",
    findings: [
      "Handles arbitrary byte data with lossless reconstruction",
      "Analyzed compression ratios across text and binary file types",
    ],
    tags: ["Java", "Priority Queue", "Min-Heap", "Bitwise I/O", "OOP"],
    link: "https://github.com/lord-charite/Huffman-Encoding",
  },
  {
    num: "03",
    title: "Bacon Number — Graph-Based Social Network",
    subtitle: "Shortest Path via BFS",
    description:
      "Modeled actor co-appearance networks as an unweighted undirected graph and computed shortest-path distances (Bacon Numbers) between any actor and Kevin Bacon using Breadth-First Search. Supported interactive queries for path reconstruction and average network separation statistics.",
    findings: [
      "Adjacency-list graph representation over large-scale datasets",
      "Interactive CLI for path reconstruction and separation statistics",
    ],
    tags: ["Java", "Graph Theory", "BFS", "Adjacency List", "CLI"],
    link: "https://github.com/lord-charite/Bacon-Number-Social-Network-Analysis",
  },
  {
    num: "04",
    title: "Sudoku",
    subtitle: "Interactive Terminal Game with Constraint Validation",
    description:
      "Built a complete Sudoku game engine in C featuring board initialization, user move input, and real-time legality checking across rows, columns, and 3×3 subgrids. Implemented constraint-satisfaction validation using 2D arrays and bitmasking, with a solve-assist mode using backtracking search.",
    findings: [
      "Bitmasking for efficient constraint validation",
      "Backtracking solver to verify board solvability",
    ],
    tags: ["C", "Backtracking", "Bitmasking", "Terminal UI"],
    link: "https://github.com/lord-charite/Sudoku_Game",
  },
];

const AWARDS = [
  {
    title: "Outstanding Performance in the Bachelor of Engineering Capstone Project",
    source: "Dartmouth Engineering",
    link: "https://engineering.dartmouth.edu/events/investiture/academic-prizes",
  },
  {
    title: "DartUp Startup Pitch — 3rd Place",
    source: "HULT Prize College-level Qualifications",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7313249029809676288/",
  },
  {
    title: "E.E. Just Fellowship Recipient",
    source: "Research grant for Dartmouth minority undergraduates demonstrating high commitment to research",
    link: "https://lee-lab.engineering.dartmouth.edu/index.php/2022/09/12/welcome-charite-to-the-lab/",
  },
];

const LINKS = [
  { label: "GitHub", url: "https://github.com/lord-charite" },
  { label: "Substack", url: "https://substack.com/@lordiee" },
  { label: "Publications", url: "https://icjs.us/lord-charite-igirimbabazi/" },
  { label: "Non-Profit", url: "https://abarundikaziperiodmovement.wordpress.com/" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={index * 0.08}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit",
          borderTop: "1px solid var(--border)",
          padding: "3rem 0",
          transition: "background 0.3s",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.05em",
              color: "var(--accent)",
              marginTop: "0.35rem",
              flexShrink: 0,
            }}
          >
            {project.num}
          </span>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight: 400,
                lineHeight: 1.25,
                margin: 0,
                transition: "color 0.3s",
                color: hovered ? "var(--accent)" : "var(--fg)",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                color: "var(--muted)",
                margin: "0.5rem 0 0",
                fontStyle: "italic",
              }}
            >
              {project.subtitle}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "var(--fg-secondary)",
                margin: "1.25rem 0 0",
                maxWidth: "640px",
              }}
            >
              {project.description}
            </p>
            <div style={{ margin: "1.25rem 0 0", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.04em",
                    padding: "0.3rem 0.7rem",
                    border: "1px solid var(--border)",
                    borderRadius: "2px",
                    color: "var(--muted)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            {project.video && (
              <span
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--accent)",
                  letterSpacing: "0.03em",
                }}
              >
                ▶ Demo video available
              </span>
            )}
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--muted)",
              flexShrink: 0,
              marginTop: "0.35rem",
              transition: "transform 0.3s, color 0.3s",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            →
          </span>
        </div>
      </a>
    </FadeIn>
  );
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 500);

  return (
    <div style={styles.root}>
      <style>{cssVars}</style>

      {/* NAV */}
      <nav style={styles.nav}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 500, letterSpacing: "-0.01em" }}>
          LC
        </span>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[
            { label: "Biomedical", href: "work" },
            { label: "CS", href: "cs" },
            { label: "Awards", href: "awards" },
            { label: "Connect", href: "connect" },
          ].map((s) => (
            <a
              key={s.href}
              href={`#${s.href}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--fg)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ ...styles.hero, opacity: heroOpacity }}>
        <FadeIn>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 2rem",
            }}
          >
            Portfolio — {time.getFullYear()}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={styles.heroTitle}>
            Lord
            <br />
            Charité
          </h1>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p style={styles.heroSub}>
            Biomedical engineer at the intersection of global health, computational biology, and control systems.
            Dartmouth Engineering — committed to translating research into impact.
          </p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.06em",
                  color: "var(--accent)",
                  textDecoration: "none",
                  borderBottom: "1px solid transparent",
                  transition: "border-color 0.2s",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => (e.target.style.borderBottomColor = "var(--accent)")}
                onMouseLeave={(e) => (e.target.style.borderBottomColor = "transparent")}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* DIVIDER LINE */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>

      {/* BIOMEDICAL PROJECTS */}
      <section id="work" style={styles.section}>
        <FadeIn>
          <p style={styles.sectionLabel}>Biomedical Engineering</p>
        </FadeIn>
        <div>
          {BIOMED_PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </section>

      {/* CS PROJECTS */}
      <section id="cs" style={{ ...styles.section, paddingTop: "2rem" }}>
        <FadeIn>
          <p style={styles.sectionLabel}>Computer Science</p>
        </FadeIn>
        <div>
          {CS_PROJECTS.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" style={{ ...styles.section, paddingTop: "2rem" }}>
        <FadeIn>
          <p style={styles.sectionLabel}>Recognition</p>
        </FadeIn>
        {AWARDS.map((a, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                borderTop: "1px solid var(--border)",
                padding: "2rem 0",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.35,
                }}
              >
                {a.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                  margin: "0.5rem 0 0",
                  lineHeight: 1.6,
                  maxWidth: "540px",
                }}
              >
                {a.source}
              </p>
            </a>
          </FadeIn>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </section>

      {/* CONNECT */}
      <section id="connect" style={{ ...styles.section, paddingBottom: "6rem" }}>
        <FadeIn>
          <p style={styles.sectionLabel}>Connect</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1px",
              background: "var(--border)",
              border: "1px solid var(--border)",
              marginTop: "1rem",
            }}
          >
            {[
              { label: "GitHub", url: "https://github.com/lord-charite" },
              { label: "Substack", url: "https://substack.com/@lordiee" },
              { label: "Publications", url: "https://icjs.us/lord-charite-igirimbabazi/" },
              { label: "Non-Profit", url: "https://abarundikaziperiodmovement.wordpress.com/" },
              { label: "Instagram", url: "https://www.instagram.com/apm_burundi/" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.5rem 1.25rem",
                  background: "var(--bg)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  color: "var(--fg)",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--fg)";
                  e.currentTarget.style.color = "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--bg)";
                  e.currentTarget.style.color = "var(--fg)";
                }}
              >
                <span>{l.label}</span>
                <span style={{ fontSize: "0.85rem" }}>↗</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.06em", color: "var(--muted)" }}>
          © {time.getFullYear()} Lord Charité — Dartmouth Engineering
        </span>
      </footer>
    </div>
  );
}

const cssVars = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=IBM+Plex+Mono:wght@300;400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --bg: #e8e8e8;
    --fg: #1a1a18;
    --fg-secondary: #3d3d38;
    --muted: #8a8a82;
    --accent: #6b5c4c;
    --border: #e2e0db;
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'DM Sans', -apple-system, sans-serif;
    --font-mono: 'IBM Plex Mono', 'SF Mono', monospace;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--fg); -webkit-font-smoothing: antialiased; }

  ::selection {
    background: #6b5c4c22;
  }
  
  /*
  /* this will make background dark*/
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #e8e8e8;
      --fg: #1a1a18;
      --fg-secondary: #3d3d38;
      --muted: #8a8a82;
      --accent: #6b5c4c;
      --border: #c9c7c2;
    }
  }
  */
`;

const styles = {
  root: {
    background: "var(--bg)",
    color: "var(--fg)",
    minHeight: "100vh",
    fontFamily: "var(--font-body)",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.25rem 2rem",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    background: "color-mix(in srgb, var(--bg) 85%, transparent)",
  },
  hero: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "10rem 2rem 6rem",
  },
  heroTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
    fontWeight: 300,
    lineHeight: 0.95,
    letterSpacing: "-0.03em",
    margin: 0,
  },
  heroSub: {
    fontFamily: "var(--font-body)",
    fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
    fontWeight: 300,
    lineHeight: 1.7,
    color: "var(--fg-secondary)",
    maxWidth: "520px",
    marginTop: "2.5rem",
  },
  section: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "5rem 2rem",
  },
  sectionLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.7rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: "2.5rem",
  },
  footer: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "2rem",
    borderTop: "1px solid var(--border)",
  },
};
