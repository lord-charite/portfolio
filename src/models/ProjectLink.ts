/**
 * An outbound or in-site link attached to a Project — a paper, repo, or demo.
 *
 * Mirrors SocialLink: external-ness is derived from the href rather than
 * passed in, so a relative path to a PDF in public/ opens in the same tab
 * while a GitHub URL opens in a new one.
 */

export interface ProjectLinkInit {
  label: string;
  href: string;
}

export class ProjectLink {
  readonly label: string;
  readonly href: string;

  constructor(init: ProjectLinkInit) {
    this.label = init.label;
    this.href = init.href;
  }

  /** Stable key for React lists — hrefs are unique within a project. */
  get id(): string {
    return this.href;
  }

  /** External links open in a new tab and must not leak the referrer. */
  get isExternal(): boolean {
    return /^https?:\/\//.test(this.href);
  }

  get rel(): string | undefined {
    return this.isExternal ? "noreferrer noopener" : undefined;
  }

  get target(): string | undefined {
    return this.isExternal ? "_blank" : undefined;
  }
}
