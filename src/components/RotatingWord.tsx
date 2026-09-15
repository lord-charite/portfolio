import { Component, type ReactNode } from "react";

interface RotatingWordProps {
  words: readonly string[];
  className?: string;
}

interface RotatingWordState {
  index: number;
  exiting: boolean;
}

/**
 * Cycles a list of words with a short slide-and-fade. Used in the masthead so
 * the header feels alive without being loud.
 */
export class RotatingWord extends Component<RotatingWordProps, RotatingWordState> {
  private static readonly HOLD_MS = 2600;
  private static readonly FADE_MS = 240;

  private cycleTimer: number | undefined;
  private swapTimer: number | undefined;

  state: RotatingWordState = { index: 0, exiting: false };

  componentDidMount(): void {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || this.props.words.length < 2) return;

    this.cycleTimer = window.setInterval(this.advance, RotatingWord.HOLD_MS);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.cycleTimer);
    window.clearTimeout(this.swapTimer);
  }

  private advance = (): void => {
    this.setState({ exiting: true });

    this.swapTimer = window.setTimeout(() => {
      this.setState((previous) => ({
        index: (previous.index + 1) % this.props.words.length,
        exiting: false,
      }));
    }, RotatingWord.FADE_MS);
  };

  render(): ReactNode {
    const { words, className } = this.props;
    const { index, exiting } = this.state;

    return (
      <span
        className={className}
        style={{
          display: "inline-block",
          opacity: exiting ? 0 : 1,
          transform: exiting ? "translateY(-40%)" : "translateY(0)",
          transition: `opacity ${RotatingWord.FADE_MS}ms ease, transform ${RotatingWord.FADE_MS}ms ease`,
        }}
      >
        {words[index]}
      </span>
    );
  }
}
