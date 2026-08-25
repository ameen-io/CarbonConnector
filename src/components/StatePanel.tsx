import type { ReactNode } from "react";

interface StatePanelProps {
  title: string;
  description: string;
  action?: ReactNode;
  compact?: boolean;
}

export function StatePanel({ title, description, action, compact = false }: StatePanelProps) {
  return (
    <section className={`state-panel${compact ? " state-panel-compact" : ""}`}>
      <div className="state-panel-icon" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M10 8.75h18l10 10v20.5A2.75 2.75 0 0 1 35.25 42h-22.5A2.75 2.75 0 0 1 10 39.25V8.75Z" />
          <path d="M28 8.75v10h10M17 27h14M17 33h10" />
        </svg>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      {action ? <div className="state-panel-action">{action}</div> : null}
    </section>
  );
}
