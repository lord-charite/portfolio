/**
 * An outbound link in the Connect section.
 */

export interface SocialLinkInit {
  label: string;
  href: string;
  handle: string;
}

export class SocialLink {
  readonly label: string;
  readonly href: string;
  readonly handle: string;

  constructor(init: SocialLinkInit) {
    this.label = init.label;
    this.href = init.href;
    this.handle = init.handle;
  }

  get id(): string {
    return this.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
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
