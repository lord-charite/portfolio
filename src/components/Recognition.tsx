import { Component, type ReactNode } from "react";

import type { Award } from "../models/Award";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

interface RecognitionProps {
  awards: readonly Award[];
}

export class Recognition extends Component<RecognitionProps> {
  private static readonly STAGGER_MS = 60;

  render(): ReactNode {
    const { awards } = this.props;

    return (
      <section id="recognition" className="wrap section">
        <SectionHead title="Recognition" />
        <ul>
          {awards.map((award, position) => (
            <Reveal
              as="li"
              key={award.id}
              delay={position * Recognition.STAGGER_MS}
              className="award hairline"
            >
              <span className="award__index">{award.marker(position)}</span>
              <div>
                <p className="award__title">{award.title}</p>
                <p className="award__detail">{award.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    );
  }
}
