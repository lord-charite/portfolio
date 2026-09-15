/**
 * A prize, fellowship, or distinction listed under Recognition.
 */

export interface AwardInit {
  title: string;
  detail: string;
}

export class Award {
  readonly title: string;
  readonly detail: string;

  constructor(init: AwardInit) {
    this.title = init.title;
    this.detail = init.detail;
  }

  get id(): string {
    return this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  /** Marker shown in the left rail: A1, A2, A3… */
  marker(position: number): string {
    return `A${position + 1}`;
  }
}
