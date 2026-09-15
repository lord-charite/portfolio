import { Component, type ReactNode } from "react";

import { Reveal } from "./Reveal";

interface SectionHeadProps {
  title: string;
  count?: string;
}

/** The small mono heading with a rule under it that opens each section. */
export class SectionHead extends Component<SectionHeadProps> {
  render(): ReactNode {
    const { title, count } = this.props;

    return (
      <Reveal className="section-head">
        <h2>{title}</h2>
        {count ? <span className="label section-head__count">{count}</span> : null}
      </Reveal>
    );
  }
}
