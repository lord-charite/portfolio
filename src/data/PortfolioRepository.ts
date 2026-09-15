import { Award } from "../models/Award";
import { Project } from "../models/Project";
import { SocialLink } from "../models/SocialLink";

/**
 * Every piece of content on the site lives here.
 *
 * This is the only file you need to open to add a project, change a tag, or
 * swap a link. Components ask the repository for data and never hold their own
 * copies, so there is exactly one source of truth.
 *
 * Built as a singleton: `PortfolioRepository.getInstance()` always returns the
 * same object, so the model objects are constructed once for the whole page.
 */
export class PortfolioRepository {
  private static instance: PortfolioRepository | null = null;

  private readonly projects: readonly Project[];
  private readonly awards: readonly Award[];
  private readonly socialLinks: readonly SocialLink[];

  private constructor() {
    this.projects = Object.freeze([
      new Project({
        index: "I.",
        category: "biomedical",
        title: "Statistical Analysis of Malaria Control Efforts in Sub-Saharan Africa",
        subtitle: "Angola, Nigeria, DRC & Uganda",
        description:
          "Multivariate regression, Pearson correlation, and time-series trend analysis (2005–2020) examining the interplay between healthcare access, socioeconomic conditions, and prevention strategies across four high-burden nations accounting for ~47.4% of global malaria cases.",
        tags: ["R", "Statistical Modeling", "Public Health", "Time-Series"],
      }),
      new Project({
        index: "II.",
        category: "biomedical",
        title: "Exploiting N-Terminal CSP Epitopes of Plasmodium Falciparum",
        subtitle: "Malaria Vaccine Development via Site-Directed Mutagenesis",
        description:
          "Designed a research framework using site-directed mutagenesis, immunogenic profiling, and structural analysis to identify and optimize high-affinity antibody targets within the circumsporozoite protein's N-terminal region — advancing epitope discovery for next-generation malaria vaccines.",
        tags: ["Molecular Biology", "Immunology", "PCR", "Vaccine Design"],
      }),
      new Project({
        index: "III.",
        category: "biomedical",
        title: "EEG Processing Pipeline for Objective Autism Diagnosis",
        subtitle: "Neural Signal Processing & ML Classification",
        description:
          "Led a 4-person team building a machine learning pipeline to analyze 200+ EEG recordings for objective ASD diagnosis, achieving 74% validation accuracy. Reviewed 25+ peer-reviewed publications to build a scientific validation framework aligning algorithm development with neurophysiological research.",
        tags: ["Python", "EEG", "Signal Processing", "Machine Learning", "Project Management"],
      }),
      new Project({
        index: "IV.",
        category: "biomedical",
        title: "Duck Car Control Theory",
        subtitle: "Autonomous Vehicle System Modeling",
        description:
          "Translated theoretical control modeling into a physical autonomous vehicle platform — sensor calibration, motor characterization, transfer-function derivation, and closed-loop compensator design validated through experimental trials.",
        tags: ["MATLAB", "Control Systems", "Robotics", "System ID"],
        note: "Demo video available",
      }),
      new Project({
        index: "V.",
        category: "computer-science",
        title: "Amazon Review Product Classification",
        subtitle: "NLP Binary Classification — LLM vs Traditional ML",
        description:
          "Designed an end-to-end NLP system to classify Amazon product reviews as positive or negative, combining prompt-engineered LLM inference with traditional ML classifiers (Logistic Regression, SVM) for comparison. Built a full preprocessing pipeline with tokenization, stopword removal, and TF-IDF vectorization.",
        tags: ["Python", "scikit-learn", "NLP", "LLM", "Pandas", "Matplotlib"],
      }),
      new Project({
        index: "VI.",
        category: "computer-science",
        title: "Huffman Encoding",
        subtitle: "File Compression & Decompression",
        description:
          "Implemented a full Huffman coding system from scratch — built a min-heap priority queue to construct the Huffman tree bottom-up, generated variable-length binary prefix codes, and wrote bit-level I/O for file encoding and decoding. Verified lossless reconstruction via round-trip tests across multiple file types.",
        tags: ["Java", "Priority Queue", "Min-Heap", "Bitwise I/O", "OOP"],
      }),
      new Project({
        index: "VII.",
        category: "computer-science",
        title: "Bacon Number — Graph-Based Social Network",
        subtitle: "Shortest Path via BFS",
        description:
          "Modeled actor co-appearance networks as an unweighted undirected graph and computed shortest-path distances (Bacon Numbers) between any actor and Kevin Bacon using Breadth-First Search. Supported interactive queries for path reconstruction and average network separation statistics.",
        tags: ["Java", "Graph Theory", "BFS", "Adjacency List", "CLI"],
      }),
      new Project({
        index: "VIII.",
        category: "computer-science",
        title: "Sudoku",
        subtitle: "Interactive Terminal Game with Constraint Validation",
        description:
          "Built a complete Sudoku game engine in C featuring board initialization, user move input, and real-time legality checking across rows, columns, and 3×3 subgrids. Implemented constraint-satisfaction validation using 2D arrays and bitmasking, with a solve-assist mode using backtracking search.",
        tags: ["C", "Backtracking", "Bitmasking", "Terminal UI"],
      }),
    ]);

    this.awards = Object.freeze([
      new Award({
        title: "Outstanding Performance in the Bachelor of Engineering Capstone Project",
        detail: "Dartmouth Engineering",
      }),
      new Award({
        title: "DartUp Startup Pitch — 3rd Place",
        detail: "HULT Prize College-level Qualifications",
      }),
      new Award({
        title: "E.E. Just Fellowship Recipient",
        detail:
          "Research grant for Dartmouth minority undergraduates demonstrating high commitment to research",
      }),
    ]);

    this.socialLinks = Object.freeze([
      new SocialLink({
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/lordcharite/",
        handle: "professional",
      }),
      new SocialLink({
        label: "GitHub",
        href: "https://github.com/lord-charite",
        handle: "code",
      }),
      new SocialLink({
        label: "Substack",
        href: "https://substack.com/",
        handle: "writing",
      }),
      new SocialLink({
        label: "Publications",
        href: "https://icjs.us/lord-charite-igirimbabazi/",
        handle: "research",
      }),
      new SocialLink({
        label: "Non-Profit",
        href: "https://www.instagram.com/apm_burundi/",
        handle: "community impact",
      }),
      new SocialLink({
        label: "Instagram",
        href: "https://www.instagram.com/llhumaine/",
        handle: "personal",
      }),
    ]);
  }

  static getInstance(): PortfolioRepository {
    if (this.instance === null) {
      this.instance = new PortfolioRepository();
    }
    return this.instance;
  }

  getBiomedicalProjects(): readonly Project[] {
    return this.projects.filter((project) => project.belongsTo("biomedical"));
  }

  getComputerScienceProjects(): readonly Project[] {
    return this.projects.filter((project) => project.belongsTo("computer-science"));
  }

  getAwards(): readonly Award[] {
    return this.awards;
  }

  getSocialLinks(): readonly SocialLink[] {
    return this.socialLinks;
  }

  /** Words cycled in the masthead. */
  getRoles(): readonly string[] {
    return [
      "Business Development.",
      "Life Sciences Analyst.",
      "Biomedical Research.",
      "Global Health.",
      "Writer.",
    ];
  }
}
