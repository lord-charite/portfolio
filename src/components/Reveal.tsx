import { Component, createRef, type ReactNode } from "react";

type RevealTag = "div" | "section" | "li" | "article" | "p" | "header" | "footer";

interface RevealProps {
  children: ReactNode;
  /** Stagger, in milliseconds, applied to the entrance transition. */
  delay?: number;
  className?: string;
  as?: RevealTag;
}

interface RevealState {
  visible: boolean;
}

/**
 * Fades and lifts its children into place the first time they scroll into
 * view, then stops observing. Falls back to visible when IntersectionObserver
 * is unavailable, so content is never hidden by a missing browser feature.
 */
export class Reveal extends Component<RevealProps, RevealState> {
  private readonly nodeRef = createRef<HTMLElement>();
  private observer: IntersectionObserver | null = null;

  state: RevealState = { visible: false };

  componentDidMount(): void {
    const node = this.nodeRef.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      this.setState({ visible: true });
      return;
    }

    this.observer = new IntersectionObserver(this.handleIntersect, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.05,
    });

    this.observer.observe(node);
  }

  componentWillUnmount(): void {
    this.disconnect();
  }

  private handleIntersect = (entries: IntersectionObserverEntry[]): void => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        this.setState({ visible: true });
        this.disconnect();
      }
    }
  };

  private disconnect(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  render(): ReactNode {
    const { children, delay = 0, className = "", as = "div" } = this.props;
    const Tag = as as "div";

    return (
      <Tag
        ref={this.nodeRef as never}
        data-visible={this.state.visible ? "true" : "false"}
        style={{ transitionDelay: `${delay}ms` }}
        className={`reveal ${className}`.trim()}
      >
        {children}
      </Tag>
    );
  }
}
