import { Component, type ReactNode } from "react";

import { Reveal } from "./Reveal";

/** The two-column opening statement under the masthead. */
export class Intro extends Component {
  render(): ReactNode {
    return (
      <section className="wrap intro">
        <div className="intro__grid">
          <div className="intro__col intro__col--left">
            <Reveal as="p">
              I'm an <strong>engineer</strong> translating quantitative analysis into
              operational and strategic decisions across <span className="ink-link">pharma</span>,{" "}
              <span className="ink-link">healthcare technology</span>, and{" "}
              <span className="ink-link">business development</span>.
            </Reveal>
            <Reveal as="p" delay={70}>
              I've used data-driven insight to improve organization and product development
              processes at <span className="accent-link">Vertex Pharmaceuticals</span> and{" "}
              <span className="accent-link">Forus</span> (formerly Tandem Technology).
            </Reveal>
            <Reveal as="p" delay={140}>
              I'm building management engineering acumen to operate at the intersection of{" "}
              <span className="ink-link">scientific possibility</span> and{" "}
              <span className="ink-link">organizational feasibility</span> in healthcare and
              biotech.
            </Reveal>
          </div>

          <div className="intro__col intro__col--right">
            <Reveal as="p" delay={40}>
              <span className="accent-link accent-link--strong">Biomedical</span> — Research
              spanning immuno-specificity for influenza virus, malaria epidemiology across four
              high-burden nations, vaccine epitope discovery, EEG-based autism diagnosis, and
              control systems for autonomous platforms.
            </Reveal>
            <Reveal as="p" delay={110}>
              <span className="accent-link accent-link--strong">Computer Science</span> — Systems
              and algorithms built from first principles: compression, graphs, constraint solvers,
              and applied natural language processing.
            </Reveal>
            <Reveal as="p" delay={180}>
              <span className="accent-link accent-link--strong">Writing</span> — Notes on global
              health, the economics of medicine, and what it takes to move science from bench to
              system.
            </Reveal>
          </div>
        </div>
      </section>
    );
  }
}
