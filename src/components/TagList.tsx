import { Component, type ReactNode } from "react";

interface TagListProps {
  tags: readonly string[];
  /** "rail" sits in the right column on desktop; "inline" wraps under the copy on mobile. */
  variant: "rail" | "inline";
}

export class TagList extends Component<TagListProps> {
  render(): ReactNode {
    const { tags, variant } = this.props;

    return (
      <div className={`project__tags--${variant}`}>
        {tags.map((tag) => (
          <span key={tag} className="label">
            {tag}
          </span>
        ))}
      </div>
    );
  }
}
