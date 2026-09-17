import { Component, type ReactNode } from "react";

import type { SocialLink } from "../models/SocialLink";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

interface ConnectProps {
  links: readonly SocialLink[];
}

export class Connect extends Component<ConnectProps> {
  private static readonly STAGGER_MS = 45;

  private get year(): number {
    return new Date().getFullYear();
  }

  render(): ReactNode {
    const { links } = this.props;

    return (
      <section id="connect" className="wrap section connect">
        <SectionHead title="Connect" />

        <Reveal as="p" className="connect__statement">
          If you are passionate about healthcare innovation, let's connect!
        </Reveal>

        <ul className="connect__list">
          {links.map((link, position) => (
            <Reveal as="li" key={link.id} delay={position * Connect.STAGGER_MS}>
              <a
                href={link.href}
                target={link.target}
                rel={link.rel}
                className="connect__link hairline"
              >
                <span className="connect__label">{link.label}</span>
                <span className="label">{link.handle} ↗</span>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="colophon hairline">
          <span className="label">© {this.year} Lord Charité</span>
          <span className="label">Stay humble, but hungry</span>
        </div>
      </section>
    );
  }
}
