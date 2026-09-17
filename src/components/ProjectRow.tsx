import { Component, type ReactNode } from "react";
import { LinkList } from "./LinkList";
import type { Project } from "../models/Project";
import { Reveal } from "./Reveal";
import { TagList } from "./TagList";

interface ProjectRowProps {
  project: Project;
  delay: number;
}

/** One row in a project section: index, copy, and tags. */
export class ProjectRow extends Component<ProjectRowProps> {
  render(): ReactNode {
    const { project, delay } = this.props;

    return (
      <Reveal as="article" delay={delay} className="project hairline">
        <span className="project__index">{project.index}</span>

        <div className="project__body">
          <h3 className="project__title">{project.title}</h3>
          <p className="project__subtitle">{project.subtitle}</p>
          <p className="project__desc">{project.description}</p>
          {project.hasNote() ? (
            <p className="label project__note">▶ {project.note}</p>
          ) : null}
          <LinkList links={project.links} />
          <TagList tags={project.tags} variant="inline" />
        </div>

        <TagList tags={project.tags} variant="rail" />
      </Reveal>
    );
  }
}
