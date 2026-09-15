import { Component, type ReactNode } from "react";

import { RotatingWord } from "./RotatingWord";

interface MastheadProps {
  name: string;
  roles: readonly string[];
}

/** The sticky inverted bar at the top of the page. */
export class Masthead extends Component<MastheadProps> {
  render(): ReactNode {
    const { name, roles } = this.props;

    return (
      <header className="masthead">
        <div className="masthead__bar">
          <span className="masthead__name">{name}</span>
          <span className="masthead__role">
            <RotatingWord words={roles} className="rotator" />
          </span>
        </div>
      </header>
    );
  }
}
