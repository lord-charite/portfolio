import { Component, type ReactNode } from "react";

import { PortfolioRepository } from "../data/PortfolioRepository";
import { Connect } from "./Connect";
import { Intro } from "./Intro";
import { Masthead } from "./Masthead";
import { ProjectSection } from "./ProjectSection";
import { Recognition } from "./Recognition";

/**
 * Composes the page. Content is pulled from the repository once, so adding a
 * project or link means editing src/data/PortfolioRepository.ts and nothing here.
 */
export class App extends Component {
  private readonly repository = PortfolioRepository.getInstance();

  render(): ReactNode {
    return (
      <>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <Masthead name="Lordie" roles={this.repository.getRoles()} />

        <main id="main-content">
          <Intro />

          <ProjectSection
            id="biomedical"
            title="Biomedical Engineering"
            projects={this.repository.getBiomedicalProjects()}
          />

          <ProjectSection
            id="computer-science"
            title="Computer Science"
            projects={this.repository.getComputerScienceProjects()}
          />

          <Recognition awards={this.repository.getAwards()} />

          <Connect links={this.repository.getSocialLinks()} />
        </main>
      </>
    );
  }
}
