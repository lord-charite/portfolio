import { Component, type ReactNode } from "react";

import type { ProjectLink } from "../models/ProjectLink";

interface LinkListProps {
  links: readonly ProjectLink[];
}

/** Row of outbound links — papers, repos, demos — under a card's copy. */
export class LinkList extends Component<LinkListProps> {
  render(): ReactNode {
    const { links } = this.props;

    if (links.length === 0) return null;

    return (
      <div className="linklist">
        {links.map((link) => (
          
            key={link.id}
            href={link.href}
            target={link.target}
            rel={link.rel}
            className="label linklist__link"
          >
            {link.label} {"\u2197"}
          </a>
        ))}
      </div>
    );
  }
}
