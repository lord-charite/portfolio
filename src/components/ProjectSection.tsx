import { Component, type ReactNode } from "react";

import type { Project } from "../models/Project";
import { ProjectRow } from "./ProjectRow";
import { SectionHead } from "./SectionHead";

interface ProjectSectionProps {
  id: string;
  title: string;
  projects: readonly Project[];
}

/** A titled group of project rows. Used for both Biomedical and Computer Science. */
export class ProjectSection extends Component<ProjectSectionProps> {
  private static readonly STAGGER_MS = 60;

  render(): ReactNode {
    const { id, title, projects } = this.props;

    return (
      <section id={id} className="wrap section">
        <SectionHead title={title} />
        {projects.map((project, position) => (
          <ProjectRow
            key={project.id}
            project={project}
            delay={position * ProjectSection.STAGGER_MS}
          />
        ))}
      </section>
    );
  }
}
