/**
 * A single piece of work shown on the site.
 *
 * Projects are constructed once by PortfolioRepository and then treated as
 * immutable — every field is readonly, so a component can never accidentally
 * mutate shared data while rendering.
 */

import { ProjectLink } from "./ProjectLink";

export type ProjectCategory = "biomedical" | "computer-science";

export interface ProjectInit {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  note?: string;
  links?: ProjectLink[];
}

export class Project {
  readonly index: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly category: ProjectCategory;
  readonly note?: string;
  readonly links: readonly ProjectLink[];

  constructor(init: ProjectInit) {
    this.index = init.index;
    this.title = init.title;
    this.subtitle = init.subtitle;
    this.description = init.description;
    this.tags = Object.freeze([...init.tags]);
    this.category = init.category;
    this.note = init.note;
    this.links = Object.freeze([...(init.links ?? [])]);
    
  }

  /** Stable key for React lists — derived from the title, not the array position. */
  get id(): string {
    return this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  hasNote(): this is Project & { note: string } {
    return typeof this.note === "string" && this.note.length > 0;
  }

  hasLinks(): boolean {
    return this.links.length > 0;
  }

  belongsTo(category: ProjectCategory): boolean {
    return this.category === category;
  }
}
